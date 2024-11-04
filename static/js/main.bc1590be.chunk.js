(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{61:function(t,e,n){t.exports=n(77)},66:function(t,e,n){},67:function(t,e,n){},68:function(t,e,n){},72:function(t,e,n){},77:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),o=n(48),s=n.n(o),r=n(9),c=(n(66),n(43)),l=n(26),u=n(27),d=n(36),m=n(35),h=n(94),p=n(101),v=n(100),g=Object(a.createContext)({latitude:null,longitude:null});n(67);function f(t){var e=Object(a.useState)(null),n=Object(r.a)(e,2),o=n[0],s=n[1],c=Object(a.useContext)(x),l=Object(a.useContext)(g),u=function(t){var e=t.webkitCompassHeading||Math.abs(t.alpha-360);console.log(e),s(e)};c&&(navigator.userAgent.match(/(iPod|iPhone|iPad)/)&&navigator.userAgent.match(/AppleWebKit/)?window.addEventListener("deviceorientation",u,!0):window.addEventListener("deviceorientationabsolute",u,!0));var d={transform:"rotate("+(b(l,t.destinationLocation,o)+180)+"deg)",height:"2.5em"};return i.a.createElement("div",null,c&&i.a.createElement("img",{src:"down-arrow.png",className:"compass-arrow",style:d}))}function b(t,e,n){var a=Math.cos(e.latitude)*Math.sin(e.longitude-t.longitude),i=Math.cos(t.latitude)*Math.sin(e.latitude)-Math.sin(t.latitude)*Math.cos(e.latitude)*Math.cos(e.longitude-t.longitude);return 180*Math.atan2(a,i)/Math.PI-n}n(68);var E=function(t){Object(d.a)(n,t);var e=Object(m.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).state={stations:[]},a}return Object(u.a)(n,[{key:"isStationInList",value:function(t,e){var n,a=Object(c.a)(t);try{for(a.s();!(n=a.n()).done;){if(n.value.name===e)return!0}}catch(i){a.e(i)}finally{a.f()}return!1}},{key:"updateStationsFromResponse",value:function(t){var e,n=this.state.stations.slice(),a=Object(c.a)(t.results);try{for(a.s();!(e=a.n()).done;){var i=e.value;if(n.length>=10)break;this.isStationInList(n,i.name)||n.push({name:i.name,id:i.place_id,latitude:i.geometry.location.lat,longitude:i.geometry.location.lng,types:i.types})}}catch(o){a.e(o)}finally{a.f()}this.setState({stations:n})}},{key:"reloadStationsList",value:function(){var t=this;if(void 0!=this.context&&void 0!=!this.context.latitude&&void 0!=!this.context.longitude){var e=new URLSearchParams({location:this.context.latitude+", "+this.context.longitude,rankby:"distance",type:"train_station"});fetch("https://city-navigator-gateway.onrender.com/nearby?"+e,{method:"GET",headers:{"Content-Type":"application/json"}}).then(function(t){return t.json()}).then(function(e){return t.updateStationsFromResponse(e)})}}},{key:"componentDidMount",value:function(){this.reloadStationsList()}},{key:"render",value:function(){var t=this.context;return i.a.createElement(h.a,null,i.a.createElement(w,{stations:this.state.stations}),i.a.createElement(p.a,{variant:"elevation",elevation:2,className:"location-block"},i.a.createElement("div",null,"Current location:",i.a.createElement("div",null,t.latitude),i.a.createElement("div",null,t.longitude))))}}]),n}(i.a.Component);E.contextType=g;var y=E,w=function(t){Object(d.a)(n,t);var e=Object(m.a)(n);function n(t){return Object(l.a)(this,n),e.call(this,t)}return Object(u.a)(n,[{key:"getStations",value:function(){this.context;return this.props.stations.map(function(t){return i.a.createElement(j,{name:t.name,key:t.id,station:t})})}},{key:"render",value:function(){return i.a.createElement("div",{className:"stations-container",direction:"column",spacing:2},this.getStations())}}]),n}(i.a.Component),j=function(t){Object(d.a)(n,t);var e=Object(m.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).state={distance:"",duration:""},a.requestDistanceAPI(),a}return Object(u.a)(n,[{key:"isBusStation",value:function(){return this.props.station.types.includes("bus_station")}},{key:"isTrainStation",value:function(){return this.props.station.types.includes("train_station")}},{key:"handleDistanceResponse",value:function(t){if(0!==t.rows.length&&0!==t.rows[0].elements.length){var e=t.rows[0].elements[0],n={distance:e.distance.text,duration:e.duration.text};this.setState(n)}}},{key:"requestDistanceAPI",value:function(){var t=this;if(this.context){var e=this.context,n=new URLSearchParams({destinations:"place_id:"+this.props.station.id,origins:e.latitude+", "+e.longitude,mode:"walking"});fetch("https://city-navigator-gateway.onrender.com/distance?"+n).then(function(t){return t.json()}).then(function(e){return t.handleDistanceResponse(e)})}}},{key:"componentDidMount",value:function(){this.requestDistanceAPI()}},{key:"getStationLink",value:function(){var t=this.context;return"https://www.google.com/maps/dir/?api=1&"+new URLSearchParams({destination_place_id:this.props.station.id,destination:this.props.name,origins:t.latitude+", "+t.longitude,travelmode:"walking"})}},{key:"render",value:function(){var t={latitude:this.props.station.latitude,longitude:this.props.station.longitude};return i.a.createElement("a",{href:this.getStationLink(),className:"station"},i.a.createElement(p.a,{variant:"elevation",elevation:4},i.a.createElement(v.a,{sx:{width:350,fontFamily:"Jetbrains Mono, monospace",fontWeight:600,fontSize:"1.2em",padding:"10px 10px",borderRadius:"10px"}},i.a.createElement("div",{className:"station-box"},i.a.createElement("div",null,i.a.createElement("div",null,this.isTrainStation()&&i.a.createElement("img",{className:"transport-icon",src:"/train-public-transport.png"}),this.isBusStation()&&i.a.createElement("img",{className:"transport-icon",src:"/bus-public-transport.png"})),i.a.createElement("div",null,this.props.name),i.a.createElement("div",{className:"station-info"},i.a.createElement("div",null,this.state.distance),i.a.createElement("div",null,this.state.duration))),i.a.createElement("div",{className:"direction-arrow-box"},i.a.createElement(f,{destinationLocation:t}))))))}}]),n}(i.a.Component);j.contextType=g;var O=n(102),k=n(98),x=Object(a.createContext)(null),S=function(){var t=Object(a.useState)(null),e=Object(r.a)(t,2),n=e[0],o=e[1],s=Object(a.useState)(null),c=Object(r.a)(s,2),l=c[0],u=c[1],d=Object(a.useState)(!1),m=Object(r.a)(d,2),h=m[0],p=m[1],v=navigator.userAgent.match(/(iPod|iPhone|iPad)/)&&navigator.userAgent.match(/AppleWebKit/);navigator.geolocation?navigator.geolocation.getCurrentPosition(function(t){o(t.coords.latitude),u(t.coords.longitude)}):alert("Sorry, your browser does not support HTML5 geolocation.");return i.a.createElement("div",null,i.a.createElement("header",null,i.a.createElement(O.a,{className:"App-header",position:"static",color:"default",variant:"elevation"},i.a.createElement("img",{className:"bar-logo",src:"/icon.png"}),i.a.createElement("span",null,"City Navigator"))),i.a.createElement("main",null,v&&!h&&i.a.createElement(k.a,{variant:"contained",onClick:function(){v?DeviceOrientationEvent.requestPermission().then(function(t){"granted"===t?p(!0):(p(!1),alert("Compass has to be allowed!"))}).catch(function(t){alert(t),p(!1)}):p(!0)},className:"compass-button"},"Enable compass"),i.a.createElement(g.Provider,{value:{latitude:n,longitude:l}},i.a.createElement(x.Provider,{value:h},null!=n&&null!=l&&i.a.createElement(y,null)))),i.a.createElement("footer",null,i.a.createElement("a",{href:"https://www.flaticon.com/free-icons/",title:"icons"},"Icons created by Google - Flaticon")))};n(72);n(73).config(),s.a.render(i.a.createElement(S,null),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.bc1590be.chunk.js.map