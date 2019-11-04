import React, { useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import logo from "./assets/logo.svg";
import UserContext from "../UserContext.js";
import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbar: {
    flexWrap: "wrap"
  },
  toolbarTitle: {
    flexGrow: 1
  },
  link: {
    margin: theme.spacing(1, 1.5)
  }
}));

export const Nav = ({ setPage }) => {
  const user = useContext(UserContext);

  const classes = useStyles();

  const ExitButton = () => {
    return (
      <Button
        onClick={() => {setPage("login"); user.isLoggedIn = false;}}
        className={classes.link}
      >
        Выйти
      </Button>
    );
  };

  const EnterButton = () => {
    
    return (
      <Button
        onClick={() => {setPage("login");}}
        className={classes.link}
      >
        Войти
      </Button>
    );
  };

  return (
    <>
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={4}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            <img src={logo} width="156" alt="logo" />
          </Typography>
          <nav>
            <Button
              onClick={() => {
                setPage("map");
              }}
              className={classes.link}
            >
              Карта
            </Button>
            <Button
              href="#"
              onClick={() => setPage("profile")}
              className={classes.link}
            >
              Профиль
            </Button>
          </nav>
          {user.isLoggedIn ? <ExitButton /> : <EnterButton />}
        </Toolbar>
      </AppBar>
    </>
  );
};

Nav.propTypes = {
  setPage: PropTypes.func
};