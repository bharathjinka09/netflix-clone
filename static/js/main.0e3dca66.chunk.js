(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],{22:function(e,t,n){e.exports=n(64)},27:function(e,t,n){},28:function(e,t,n){},46:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(16),o=n.n(r),i=(n(27),n(28),n(4)),l=n.n(i),s=n(5),u=n(3),m=n(17),d=n.n(m).a.create({baseURL:"https://api.themoviedb.org/3"}),f=(n(46),n(18)),v=n(21),h=n.n(v);var p=function(e){var t=e.title,n=e.fetchUrl,r=e.isLargeRow,o=Object(a.useState)([]),i=Object(u.a)(o,2),m=i[0],v=i[1],p=Object(a.useState)(""),g=Object(u.a)(p,2),_=g[0],b=g[1];return Object(a.useEffect)((function(){function e(){return(e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.get(n);case 2:return t=e.sent,v(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),c.a.createElement("div",{className:"row"},c.a.createElement("h2",null,t),c.a.createElement("div",{className:"row__posters"},m.map((function(e){return c.a.createElement("img",{key:e.id,onClick:function(){return function(e){_?b(""):h()((null===e||void 0===e?void 0:e.name)||"").then((function(e){var t=new URLSearchParams(new URL(e).search);b(t.get("v"))})).catch((function(e){return console.log(e)}))}(e)},className:"row__poster ".concat(r&&"row__posterLarge"),src:"".concat("https://image.tmdb.org/t/p/original/").concat(r?e.poster_path:e.backdrop_path),alt:e.name})}))),_&&c.a.createElement(f.a,{videoId:_,opts:{height:"390",width:"100%",playerVars:{autoplay:1}}}))},g="19f84e11932abbc79e6d83f82d6d1045",_={fetchTrending:"/trending/all/week?api_key=".concat(g,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(g,"&with_networks=213"),fetchTopRated:"/movie/top_rated/?api_key=".concat(g,"&language=en-US"),fetchActionMovies:"/discover/movie/?api_key=".concat(g,"&with_genres=28"),fetchComedyMovies:"/discover/movie/?api_key=".concat(g,"&with_genres=35"),fetchHorrorMovies:"/discover/movie/?api_key=".concat(g,"&with_genres=27"),fetchRomanceMovies:"/discover/movie/?api_key=".concat(g,"&with_genres=10749"),fetchDocumentaries:"/discover/movie/?api_key=".concat(g,"&with_genres=99")};n(62);var b=function(){var e,t,n=Object(a.useState)([]),r=Object(u.a)(n,2),o=r[0],i=r[1];return Object(a.useEffect)((function(){function e(){return(e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.get(_.fetchNetflixOriginals);case 2:return t=e.sent,i(t.data.results[Math.floor(Math.random()*t.data.results.length-1)]),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),console.log(o),c.a.createElement("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:'url(\n\t\t\t\t\t"https://image.tmdb.org/t/p/original/'.concat(null===o||void 0===o?void 0:o.backdrop_path,'"\n\t\t\t\t)'),backgroundPosition:"center center"}},c.a.createElement("div",{className:"banner__contents"},c.a.createElement("h1",{className:"banner__title"},(null===o||void 0===o?void 0:o.title)||(null===o||void 0===o?void 0:o.name)||(null===o||void 0===o?void 0:o.original_name)),c.a.createElement("div",{className:"banner__buttons"},c.a.createElement("button",{className:"banner__button"},"Play"),c.a.createElement("button",{className:"banner__button"},"My List")),c.a.createElement("h1",{className:"banner__description"},(e=null===o||void 0===o?void 0:o.overview,t=150,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e))),c.a.createElement("div",{className:"banner--fadeBottom"}))};n(63);var w=function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>100?r(!0):r(!1)})),function(){window.removeEventListener("scroll")}}),[]),c.a.createElement("div",{className:"nav ".concat(n&&"nav__black")},c.a.createElement("img",{className:"nav__logo",src:"https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png",alt:"Netflix logo"}),c.a.createElement("img",{className:"nav__avatar",src:"https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png",alt:"Netflix logo"}))};var E=function(){return c.a.createElement("div",{className:"app"},c.a.createElement(w,null),c.a.createElement(b,null),c.a.createElement(p,{title:"NETFLIX ORIGINALS",fetchUrl:_.fetchNetflixOriginals,isLargeRow:!0}),c.a.createElement(p,{title:"Trending Now",fetchUrl:_.fetchTrending}),c.a.createElement(p,{title:"Top Rated",fetchUrl:_.fetchTopRated}),c.a.createElement(p,{title:"Action Movies",fetchUrl:_.fetchActionMovies}),c.a.createElement(p,{title:"Comedy Movies",fetchUrl:_.fetchComedyMovies}),c.a.createElement(p,{title:"Horror Movies",fetchUrl:_.fetchHorrorMovies}),c.a.createElement(p,{title:"Romance Movies",fetchUrl:_.fetchRomanceMovies}),c.a.createElement(p,{title:"Documentaries",fetchUrl:_.fetchDocumentaries}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.0e3dca66.chunk.js.map