import { PaletteMode, ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import { useTheme } from "./Context/ThemeContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const App = () => {
  const { mode } = useTheme();
  const client = new QueryClient({
    defaultOptions: { queries: { refetchOnWindowFocus: false } },
  });
  const theme = createTheme({
    palette: {
      primary: { main: "#034885" },
      secondary: {
        main: mode === "dark" ? "rgba(255, 255, 255, 1)" : "rgba(0, 0, 0, 1)",
      },
      mode: mode as PaletteMode,
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={client}>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
