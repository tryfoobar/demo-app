import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import MenuIcon from "../assets/icons/menu.svg";
import Logo from "../assets/logos/magicTodo.svg";
import NavigationMenu from "../components/Sidebar/NavigationMenu";
import ProjectsMenu from "../components/Sidebar/ProjectsMenu";
import MenuLink from "../components/Sidebar/MenuLink";
import Navbar from "../components/Navbar";

const drawerWidth = 252;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    overflow: "hidden",
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 3),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  borderBottom: "1px solid #E8ECEF",
}));

export default function DashboardLayout({ children }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* Nav Bar For Dashboard  */}
      <AppBar
        sx={{
          bgcolor: "transparent",
          boxShadow: "none",
          borderBottom: "1px solid #E8ECEF",
        }}
        position="fixed"
        open={open}
      >
        <div className="flex items-center justify-between">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, borderRadius: "9999px" }}
            >
              <img className="w-[20px]" src={MenuIcon} alt="" />
            </IconButton>

            <Typography
              sx={{ fontWeight: 600, color: "#252631", fontSize: "22px" }}
              fontFamily={"Public Sans"}
              variant="h6"
              noWrap
              component="div"
            >
              Dashboard
            </Typography>
          </Toolbar>

          <Navbar />
        </div>
      </AppBar>

      {/* Side Bar for Dashboard */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            borderColor: "transparent",
            bgcolor: "#EDF1FF",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <img src={Logo} alt="" />
        </DrawerHeader>

        {/* MENU LINKS   */}
        <div className="mt-6">
          {/* Navigation Menu  */}
          <NavigationMenu />
          {/* Projects Menu  */}
          <ProjectsMenu />
          {/* User Quick Buttons  */}
          <div className="mt-20 mb-5 flex flex-col items-center justify-center">
            <MenuLink link="Help Center" />
            <MenuLink link="Settings" />
          </div>
        </div>
      </Drawer>

      {/* Main Dashboard Section  */}
      <Main open={open}>
        <DrawerHeader sx={{ border: "none" }} />

        {children}
      </Main>
    </Box>
  );
}
