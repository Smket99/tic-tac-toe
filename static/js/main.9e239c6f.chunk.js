(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(5),s=a.n(l),o=(a(14),a(1)),c=a(2),i=a(4),u=a(3),m=(a(15),a(16),function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"Welcome to Tic-Tac-Toe!"))});var h=function(e){return r.a.createElement("button",{className:"square",onClick:e.onClick},e.value)},v=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"renderSquare",value:function(e){var t=this;return r.a.createElement(h,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),r.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),r.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),a}(r.a.Component),d=a(8);var p=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var n=Object(d.a)(t[a],3),r=n[0],l=n[1],s=n[2];if(e[r]&&e[r]===e[l]&&e[r]===e[s])return e[r];if(!e.includes(null))return"Draw"}return null},f=a(7),g="Please Enter Your Names:",E="",b=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).myChangeHandler=function(e){var t=e.target.name,a=e.target.value;n.setState(Object(f.a)({},t,a)),g="Hello "},n.state={p1:"",p2:""},n}return Object(c.a)(a,[{key:"render",value:function(){return localStorage.clear(),localStorage.setItem("val1",this.state.p1),localStorage.setItem("val2",this.state.p2),""!=this.state.p2&&(E="and "+this.state.p2+" !"),r.a.createElement("form",null,r.a.createElement("h3",null,g," ",this.state.p1," ",E," "),r.a.createElement("label",null,"Player    X : "),r.a.createElement("input",{type:"text",name:"p1",onChange:this.myChangeHandler}),r.a.createElement("br",null),r.a.createElement("label",null,"Player O: "),r.a.createElement("input",{type:"text",name:"p2",onChange:this.myChangeHandler}))}}]),a}(r.a.Component),y=b;s.a.render(r.a.createElement(b,null),document.getElementById("root"));var S=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:!0},n}return Object(c.a)(a,[{key:"handleClick",value:function(e){if(""==localStorage.getItem("val1")||""==localStorage.getItem("val2"))alert("Plase Enter your Names");else{var t=this.state.history.slice(0,this.state.stepNumber+1),a=t[t.length-1].squares.slice();if(p(a)||a[e])return;a[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:a}]),stepNumber:t.length,xIsNext:!this.state.xIsNext})}}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"render",value:function(){var e=this,t=this.state.history,a=t[this.state.stepNumber],n=p(a.squares),l=t.map((function(t,a){var n=a?"Go to move #"+a:"Go to game start";return r.a.createElement("li",{key:a},r.a.createElement("button",{onClick:function(){return e.jumpTo(a)}},n))})),s="X moves first!";if(n)if("X"==n)s="Winner is "+localStorage.getItem("val1");else if("O"==n){s="Winner is "+localStorage.getItem("val2")}else s="It's a Draw";else""!=localStorage.getItem("val1")&&""!=localStorage.getItem("val2")&&(s=this.state.xIsNext?localStorage.getItem("val1")+"'s turn":localStorage.getItem("val2")+"'s turn");return r.a.createElement("div",{className:"game"},r.a.createElement("div",{className:"game-board"},r.a.createElement(v,{squares:a.squares,onClick:function(t){return e.handleClick(t)}})),r.a.createElement("div",{className:"game-info"},r.a.createElement("div",null,s),r.a.createElement("ol",null,l)))}}]),a}(r.a.Component),j=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{classname:"App",style:{justifyContent:"center",alignItems:"center"}},r.a.createElement(m,null),r.a.createElement("hr",null),r.a.createElement(y,null),r.a.createElement("hr",null),r.a.createElement(S,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.hydrate(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.9e239c6f.chunk.js.map