import React, { useContext, useState } from "react"
import { CompassContext } from "../../App"
import "./DirectionArrow.css"
import { LocationContext } from "../../LocationContext"

function DirectionArrowIcon(props) {
    return <img src="down-arrow.png" style={{transform: props.transform}}></img>
}

export function DirectionArrow(props) {

    var [compass, setCompass] = useState(null)
    const compassEnabled = useContext(CompassContext)
    const location = useContext(LocationContext)

    var startCompass = () => {
        const isIOS = (
            navigator.userAgent.match(/(iPod|iPhone|iPad)/) &&
            navigator.userAgent.match(/AppleWebKit/)
        );
    
        if (isIOS) {
            window.addEventListener("deviceorientation", compassHandler, true);       
        } else {
            window.addEventListener("deviceorientationabsolute", compassHandler, true);
        }
    }

    var compassHandler = (e) => {
        let compassValue = e.webkitCompassHeading || Math.abs(e.alpha - 360);
        console.log(compassValue)
        setCompass(compassValue)
    }

    if (compassEnabled) {
        startCompass()
    }


    var style = {
        transform: "rotate(" + (computeDirectionAngle(location, props.destinationLocation, compass) + 180) + "deg)",
        height: "2.5em"
    }

    return <div>
        {
            compassEnabled &&
            <img src="down-arrow.png" className="compass-arrow" style={style}></img>
        }
    </div>
}

function computeDirectionAngle(currentLocation, destinationLocation, northAngle) {
    const X = Math.cos(destinationLocation.latitude) * Math.sin(destinationLocation.longitude - currentLocation.longitude);
    const Y = Math.cos(currentLocation.latitude) * Math.sin(destinationLocation.latitude) - Math.sin(currentLocation.latitude) * Math.cos(destinationLocation.latitude) * Math.cos(destinationLocation.longitude - currentLocation.longitude);

    const beta = Math.atan2(X,Y)
    const angle = beta * 180 / Math.PI
    return angle - northAngle;
}