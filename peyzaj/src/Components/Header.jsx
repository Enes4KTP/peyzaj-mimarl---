import * as React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink, useLocation } from "react-router-dom";
import logo from "../images/animationplants/plant2..png";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: [
      "Poetsen One", // Belirtilen Google Font'u ekliyoruz
      "sans-serif",
    ].join(","),
  },
});
function Header() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const location = useLocation();

  const menuItems = [
    { text: "Ana Sayfa", link: "/", isActive: location.pathname === "/" },
    {
      text: "Projeler",
      link: "/projeler",
      isActive: location.pathname === "/projeler",
    },
    {
      text: "Bitki Örtüsü",
      link: "/bitkiler",
      isActive: location.pathname === "/bitkiler",
    },
    {
      text: "Peyzaj Mimarlığı",
      link: "/peyzaj",
      isActive: location.pathname === "/peyzaj",
    },
  ];

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <AppBar position="sticky" sx={{ bgcolor: "white" }}>
          <Toolbar sx={{ marginRight: "10%" }}>
            <img
              src={logo}
              alt=""
              style={{ height: "4rem", marginRight: "auto", marginLeft: "10%" }}
            />
            <IconButton
              color="inherit"
              aria-label="menu"
              edge="end"
              onClick={toggleDrawer}
              sx={{ display: { xs: "block", sm: "none" }, color: "black" }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ display: { xs: "none", sm: "flex" } }}>
              {menuItems.map((item, index) => (
                <Box key={index} sx={{ marginRight: "2rem" }}>
                  <RouterLink
                    to={item.link}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    {" "}
                    {/* Link rengini siyah yapar */}
                    <ListItemText
                      primary={item.text}
                      primaryTypographyProps={{
                        color: item.isActive ? "orange" : "inherit",
                      }}
                    />
                  </RouterLink>
                </Box>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
          <List>
            {menuItems.map((item, index) => (
              <ListItem key={index} button onClick={toggleDrawer}>
                <RouterLink
                  to={item.link}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  {" "}
                  {/* Link rengini siyah yapar */}
                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{
                      color: item.isActive ? "orange" : "inherit",
                    }}
                  />
                </RouterLink>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Box>
    </ThemeProvider>
  );
}

export default Header;
