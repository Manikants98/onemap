import { LocationOnOutlined, Search } from "@mui/icons-material";
import Sidebar from "../Sidebar";

const Header = () => {
  return (
    <div className="flex p-2 items-center justify-between bg-red-800">
      <div className="flex p-1 lg:bg-transparent justify-between items-center shadow-lg bg-white w-full rounded-full">
        <Sidebar />
        <div className="flex items-center lg:px-2 pr-2 lg:w-auto justify-between w-full lg:bg-white rounded">
          <LocationOnOutlined />
          <input
            className="outline-none w-full bg-white placeholder:text-black placeholder:text-opacity-60 text-black bg-transparent p-2"
            placeholder="Ex. Marina Bay"
          />
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Header;
