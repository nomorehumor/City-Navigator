(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{45:function(t,e,n){t.exports=n(61)},50:function(t,e,n){},51:function(t,e,n){},56:function(t,e,n){},61:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),o=n(35),r=n.n(o),s=n(10),c=(n(50),n(33)),l=n(25),u=n(26),p=n(29),d=n(28),m=n(69),h=n(76),f=n(77);function v(t){var e=Object(a.useState)(null),n=Object(s.a)(e,2),o=n[0],r=n[1],c=function(t){var e=t.webkitCompassHeading||Math.abs(t.alpha-360);console.log(e),r(e)};return navigator.userAgent.match(/(iPod|iPhone|iPad)/)&&navigator.userAgent.match(/AppleWebKit/)?DeviceOrientationEvent.requestPermission().then(function(t){alert(t),"granted"===t?window.addEventListener("deviceorientation",c,!0):alert("has to be allowed!")}).catch(function(t){return alert(t)}):window.addEventListener("deviceorientationabsolute",c,!0),i.a.createElement("div",null,"compass ",o)}n(51);var g=function(t){Object(p.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).state={stations:[]},a}return Object(u.a)(n,[{key:"isStationInList",value:function(t,e){var n,a=Object(c.a)(t);try{for(a.s();!(n=a.n()).done;){if(n.value.name===e)return!0}}catch(i){a.e(i)}finally{a.f()}return!1}},{key:"updateStationsFromResponse",value:function(t){var e,n=this.state.stations.slice(),a=Object(c.a)(t.results);try{for(a.s();!(e=a.n()).done;){var i=e.value;if(n.length>=10)break;this.isStationInList(n,i.name)||n.push({name:i.name,id:i.place_id,latitude:i.geometry.location.lat,longitude:i.geometry.location.lng,types:i.types})}}catch(o){a.e(o)}finally{a.f()}this.setState({stations:n})}},{key:"reloadStationsList",value:function(){var t=this,e=new URLSearchParams({key:"AIzaSyDk4Mc0nqWxEX6fnadfTmXLtXzvAkT7Gyc",location:this.props.latitude+", "+this.props.longitude,rankby:"distance",type:"train_station"});fetch("https://cors-city-navigator.herokuapp.com/".concat("https://maps.googleapis.com/maps/api/place/nearbysearch/json?"+e),{method:"GET",headers:{"Content-Type":"application/json"}}).then(function(t){return t.json()}).then(function(e){return t.updateStationsFromResponse(e)})}},{key:"componentDidMount",value:function(){this.reloadStationsList()}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",null,"Current location: ",this.props.latitude," ",this.props.longitude),i.a.createElement(v,null),i.a.createElement(y,{stations:this.state.stations,currentLongitude:this.props.longitude,currentLatitude:this.props.latitude}))}}]),n}(i.a.Component),y=function(t){Object(p.a)(n,t);var e=Object(d.a)(n);function n(t){return Object(l.a)(this,n),e.call(this,t)}return Object(u.a)(n,[{key:"getStations",value:function(){var t=this;return this.props.stations.map(function(e){return i.a.createElement(b,{name:e.name,key:e.id,station:e,currentLatitude:t.props.currentLatitude,currentLongitude:t.props.currentLongitude})})}},{key:"render",value:function(){return i.a.createElement(m.a,{direction:"column",justifyContent:"flex-start",alignItems:"center",spacing:2},this.getStations())}}]),n}(i.a.Component),b=function(t){Object(p.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).state={distance:"",duration:""},a.requestDistanceAPI(),a}return Object(u.a)(n,[{key:"isBusStation",value:function(){return this.props.station.types.includes("bus_station")}},{key:"isTrainStation",value:function(){return this.props.station.types.includes("train_station")}},{key:"handleDistanceResponse",value:function(t){if(0!==t.rows.length&&0!==t.rows[0].elements.length){var e=t.rows[0].elements[0],n={distance:e.distance.text,duration:e.duration.text};this.setState(n)}}},{key:"requestDistanceAPI",value:function(){var t=this,e=new URLSearchParams({key:"AIzaSyDk4Mc0nqWxEX6fnadfTmXLtXzvAkT7Gyc",destinations:"place_id:"+this.props.station.id,origins:this.props.currentLatitude+", "+this.props.currentLongitude,mode:"walking"});fetch("https://cors-city-navigator.herokuapp.com/".concat("https://maps.googleapis.com/maps/api/distancematrix/json?"+e)).then(function(t){return t.json()}).then(function(e){return t.handleDistanceResponse(e)})}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return i.a.createElement(h.a,{variant:"elevation",elevation:4},i.a.createElement(f.a,{sx:{width:300,height:100,fontFamily:"Jetbrains Mono, monospace",fontWeight:600,fontSize:"1.2em",padding:"10px",borderRadius:"10px"}},i.a.createElement("div",{className:"station-box"},i.a.createElement("div",null,i.a.createElement("div",null,this.isTrainStation()&&i.a.createElement("img",{className:"transport-icon",src:"/train-public-transport.png"}),this.isBusStation()&&i.a.createElement("img",{className:"transport-icon",src:"/bus-public-transport.png"})),i.a.createElement("div",null,this.props.name),i.a.createElement("div",{className:"station-info"},i.a.createElement("div",null,this.state.distance),i.a.createElement("div",null,this.state.duration))))))}}]),n}(i.a.Component),E=n(75),k=function(){var t=Object(a.useState)(null),e=Object(s.a)(t,2),n=e[0],o=e[1],r=Object(a.useState)(null),c=Object(s.a)(r,2),l=c[0],u=c[1];navigator.geolocation?navigator.geolocation.getCurrentPosition(function(t){o(t.coords.latitude),u(t.coords.longitude)}):alert("Sorry, your browser does not support HTML5 geolocation.");return i.a.createElement("div",null,i.a.createElement("header",null,i.a.createElement(E.a,{className:"App-header",position:"static",color:"default",variant:"elevation"},i.a.createElement("img",{className:"bar-logo",src:"/icon.png"}),i.a.createElement("span",null,"City Navigator"))),i.a.createElement("main",null,function(){if(null!=n&&null!=l)return i.a.createElement(g,{latitude:n,longitude:l})}()),i.a.createElement("footer",null,i.a.createElement("a",{href:"https://www.flaticon.com/free-icons/",title:"icons"},"Icons created by Google - Flaticon")))};n(56);n(57).config(),r.a.render(i.a.createElement(k,null),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.0d9de337.chunk.js.map