/* eslint-disable react/jsx-filename-extension */

import React, {useState} from 'react';
import './App.css';
import Auth from './Auth'
import Macro from './Macro';

function App() {

  var atest = new Auth();
  const [id, setId] = useState(null);
  const [psw, setPsw] = useState(null);
  const [cb, setCb] = useState(null);
  const [ocr, setOcr] = useState(null);

  const onLogin = (e) => {
    e.preventDefault();
    if(!id) {
      return alert('input your id');
    }
    if(!psw) {
      return alert('input yout password');
    }
    atest.login(id, psw)
    .then((res) => {
      //console.log(res);
      var mtest = new Macro();
      mtest.emptyDetector(res);
    });
  } 

  const onRegister = (e) => {
    e.preventDefault();
    atest.register(cb, ocr)
    .then((res) => {
      console.log(res);
    })
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
      <form onSubmit={onRegister}>
        <input type="text" placeholder="cb"
          onChange={(e) => setCb(e.target.value)} />
        <input type="text" placeholder="ocr"
          onChange={(e) => setOcr(e.target.value)} />
        <input type="submit" value="Register" />
      </form>

    </div>
  );
}

export default App;
