/* eslint-disable react/jsx-filename-extension */

import React, { useState, useEffect } from 'react';
import './App.css';
import Auth from './Auth'
import Macro from './Macro';
import image from './number.jpg'
import superagent from 'superagent'


function App() {

  var authentication = new Auth();
  var detectorTId = null;
  const [id, setId] = useState(null);
  const [psw, setPsw] = useState(null);
  const [cb, setCb] = useState(null);
  const [ocr, setOcr] = useState(null);
  const [img, setImg] = useState(0);

  const onLogin = (e) => {
    e.preventDefault();
    if (!id) {
      return alert('input your id');
    }
    if (!psw) {
      return alert('input yout password');
    }
    authentication.login(id, psw)
      .then((res) => {
        var detector = new Macro();
        detector.emptyDetector(res)
        detectorTId = setInterval(function() {
          detector.emptyDetector(res)
          setImg(res);
        }, 5000);
      });
  }

  const onRegister = (e) => {
    e.preventDefault();
    clearInterval(detectorTId)
    authentication.register(cb, ocr)
    .then((result) => {
      console.log(result);
    })   
  }

  useEffect(() => {
    superagent
  .post('https://vision.googleapis.com/v1/images:annotate?key=AIzaSyDCygc6BPZ0Fj3ApJEWHgLeAqZlawWm5Bw')
  .send({
          'requests': [
              {
              'image': {
                  'source': {
                  'imageUri': 'http://sugang.snu.ac.kr/sugang/ca/number.action?v=0.28415202633175474' //이미지 소스
                  }
              },
              'features': [
                  {
                  'type': 'DOCUMENT_TEXT_DETECTION'
                  }
              ]
              }
          ]
          })
    .set('accept', 'json')
    .then((response) => eval("("+response.text+")"))
    .then((res) => { 
      console.log(parseInt(res.responses[0].textAnnotations[0].description))  
      document.getElementById('ocrText').innerHTML = (parseInt(res.responses[0].textAnnotations[0].description))  
    })
    .catch((err) => console.error(err));

    

    }, [img]);
  
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
      <div id='ocrText'></div>
    </div>
  );
}

export default App;