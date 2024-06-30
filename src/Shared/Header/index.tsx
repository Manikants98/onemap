import { LocationOnOutlined, Search } from "@mui/icons-material";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { searchLocationsFn } from "../../Services/Search";
import Sidebar from "../Sidebar";

interface Location {
  name: string;
  address: string;
  latitude: number;
  longitude: number;
}

const Header: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);

  const { data } = useQuery({
    queryKey: ["Categories", search],
    queryFn: () => searchLocationsFn(search),
    enabled: search.trim().length > 0,
  });

  useEffect(() => {
    const handler = setTimeout(() => {
      setSearch(input);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [input]);

  const handleSuggestionClick = (suggestion: Location) => {
    setInput(suggestion.name);
    setShowSuggestions(false);
  };

  return (
    <div className="flex p-2 items-center justify-between bg-red-800">
      <div className="flex p-1 lg:bg-transparent justify-between items-center shadow-lg bg-white w-full rounded-full relative">
        <Sidebar />
        <div className="flex items-center lg:px-2 pr-2 lg:w-auto justify-between w-full lg:bg-white rounded">
          <LocationOnOutlined />
          <input
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setShowSuggestions(true);
            }}
            className="outline-none w-full bg-white placeholder:text-black placeholder:text-opacity-60 text-black bg-transparent p-2"
            placeholder="Ex. Marina Bay"
          />
          <Search />
        </div>
        {showSuggestions && data && data?.data && data?.data?.length > 0 && (
          <ul className="absolute top-[75px] right-0 w-1/3 bg-white border border-gray-300 rounded-md max-h-96 z-[9999] overflow-y-auto">
            {data?.data?.map((item: Location, index: number) => (
              <li
                key={index}
                className="px-4 py-2 flex flex-col hover:bg-gray-200 cursor-pointer"
                onClick={() => handleSuggestionClick(item)}
              >
                <strong> {item.name}</strong>
                <small>{item.address}</small>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;
