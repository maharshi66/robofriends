(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),s=n.n(c),a=n(3),i=n.n(a),o=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))},h=(n(13),n(4)),l=n(5),b=n(7),d=n(6),j=function(e){var t=e.id,n=e.name,c=e.email;return Object(r.jsxs)("div",{className:"tc bg-light-gray dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(r.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(t,"??set=set4")}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:t}),Object(r.jsx)("h2",{children:n}),Object(r.jsx)("h2",{children:c})]})]})},u=function(e){var t=e.robots,n=t.map((function(e,n){return Object(r.jsx)(j,{id:t[n].id,name:t[n].name,email:t[n].email},n)}));return Object(r.jsx)("div",{children:n})},f=function(e){e.searchfield;var t=e.searchChange;return Object(r.jsx)("div",{className:"pa2",children:Object(r.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search robots",onChange:t})})},g=function(e){return Object(r.jsxs)("div",{style:{overflowY:"scroll",border:"1px solid black",height:"500px"},children:[e.children,";"]})},O=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(h.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return this.state.robots.length?Object(r.jsxs)("div",{className:"tc",children:[Object(r.jsx)("h1",{className:"f1 tc",children:"RoboFriends"}),Object(r.jsx)(f,{searchChange:this.onSearchChange}),Object(r.jsx)(g,{children:Object(r.jsx)(u,{robots:c})})]}):Object(r.jsx)("h1",{children:"Loading..."})}}]),n}(c.Component);n(14);i.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)("div",{children:Object(r.jsx)(O,{})})}),document.getElementById("root")),o()}},[[15,1,2]]]);
//# sourceMappingURL=main.0ae3139d.chunk.js.map