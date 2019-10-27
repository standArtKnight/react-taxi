import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Profile } from './profile';
import { Singup } from './signup';
import { Map } from './map';
import { Login } from './login';

const App = () => {

  const [page, setPage] = React.useState('login');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" width="156" alt="logo" />
        <button onClick={() => setPage('profile')}>Profile</button>
        <button onClick={() => setPage('map')}>Map</button>
        <button onClick={() => setPage('login')}>Login</button>
        <button onClick={() => setPage('signup')}>Singup</button>
      </header>
      <div className="App-content">
        {page === 'profile' && <Profile />}
        {page === 'map' && <Map />}
        {page === 'signup' && <Singup setPage={setPage} />}
        {page === 'login' && <Login setPage={setPage} />}
      </div>
    </div>
  );
}

export default App;
