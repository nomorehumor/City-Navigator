import React from 'react'
import { Paper, Stack, Box} from '@mui/material';
import { LocationContext } from '../LocationContext';
import { DirectionArrow } from './direction/DirectionArrow';

import config from "../../../config.json";

import "./Stations.css"

const GOOGLE_NEARBY_API = config.GOOGLE_NEARBY_API;
const GOOGLE_DISTANCE_API = config.GOOGLE_DISTANCE_API;

const MAX_STATION_AMOUNT = 10;

class Stations extends React.Component {

    static contextType = LocationContext;

    constructor(props) {
        super(props)
        this.state = {
            stations: []
        }
    }

    isStationInList(stations, stationName) {
        for (const station of stations) {
            if (station["name"] === stationName)
                return true;
        }
        return false;
    }

    updateStationsFromResponse(response) {
        var stationsCopy = this.state.stations.slice()

        for (const element of response['results']) {
            if (stationsCopy.length >= MAX_STATION_AMOUNT)
                break

            if (!this.isStationInList(stationsCopy, element["name"])){
                stationsCopy.push(
                    {
                        "name": element["name"],
                        "id": element["place_id"],
                        "latitude": element["geometry"]["location"]["lat"],
                        "longitude": element["geometry"]["location"]["lng"],
                        "types": element["types"],
                    }
                )
            }
        }

        this.setState({stations: stationsCopy})
    }

    reloadStationsList() {
        if (this.context == undefined || !this.context.latitude == undefined || !this.context.longitude == undefined) return

        var params = new URLSearchParams({
            location: this.context.latitude + "," + this.context.longitude,
            rankby: "distance",
            type: "train_station"
        })
        const apiRequest = GOOGLE_NEARBY_API + "?" + params

        fetch(
            apiRequest, 
            {
                method: 'GET',
                // headers: {'Content-Type':'application/json'},
            }
        )
        .then(response => response.json())
        .then(data => this.updateStationsFromResponse(data))
    }

    componentDidMount() {
        this.reloadStationsList()
    }

    render() {
        var location = this.context

        return <Stack>
                    <StationsList stations={this.state.stations}></StationsList>
                    <Paper variant="elevation" elevation={2} className="location-block">
                        <div>
                            Current location: {location.latitude} {location.longitude}
                        </div>
                    </Paper>
                </Stack>;
    }
}


export default Stations;

class StationsList extends React.Component {
    

    constructor(props) {
        super(props)
    }

    getStations() {
        return this.props.stations.map(element => {
            return <Station
                name={element["name"]} key={element["id"]} 
                station={element}>
            </Station>
        })
    };

    render() {
        return <div className="stations-container"
            spacing={2}>
                {this.getStations()}
            </div>;
    }
}

class Station extends React.Component {
        static contextType = LocationContext;

        constructor(props) {
            super(props)
            this.state = {
                distance: "",
                duration: "",
            }
            this.requestDistanceAPI()
        }
    
        isBusStation() {
            return this.props.station["types"].includes("bus_station")
        }
    
        isTrainStation() {
            return this.props.station["types"].includes("train_station")
        }
    
        handleDistanceResponse(response) {
            if (response["rows"].length === 0 || response["rows"][0]["elements"].length === 0) {
                return
            }
    
            var firstElement = response["rows"][0]["elements"][0]
    
            var newState = {
                distance: firstElement["distance"]["text"],
                duration: firstElement["duration"]["text"]
            }
    
            this.setState(newState);
        }
    
        requestDistanceAPI() {
            if (!this.context) return

            var location = this.context

            var params = new URLSearchParams({
                destinations: "place_id:" + this.props.station["id"],
                origins: location.latitude + ", " + location.longitude,
                mode: "walking"
            })
            const apiRequest = GOOGLE_DISTANCE_API + "?" + params

            fetch(apiRequest)
            .then(response => response.json())
            .then(data => this.handleDistanceResponse(data))
        }

        componentDidMount() {
            this.requestDistanceAPI()
        }

        getStationLink() {
            var location = this.context

            var params = new URLSearchParams({
                destination_place_id: this.props.station["id"],
                destination: this.props.name,
                origins: location.latitude + "," + location.longitude,
                travelmode: "walking"
            })

            return "https://www.google.com/maps/dir/?api=1&" + params;

        }
    
        render() {
            const stationLocation = {
                latitude: this.props.station.latitude,
                longitude: this.props.station.longitude
            }
            return  <a href={this.getStationLink()} className="station">
                        <Paper variant="elevation" elevation={4}>
                            <Box sx={{width: 350, fontFamily: "Jetbrains Mono, monospace", fontWeight: 600, fontSize: "1.2em", padding: "10px 10px", borderRadius: "10px"}}>
                                <div className="station-box">
                                    <div>
                                        <div>
                                            {
                                                this.isTrainStation() &&
                                                <img className="transport-icon" src={"/train-public-transport.png"} />
                                            }
                                            {
                                                this.isBusStation() &&
                                                <img className="transport-icon" src={"/bus-public-transport.png"} />
                                            }
                                        </div>
                                        <div>{this.props.name}</div>
                                        <div className="station-info">
                                            <div>{this.state.distance}</div>
                                            <div>{this.state.duration}</div>
                                        </div>
                                    </div>
                                    <div className="direction-arrow-box">
                                        <DirectionArrow destinationLocation={stationLocation}></DirectionArrow>
                                    </div>
                                </div>
                            </Box>
                        </Paper>
                    </a>
        }
    }