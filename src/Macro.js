/*
 * Macro module
 *
 * Automatically check if target classes get seats.
 */

import React, { Component } from 'react';
import superagent from 'superagent';
    
    const url = "sugang.snu.ac.kr";
    

    const headers = {
      "origin": "http://sugang.snu.ac.kr",
      "upgrade-insecure-requests": "1",
      "content-type": "application/x-www-form-urlencoded",
      "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36",
      "sec-fetch-user": "?1",
      "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3",
      "cache-control": "no-cache",
      "postman-token": "0fc34829-bf84-7c04-2e7b-2d833eb9f4b6"
       }
    
    class Macro extends Component {
        notify = (title) => {
          return(
            <div>There is a room for ${title}</div>
          )
        }
        callSuperagent = () =>{
            superagent
            .get(`${url}/sugang/cc/cc210.action`)
            .set(headers)
            .set('accept', 'json')
            .then(res => {
                console.log(res)
            })
            .end()
          }
          /*
            .then(html => {
              let classList = [];
              const $ = cheerio.load(html.data);
              const bodyList = $("td")
              bodyList.each(function(i, elem) {
                classList[i] = {
                  title: $(this).find("h2 a").text(),
                  maxNum: $(this).div.seach_cont > div:nth-child(1) > div > table > tbody > tr:nth-child(1) > td:nth-child(14),
                  curNum: $(this).div.seach_cont > div:nth-child(1) > div > table > tbody > tr:nth-child(1) > td:nth-child(15)
                };
              });
              return classList;
            })
          */
        
    
        render(){
          return (
            <div className="App">
              <header className="App-header">
                <div onClick={this.callSuperagent}>click</div>
                {this.notify('hi')}
              </header>
            </div>
          );
        }
      
    }
    
    export default Macro;
