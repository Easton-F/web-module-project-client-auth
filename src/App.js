import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './mocks/components/Login';
import FriendsList from './mocks/components/FriendsList';
import AddFriend from './mocks/components/AddFriend';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/*' element={ <Login />} />
        <Route path='/login' element={ <Login />} />
        <Route path='/friends' element={ <FriendsList />} />
        <Route path='/friends/add' element={ <AddFriend />} />
      </Routes>
    </div>
  );
}

export default App;
