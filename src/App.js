/* eslint-disable react/jsx-filename-extension */

import React, { useState } from 'react';
import './App.css';
import Auth from './Auth'
import Macro from './Macro';
import superagent from 'superagent'
import OCR from './OCR';


function App() {

  var authentication = new Auth();
  var detectorTId = null;
  const [id, setId] = useState(null);
  const [psw, setPsw] = useState(null);
  const [cb, setCb] = useState(null);
  // const [ocr, setOcr] = useState(null);

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
        }, 3000);
      });
  }

  const onRegister = (e) => {
    e.preventDefault();
    clearInterval(detectorTId)
    /*
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
                      }) // sends a JSON post body
          .set('accept', 'json')
              .then((response) => eval("("+response.text+")"))
              .then((res) => { 
                atest.register(cb, parseInt(res.responses[0].textAnnotations[0].description))
                .then((result) => {
                  console.log(result);
                })  
              })
              .catch((err) => console.error(err));
    
    
        */
  }

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
        {/* <input type="text" placeholder="ocr"
          onChange={(e) => setOcr(e.target.value)} /> */}
        <input type="submit" value="Register" />
      </form>

    </div>
  );
}

export default App;