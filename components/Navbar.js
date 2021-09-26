import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Link from "@mui/material/Link";
import { makeStyles } from "@mui/styles";
import BadgeAvatars from "./UserBudget";

const useStyles = makeStyles((theme) => ({
    root: {
    },
    body: {
        backgroundColor: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    },
    appBar: {
        width: "70%",
        backgroundColor: '#001f3f',
        margin: "auto",
        marginTop: "1.5rem",
        borderRadius: "12px",
        padding: "12px",
    },
    title: {
        color: "#419970",
        '&:hover': {
            color: "#fff",
        }
    },
    navLink: {
        color: "#419970",
        fontWeight: "bold",
        textDecoration: "none",
        textDecorationLine: "none",
        '&:hover': {
            color: "#fff",
        }
    },
    signUpBtn: {
        color: "#000",
    },
    shoppingIcon: {
        color: "#419970",
        '&:hover': {
            
        }
    },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <AppBar
      className={classes.appBar}
      position="static"
      elevation={0}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar sx={{ flexWrap: "wrap" }}>
        <Typography
          className={classes.title}
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          Pets Care
        </Typography>
        {/* NavBar Pages */}
        <nav>
          <Link
            className={classes.navLink}
            variant="button"
            color="text.primary"
            href="#"
            sx={{ my: 1, mx: 1.5 }}
            underline="none"
          >
            Features
          </Link>

          <Link
            className={classes.navLink}
            variant="button"
            color="text.primary"
            href="#"
            sx={{ my: 1, mx: 1.5 }}
            underline="none"
          >
            Enterprise
          </Link>

          <Link
            className={classes.navLink}
            variant="button"
            color="text.primary"
            href="#"
            sx={{ my: 1, mx: 1.5 }}
            underline="none"
          >
            Support
          </Link>

          <Link
            className={classes.navLink}
            variant="button"
            color="text.primary"
            href="#"
            sx={{ my: 1, mx: 1.5 }}
            underline="none"
          >
            Login
          </Link>

          <Link
            className={classes.navLink}
            variant="button"
            color="text.primary"
            href="#"
            sx={{ my: 1, mx: 1.5 }}
            underline="none"
          >
            SignUp
          </Link>

          <Link
            className={classes.navLink}
            variant="button"
            color="text.primary"
            href="#"
            sx={{ my: 1, mx: 1.5 }}
            underline="none"
          >
            Logout
          </Link>

        </nav>

        <IconButton className={classes.shoppingIcon} aria-label="shopping-cart">
          <AddShoppingCartIcon sx={{ mr: 2 }} />
        </IconButton>

        <BadgeAvatars />
      </Toolbar>

    </AppBar>
  );
}
