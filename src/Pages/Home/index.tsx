import { Chip, Paper, Skeleton } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import FeaturedAttraction from "../../Components/FeaturedAttraction";
import MapComponent from "../../Components/Map";
import { categoriesFn } from "../../Services/Category";
import classNames from "classnames";

interface categoryProps {
  icon: string;
  query_key: string;
  name: string;
}
const Home = () => {
  const [selectedCategory, setSelectedCategory] =
    React.useState<categoryProps>();
  const { data, isLoading } = useQuery({
    queryKey: ["Categories"],
    queryFn: categoriesFn,
  });

  return (
    <Paper className="!rounded-none h-full">
      <div className="flex items-center lg:justify-center hide-scroll overflow-x-auto p-1 gap-2">
        {isLoading
          ? [1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
              <Chip
                key={i}
                color="error"
                icon={
                  <Skeleton className="!w-5 !h-5 !ml-3 !scale-100 !rounded" />
                }
                className="!rounded-full !h-9"
                variant={"outlined"}
                label={<Skeleton className="w-32 !scale-100" />}
              />
            ))
          : data?.data?.map((category: categoryProps) => {
              const isSelected = category.name === selectedCategory?.name;
              return (
                <Chip
                  color="error"
                  key={category.query_key}
                  icon={
                    <img
                      alt=""
                      src={category.icon}
                      className={classNames(
                        "h-9",
                        isSelected ? "brightness-200" : "brightness-50"
                      )}
                    />
                  }
                  className="!h-9 !min-w-fit !rounded-full"
                  variant={isSelected ? "filled" : "outlined"}
                  label={category.name}
                  onClick={() => setSelectedCategory(category)}
                />
              );
            })}
      </div>
      <MapComponent />
      <FeaturedAttraction />
    </Paper>
  );
};

export default Home;
