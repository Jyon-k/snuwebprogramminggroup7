/* eslint-disable react/jsx-filename-extension */

import React, {useState} from 'react';
import './App.css';
import login from './Auth'
import Macro from './Macro';

function App() {

  const [id, setId] = useState(null);
  const [psw, setPsw] = useState(null);

  const onLogin = (e) => {
    e.preventDefault();
    if(!id) {
      return alert('input your id');
    }
    if(!psw) {
      return alert('input yout password');
    }
    login(id, psw)
    .then((res) => {
      //console.log(res);
      var test = new Macro();
      test.emptyDetector(res);
    });
  } 

  //var test = new Macro();
  //test.callSuperagent();
  return (
    <div className="App">
      <form onSubmit={onLogin}>
        <input type="text" placeholder="id"
          onChange={(e) => setId(e.target.value)} />
        <input type="password" placeholder="password"
          onChange={(e) => setPsw(e.target.value)} />
        <input type="submit" value="Login" />
      </form>

    </div>
  );
}

export default App;
