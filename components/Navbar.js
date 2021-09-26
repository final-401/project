import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Link from "@mui/material/Link";
import { makeStyles } from "@mui/styles";
import BadgeAvatars from "./UserBudget";
import { positions } from '@mui/system';

const useStyles = makeStyles((theme) => ({
  root: {},
  body: {
    backgroundColor: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  },
  appBar: {
    width: "85%",
    backgroundColor: "#001f3f",
    marginTop: "1.2rem",
    marginBottom: "1.5rem",
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

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <AppBar
      className={classes.appBar}
      position="fixed"
      elevation={0}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar sx={{ flexWrap: "wrap" }}>
        {/* add icon here  */}
        <img
          className="hidden w-auto h-8 mr-3 lg:block"
          src=""
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
            href="#"
            sx={{ my: 1, mx: 1.5 }}
            underline="none"
          >
            Supplies
          </Link>

          <Link
            className={classes.navLink}
            variant="button"
            color="text.primary"
            href="#"
            sx={{ my: 1, mx: 1.5 }}
            underline="none"
          >
            Buy
          </Link>

          <Link
            className={classes.navLink}
            variant="button"
            color="text.primary"
            href="#"
            sx={{ my: 1, mx: 1.5 }}
            underline="none"
          >
            Veterinary
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
          <AddShoppingCartIcon className={classes.shoppingIcon} sx={{ mr: 2 }} />
          <h5 className={classes.itemCounter}>0</h5>
        </IconButton>

        <BadgeAvatars />
      </Toolbar>
    </AppBar>
  );
}
