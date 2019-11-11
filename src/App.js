import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";
import { Profile } from "./profile";
import { Singup } from "./signup";
import Map from "./map";
import { Login } from "./login";
import { Nav } from "./shared/Nav";
import UserContext from './UserContext.js';

let user = {
  isLoggedIn: false,
  login: function () {
    this.isLoggedIn = true;
  }
};



const App = () => {
  const [page, setPage] = React.useState("login");

  return (
    <>
      <UserContext.Provider value={user}>
        <CssBaseline />
        <div className="App">
          <header>
            {/* {page !== 'login' && page !== 'signup' && <Nav setPage={ setPage }/>}  */}
            <Nav setPage={setPage} />
          </header>
          <div className="App-content">
            {page === "profile" && <Profile />}
            {page === "map" && <Map />}
            {page === "signup" && <Singup setPage={setPage} />}
            {page === "login" && <Login setPage={setPage} />}
          </div>
        </div>
      </UserContext.Provider>
    </>
  );
};

export default App;
