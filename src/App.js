import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';

const Login = () => {
  return (<div>
    <h1>Login</h1>
    <form>
      <label htmlFor='username'>Username</label>
      <input id='username'/>

      <label htmlFor='password'>Password</label>
      <input type='password' id='password'/>
    </form>
  </div>)
}

const FriendsList = () => {
  return (<h2>Friends List</h2>)
}

const AddFriends = () => {
  return (<h2>Add Friends</h2>)
}

function App() {
  return (
    <Router>
    <div className="App">
      <Route path='/'>
        <Login />
      </Route>
      <Route path='/login'>
        <Login />
      </Route>
      <Route path='/friends'>
        <FriendsList />
      </Route>
      <Route path='/friends/add'>
        <AddFriends />
      </Route>
    </div>
    </Router>
  );
}

export default App;
