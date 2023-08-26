import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './mocks/components/Login';
import FriendsList from './mocks/components/FriendsList';
import AddFriend from './mocks/components/AddFriend';
import Logout from './mocks/components/Logout';
import PrivateRoute from './mocks/components/PrivateRoute';


function App() {
  return (
    <Router>
    <div className="App">
      <header>
        <h2>Friends Database</h2>
        <Link className='link' to='login'>Login</Link>
        <Link className='link' to='friends'>Friends List</Link>
        <Link className='link' to='friends/add'>Add Friends</Link>
        <Link className='link' to='logout'>Logout</Link>
      </header>
      <Routes>
        <Route path='/' element={ <Login />} />
        <Route path='/login' element={ <Login />} />
        <Route path='/friends' element={ <PrivateRoute component={FriendsList}/>} />
        <Route path='/friends/add' element={ <PrivateRoute component={AddFriend} />} />
        <Route path='/logout' element={ <PrivateRoute component={Logout}/>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
