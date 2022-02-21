import React, { useContext, useState } from "react"
import { Button } from "@mui/material"
// import { CompassContext } from "../../compass-context"
import { CompassContext } from "../../App"
import { style } from "@mui/system"
import "./DirectionArrow.css"

function DirectionArrowIcon(props) {
    return <img src="down-arrow.png" style={{transform: props.transform}}></img>
}

export function DirectionArrow(props) {

    var [compass, setCompass] = useState(null)
    // var [started, setStarted] = useState(false)
    const compassEnabled = useContext(CompassContext)

    var startCompass = () => {
        // setStarted(true)
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
        transform: "translate(-50%, -50%) rotate(-" + compass + "deg)",
        height: "2.5em"
    }

    return <div>
        {
            compassEnabled &&
            <img src="down-arrow.png" className="compass-arrow" style={style}></img>
        }
        {/* {
            !compassEnabled && 
            <img src="down-arrow.png" className="compass-arrow"></img>
        } */}
    </div>
}

function computeDirection(currentLocation, destinationLocation) {

}