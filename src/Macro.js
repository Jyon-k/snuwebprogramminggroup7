import React, { Component } from 'react';

class Macro extends Component {
  notify = (title) => {
    return (
      <div>There is a room for {title}</div>
    )
  }
  emptyDetector = (classOfInterest) => {
    var resDom = document.implementation.createHTMLDocument('testDom')
    resDom.documentElement.innerHTML = classOfInterest;
    console.log(resDom);


    var a = [];
    console.log(resDom.getElementsByTagName('tbody'))
    for (var i = 0; i < resDom.getElementsByTagName("tbody")[1].children.length / 3; i++) {
      console.log(i);
      a.push([resDom.getElementsByTagName("tbody")[1].children[3 * i].children[7].innerText, resDom.getElementsByTagName("tbody")[1].children[3 * i].children[13].innerText, document.getElementsByTagName("tbody")[1].children[3 * i].children[14].innerText]);
    }
    for (var i = 0; i < a.length; i++) {
      if (parseInt(a[i][1].split(" (")[0]) > parseInt(a[i][2])) {
        // eslint-disable-next-line no-restricted-globals
        confirm(a[i][0] + "의 수강 정원이 남았습니다");
      }
    }
  };
  

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

export default Macro;
 