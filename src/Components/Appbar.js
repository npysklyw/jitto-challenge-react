import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Cart from "../Pages/Cart";
import { AuthContext } from "../AuthContext";

//Appbar used for product page
//Might make more modular, allow for props
export default function ButtonAppBar() {
  const { user, signOut } = useContext(AuthContext);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={signOut}>
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "white" }}
            >
              Sign out
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Products
            </Link>
          </Button>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, marginRight: 20 }}
          >
            ECommerce Fruit
          </Typography>
          <Button color="inherit">
            <Link to="/cart" style={{ textDecoration: "none", color: "white" }}>
              Cart
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
