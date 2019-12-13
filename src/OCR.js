/*
 * OCR(Optical Character Recognition) module
 *
 * Use OCR API, recognize authentification number in the page and fill the blank.
 */
import React from 'react';
import superagent from 'superagent'

//console 창에서 이미지 값 출력
function App() {
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
    .then((res) => console.log(res.responses[0].textAnnotations[0].description))
    .catch((err) => console.error(err));
  return 0;
}

export default App;

