(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{56:function(t,e,n){t.exports=n(72)},61:function(t,e,n){},62:function(t,e,n){},63:function(t,e,n){},67:function(t,e,n){},72:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),o=n(47),r=n.n(o),s=n(9),c=(n(61),n(43)),l=n(32),u=n(33),p=n(36),d=n(35),m=n(82),h=n(90),v=n(92);n(62);function f(t){var e=Object(a.useState)(null),n=Object(s.a)(e,2),o=n[0],r=n[1],c=Object(a.useContext)(w),l=function(t){var e=t.webkitCompassHeading||Math.abs(t.alpha-360);console.log(e),r(e)};c&&(navigator.userAgent.match(/(iPod|iPhone|iPad)/)&&navigator.userAgent.match(/AppleWebKit/)?window.addEventListener("deviceorientation",l,!0):window.addEventListener("deviceorientationabsolute",l,!0));var u={transform:"translate(-50%, -50%) rotate(-"+o+"deg)",height:"2.5em"};return i.a.createElement("div",null,c&&i.a.createElement("img",{src:"down-arrow.png",className:"compass-arrow",style:u}),!c&&i.a.createElement("img",{src:"down-arrow.png",className:"compass-arrow"}))}n(63);var g=function(t){Object(p.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).state={stations:[]},a}return Object(u.a)(n,[{key:"isStationInList",value:function(t,e){var n,a=Object(c.a)(t);try{for(a.s();!(n=a.n()).done;){if(n.value.name===e)return!0}}catch(i){a.e(i)}finally{a.f()}return!1}},{key:"updateStationsFromResponse",value:function(t){var e,n=this.state.stations.slice(),a=Object(c.a)(t.results);try{for(a.s();!(e=a.n()).done;){var i=e.value;if(n.length>=10)break;this.isStationInList(n,i.name)||n.push({name:i.name,id:i.place_id,latitude:i.geometry.location.lat,longitude:i.geometry.location.lng,types:i.types})}}catch(o){a.e(o)}finally{a.f()}this.setState({stations:n})}},{key:"reloadStationsList",value:function(){var t=this,e=new URLSearchParams({key:"AIzaSyDk4Mc0nqWxEX6fnadfTmXLtXzvAkT7Gyc",location:this.props.latitude+", "+this.props.longitude,rankby:"distance",type:"train_station"});fetch("https://cors-city-navigator.herokuapp.com/".concat("https://maps.googleapis.com/maps/api/place/nearbysearch/json?"+e),{method:"GET",headers:{"Content-Type":"application/json"}}).then(function(t){return t.json()}).then(function(e){return t.updateStationsFromResponse(e)})}},{key:"componentDidMount",value:function(){this.reloadStationsList()}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",null,"Current location: ",this.props.latitude," ",this.props.longitude),i.a.createElement(b,{stations:this.state.stations,currentLongitude:this.props.longitude,currentLatitude:this.props.latitude}))}}]),n}(i.a.Component),b=function(t){Object(p.a)(n,t);var e=Object(d.a)(n);function n(t){return Object(l.a)(this,n),e.call(this,t)}return Object(u.a)(n,[{key:"getStations",value:function(){var t=this;return this.props.stations.map(function(e){return i.a.createElement(y,{name:e.name,key:e.id,station:e,currentLatitude:t.props.currentLatitude,currentLongitude:t.props.currentLongitude})})}},{key:"render",value:function(){return i.a.createElement(m.a,{direction:"column",justifyContent:"flex-start",alignItems:"center",spacing:2},this.getStations())}}]),n}(i.a.Component),y=function(t){Object(p.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).state={distance:"",duration:""},a.requestDistanceAPI(),a}return Object(u.a)(n,[{key:"isBusStation",value:function(){return this.props.station.types.includes("bus_station")}},{key:"isTrainStation",value:function(){return this.props.station.types.includes("train_station")}},{key:"handleDistanceResponse",value:function(t){if(0!==t.rows.length&&0!==t.rows[0].elements.length){var e=t.rows[0].elements[0],n={distance:e.distance.text,duration:e.duration.text};this.setState(n)}}},{key:"requestDistanceAPI",value:function(){var t=this,e=new URLSearchParams({key:"AIzaSyDk4Mc0nqWxEX6fnadfTmXLtXzvAkT7Gyc",destinations:"place_id:"+this.props.station.id,origins:this.props.currentLatitude+", "+this.props.currentLongitude,mode:"walking"});fetch("https://cors-city-navigator.herokuapp.com/".concat("https://maps.googleapis.com/maps/api/distancematrix/json?"+e)).then(function(t){return t.json()}).then(function(e){return t.handleDistanceResponse(e)})}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return i.a.createElement(h.a,{variant:"elevation",elevation:4},i.a.createElement(v.a,{sx:{width:350,height:100,fontFamily:"Jetbrains Mono, monospace",fontWeight:600,fontSize:"1.2em",padding:"10px",borderRadius:"10px"}},i.a.createElement("div",{className:"station-box"},i.a.createElement("div",null,i.a.createElement("div",null,this.isTrainStation()&&i.a.createElement("img",{className:"transport-icon",src:"/train-public-transport.png"}),this.isBusStation()&&i.a.createElement("img",{className:"transport-icon",src:"/bus-public-transport.png"})),i.a.createElement("div",null,this.props.name),i.a.createElement("div",{className:"station-info"},i.a.createElement("div",null,this.state.distance),i.a.createElement("div",null,this.state.duration))),i.a.createElement("div",{class:"direction-arrow-box"},i.a.createElement(f,null)))))}}]),n}(i.a.Component),E=n(91),j=n(88),w=Object(a.createContext)(null),k=function(){var t=Object(a.useState)(null),e=Object(s.a)(t,2),n=e[0],o=e[1],r=Object(a.useState)(null),c=Object(s.a)(r,2),l=c[0],u=c[1],p=Object(a.useState)(!1),d=Object(s.a)(p,2),m=d[0],h=d[1],v=navigator.userAgent.match(/(iPod|iPhone|iPad)/)&&navigator.userAgent.match(/AppleWebKit/);navigator.geolocation?navigator.geolocation.getCurrentPosition(function(t){o(t.coords.latitude),u(t.coords.longitude)}):alert("Sorry, your browser does not support HTML5 geolocation.");return i.a.createElement("div",null,i.a.createElement("header",null,i.a.createElement(E.a,{className:"App-header",position:"static",color:"default",variant:"elevation"},i.a.createElement("img",{className:"bar-logo",src:"/icon.png"}),i.a.createElement("span",null,"City Navigator"))),i.a.createElement("main",null,v&&!m&&i.a.createElement(j.a,{variant:"contained",onClick:function(){DeviceOrientationEvent.requestPermission().then(function(t){"granted"===t?h(!0):(h(!1),alert("Compass has to be allowed!"))}).catch(function(t){alert(t),h(!1)})}},"Enable compass"),i.a.createElement(w.Provider,{value:m},function(){if(null!=n&&null!=l)return i.a.createElement(g,{latitude:n,longitude:l})}())),i.a.createElement("footer",null,i.a.createElement("a",{href:"https://www.flaticon.com/free-icons/",title:"icons"},"Icons created by Google - Flaticon")))};n(67);n(68).config(),r.a.render(i.a.createElement(k,null),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.7b63c7a5.chunk.js.map