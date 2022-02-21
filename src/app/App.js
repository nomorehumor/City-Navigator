import './App.css';
import Stations from "./stations/Stations"
import React, { createContext, useState } from 'react';
import { AppBar, Button } from '@mui/material';
// import CompassContext from "./compass-context.js"

export const CompassContext = createContext(null) 
export const LocationContext = createContext({latitude: null, longitude: null})

const App = () => {

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const [compassEnabled, setCompassEnabled] = useState(false);

  const isIOS = (
    navigator.userAgent.match(/(iPod|iPhone|iPad)/) &&
    navigator.userAgent.match(/AppleWebKit/)
  );

  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLatitude(position.coords.latitude)
      setLongitude(position.coords.longitude)
    })
  } else {
    alert("Sorry, your browser does not support HTML5 geolocation.");
  }

  var renderStations = () => {
    if (latitude != null && longitude != null) {
      return <Stations latitude={latitude} longitude={longitude}></Stations>;
    }
  }

  var requestCompassPermission = () => {
    DeviceOrientationEvent.requestPermission()
    .then((response) => {
      if (response === "granted") {
        setCompassEnabled(true);
      } else {
        setCompassEnabled(false);
        alert("Compass has to be allowed!");
      }
    })
    .catch((e) => {
      alert(e); //TODO: Remove
      setCompassEnabled(false)
    });
  }

  return (
    <div>
      <header>
        <AppBar className='App-header' position="static" color="default" variant="elevation">
          <img className='bar-logo' src='/icon.png'></img>
          <span>City Navigator</span>
        </AppBar>
      </header>
      <main>
        {
          isIOS && !compassEnabled &&
          <Button variant="contained" onClick={requestCompassPermission}>Enable compass</Button>
        }
        <LocationContext.Provider value={{latitude: latitude, longitude: longitude}}>
          <CompassContext.Provider value={compassEnabled}>
            {renderStations()}
          </CompassContext.Provider>
        </LocationContext.Provider>
      </main>
      <footer><a href="https://www.flaticon.com/free-icons/" title="icons">Icons created by Google - Flaticon</a></footer>
    </div>
  );
}
  



export default App;
