/*
 * Macro module
 *
 * Automatically check if target classes get seats.
 */

import React, { Component } from 'react';
import superagent from 'superagent';
    
    const url = "http://sugang.snu.ac.kr";
    

    const headers = {
      "content-type": "application/x-www-form-urlencoded",
       }
    
    class Macro extends Component {
        notify = (title) => {
          return(
            <div>There is a room for ${title}</div>
          )
        }
        callSuperagent = () =>{
            var agent = superagent.agent()
            agent.get(`${url}/sugang/cc/cc210.action`)
            .set(headers)
            .set('accept', 'json')
            .then(res => {
                console.log(res)
            })
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
