import React from "react"
import {GoogleApiWrapper, Circle, Map, Marker} from "google-maps-react";


const mapStyles = {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0
};

const MapContainer = (props) => (
    <div className="relative" style={{height: "40rem"}}>
        <Map
            style={mapStyles}
            google={props.google}
            zoom={9.5}
            initialCenter={{
                lat: 51.3811,
                lng: -2.3590
            }}
        >
            <Marker
                name={'Bath'}
            />
            <Circle
                center={{
                    lat: 51.3811,
                    lng: -2.3590,
                }}
                radius={32186.9} strokeColor="#0000FF"
                strokeOpacity={0.2} strokeWeight={1} fillColor="#0000FF"
                fillOpacity={0.1}/>
        </Map>
    </div>
)

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBv1I7D_acWcsAOxNyTUw5dZsk5_9MpFv4'
})(MapContainer)
