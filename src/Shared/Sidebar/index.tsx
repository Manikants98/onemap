import {
  Close,
  DarkMode,
  KeyboardArrowRight,
  LightMode,
  Menu,
} from "@mui/icons-material";
import {
  Chip,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";
import classNames from "classnames";
import { useState } from "react";
import { useTheme } from "../../Context/ThemeContext";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState("English");
  const { mode, setMode } = useTheme();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <IconButton onClick={handleOpen}>
        <Menu
          className={classNames(
            "lg:!text-4xl lg:text-white",
            mode === "dark" ? "text-black" : ""
          )}
        />
      </IconButton>
      <Drawer
        open={open}
        onClose={handleClose}
        PaperProps={{ className: "!flex !flex-col !justify-between w-72" }}
      >
        <List>
          <ListItem className="!flex !justify-end">
            <IconButton onClick={handleClose}>
              <Close />
            </IconButton>
          </ListItem>
          <ListItemButton className="!justify-between">
            <p>Home</p> <KeyboardArrowRight />
          </ListItemButton>
          <Divider />
          <ListItemButton className="!justify-between">
            <p>Guides</p> <KeyboardArrowRight />
          </ListItemButton>
          <Divider />
          <ListItemButton className="!justify-between">
            <p>About</p> <KeyboardArrowRight />
          </ListItemButton>
          <Divider />
          <ListItemButton className="!justify-between">
            <p>Contact Us</p> <KeyboardArrowRight />
          </ListItemButton>
          <Divider />
          <ListItemButton className="!justify-between">
            <p>FAQs</p> <KeyboardArrowRight />
          </ListItemButton>
          <Divider />
          <ListItemButton className="!justify-between">
            <p>Privacy Policy</p> <KeyboardArrowRight />
          </ListItemButton>
          <Divider />
          <ListItemButton className="!justify-between">
            <p>Terms and Conditions</p> <KeyboardArrowRight />
          </ListItemButton>
          <Divider />
        </List>
        <List>
          <ListItem
            onClick={() =>
              mode === "dark" ? setMode("light") : setMode("dark")
            }
            className="!capitalize !gap-2"
          >
            <IconButton size="small">
              {mode === "dark" ? <LightMode /> : <DarkMode />}
            </IconButton>
            {mode} Mode
          </ListItem>
          <Divider />
          <ListItem>Language Conversion</ListItem>
          <ListItem disablePadding className="!flex !pb-2 !px-2 !gap-2">
            <Chip
              label="English"
              variant={language === "English" ? "filled" : "outlined"}
              color="secondary"
              onClick={() => setLanguage("English")}
            />
            <Chip
              label="中国人"
              variant={language === "中国人" ? "filled" : "outlined"}
              color="secondary"
              onClick={() => setLanguage("中国人")}
            />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Sidebar;
