import { GridView } from "@mui/icons-material";
import { Button } from "@mui/material";

const FeaturedAttraction = () => {
  return (
    <div className="fixed bottom-5 w-full z-[401] flex justify-center gap-2 items-center">
      <Button variant="outlined" className="w-12 !min-w-12 !bg-white h-12">
        <GridView sx={{ strokeWidth: "1px" }} />
      </Button>
      <Button variant="contained" className="h-12 !capitalize w-80">
        View Featured Attraction
      </Button>
    </div>
  );
};

export default FeaturedAttraction;
