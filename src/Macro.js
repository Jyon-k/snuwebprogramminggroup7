import React, { Component } from 'react';
import superagent from 'superagent';

const url = "http://sugang.snu.ac.kr";

const notifier = require('node-notifier');

const headers = {
  //"upgrade-insecure-requests": "1",
  "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
  //"cache-control": "no-cache",
  //"postman-token": "488c525f-a756-deb5-847a-174462d86798"
  //"cookie": "JSESSIONID=ya51jOJ7NVszo56MyptaCLexungZXIt156qprnaD1rT1MRkAyDQT9cIJks6WINVK.giants1_servlet_engine2"
}

class Macro extends Component {
  notify = (title) => {
    return (
      <div>There is a room for {title}</div>
    )
  }
  callSuperagent = () => {
    var agent = superagent.agent()
    agent.post('http://sugang.snu.ac.kr/sugang/j_login')
      .set("content-type", "application/x-www-form-urlencoded")
      .set("accept-language", "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7")
      .set("accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8")
      .send({
        "j_password": '33333',
        "j_username": '2016-20880',
        "t_password": '33333',
        "v_password": '33333'
      })
      .then((res1) => {
        console.log('test')
        console.log(res1.xhr.responseURL);
        agent.get(res1.xhr.responseURL)
        agent.get("http://sugang.snu.ac.kr/sugnag/cc/cc210.action")
          .send()
          .then((res) => {
            console.log(res);
            console.log(res.xhr.getAllResponseHeaders())
            console.log(res.xhr.getResponseHeader('Set-Cookie'))
            var a = [];
          for (var i = 0; i < document.getElementsByTagName("tbody").length; i++) {
              a.push([
              document.getElementsByTagName("tbody")[1].children[3 * i].children[7].innerText,
              document.getElementsByTagName("tbody")[1].children[3 * i].children[13].innerText,
              document.getElementsByTagName("tbody")[1].children[3 * i].children[14].innerText]);
          }
          console.log(a)
          for (var i = 0; i < a.length; i++) {
              if (parseInt(a[i][1].split(" (")[0])>parseInt(a[i][2])) {
                  notifier.notify(a[i][0]+"의 수강 정원이 남았습니다");
              }
              };
            })
                  
        })

  }
 

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div onClick={this.callSuperagent}>click</div>
          {this.notify('수학연습')}
        </header>
      </div>
    );
  }

}

var test = new Macro();
test.callSuperagent();
export default Macro;
