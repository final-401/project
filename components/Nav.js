import * as React from "react";
import { useState,useEffect } from 'react';
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Zoom from "@mui/material/Zoom";
import { makeStyles } from "@mui/styles";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import BadgeAvatars from "./UserBudget";
import jwt from 'jsonwebtoken';
import { useAuth } from '../contexts/auth'
import img from "../assest/logo.png"


const useStyles = makeStyles((theme) => ({
  root: {},
  body: {
    backgroundColor: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  },
  appBar: {
    width: "91.666667%",
    margin: "auto",
    backgroundColor: "#001f3f",
    borderRadius: "12px",
    padding: "12px",
  },
  title: {
    color: "#419970",
    fontSize: "1.5rem",
    fontWeight: "700",
    "&:hover": {
      color: "#1bdd82",
    },
  },
  navLink: {
    color: "#419970",
    fontWeight: "bold",
    textDecoration: "none",
    textDecorationLine: "none",
    "&:hover": {
      color: "#1bdd82",
    },
  },
  shoppingIcon: {
    color: "#419970",
    "&:hover": {
      color: "#1bdd82",
    },
  },
  itemCounter: {
    color: "#d00000",
    fontSize: "1.3rem",
    marginTop: "-2.1rem",
    marginLeft: "-1.3rem",
    "&:hover": {
      color: "#9d0208",
    },
  },
}));

function ScrollTop(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 , color: "#419970" ,backgroundColor: "#001f3f"}}
      >
        {children}
      </Box>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function BackToTop(props) {
  const[user, setUser]=useState([])
  const { logout } = useAuth();
  useEffect(() => {
    const url='http://127.0.0.1:8000/api/v1/pet/'
    let acctoken = localStorage.getItem("access");
    const decodedAccess = jwt.decode(acctoken);
    console.log(decodedAccess);
    setUser(decodedAccess)
}, [])
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        className={classes.appBar}
        position={"static"}
        elevation={4}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: "wrap" }}>
          {/* add icon here  */}
          <img
            className="hidden w-auto h-8 mr-3 lg:block"
            src={img}
            alt="Workflow"
          />
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
              href="/"
              sx={{ my: 1, mx: 1.5 }}
              underline="none"
            >
              Home
            </Link>

            <Link
              className={classes.navLink}
              variant="button"
              color="text.primary"
              href="/Supplies"
              sx={{ my: 1, mx: 1.5 }}
              underline="none"
            >
              Supplies
            </Link>

            <Link
              className={classes.navLink}
              variant="button"
              color="text.primary"
              href="/buy"
              sx={{ my: 1, mx: 1.5 }}
              underline="none"
            >
              Buy
            </Link>

            <Link
              className={classes.navLink}
              variant="button"
              color="text.primary"
              href="/Veterinary"
              sx={{ my: 1, mx: 1.5 }}
              underline="none"
            >
              Veterinary
            </Link>

            {/* <Link
              className={classes.navLink}
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
              underline="none"
            >
              Support
            </Link> */}
            {!user&&<Link
              className={classes.navLink}
              variant="button"
              color="text.primary"
              href="/SignIn"
              sx={{ my: 1, mx: 1.5 }}
              underline="none"
            >
              Login
            </Link>}
            
            {!user&&<Link
              className={classes.navLink}
              variant="button"
              color="text.primary"
              href="/SignUp"
              sx={{ my: 1, mx: 1.5 }}
              underline="none"
            >
              SignUp
            </Link>}
            
            {user && <Link
              className={classes.navLink}
              variant="button"
              color="text.primary"
              href="/"
              sx={{ my: 1, mx: 1.5 }}
              underline="none"
              onClick={logout}
            >
              Logout
            </Link>}
            
          </nav>

          <IconButton
            className={classes.shoppingIcon}
            aria-label="shopping-cart"
          >
            <AddShoppingCartIcon
              className={classes.shoppingIcon}
              sx={{ mr: 2 }}
            />
            <h5 className={classes.itemCounter}>0</h5>
          </IconButton>
          {user&&<BadgeAvatars />}
          
          <Toolbar id="back-to-top-anchor" />
        </Toolbar>
      </AppBar>
      

      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}
