import React from 'react';
import { Route } from 'react-router-dom';
import Register from './components/register';
import Login from './components/login';
import Jokes from './components/jokes';
import './App.css';

function App() {
  return (
    <div className="App">
        <Route path='/' component={Register} exact></Route>
        <Route path='/login' component={Login} exact></Route>
        <Route path='/jokes' component={Jokes} exact></Route>
    </div>
  );
}

export default App;
