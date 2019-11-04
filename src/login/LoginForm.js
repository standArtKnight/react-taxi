import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
// import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
// import TextField from "@material-ui/core/TextField";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
import backgroundImage from "./assets/login-background.jpg";
import Container from "@material-ui/core/Container";
import { CssBaseline } from "@material-ui/core";
import Input from "@material-ui/core/Input";
import UserContext from "../UserContext";

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover"
    }
  },
  paper: {
    backgroundColor: "#fff",
    margin: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(2)
  }
}));

export const LoginForm = ({ setPage }) => {
  const classes = useStyles();
  const user = React.useContext(UserContext);

  const onSubmit = e => {
    e.preventDefault();
    setPage("profile");
    user.isLoggedIn = true;
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form onSubmit={onSubmit} className={classes.form}>
            <Input
              variant="outlined"
              margin="normal"
              required
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              placeholder="Email"
            />
            <Input
              required
              type="password"
              name="password"
              label="password"
              placeholder="Password"
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Login
            </Button>
          </form>
        </div>
      </Container>
    </>
  );
};
