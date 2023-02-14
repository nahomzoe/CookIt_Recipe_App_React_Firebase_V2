import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Main from "./Main";
import FormModal from "../components/FormModal";

const drawerWidth = 240;
const navItems = ["Home", "About", "Project", "Testimonials", "Contact"];

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 1.4, color: "white" }}>
        N
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton href="/" sx={{ textAlign: "center" }}>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton href="/allrecipes" sx={{ textAlign: "center" }}>
            <ListItemText primary=" Recipes" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            href="#"
            sx={{ textAlign: "center", bgcolor: "black" }}
          >
            <ListItemText primary={<FormModal />} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ bgcolor: "#000" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            fontFamily="Montserrat Alternates"
          >
            cookIT
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button href="/" sx={{ color: "#fff" }}>
              <Typography variant="h7" fontFamily="Montserrat Alternates">
                {" "}
                Home
              </Typography>
            </Button>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button href="/allrecipes" sx={{ color: "#fff" }}>
              <Typography variant="h7" fontFamily="Montserrat Alternates">
                {" "}
                Recipes
              </Typography>
            </Button>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button href="#" sx={{ color: "#fff" }}>
              {/* Add new recipe */}
              <FormModal />
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

export default Header;

// import React from "react";
// import { Link } from "react-router-dom";

// const Nav = () => {
//   return (
//     <div>
//       <nav>
//         <div className="nav-content">
//           <div className="logo">
//             <a href="#" className="nav-a">
//               cookIT
//             </a>
//           </div>
//           <ul className="nav-links">
//             <li>
//               <Link className="nav-a" to="/">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link className="nav-a" to="/allrecipes">
//                 Recipes
//               </Link>
//             </li>
//             <li>
//               <Link className="nav-a" to="/addrecipe">
//                 Add new recipe
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Nav;
