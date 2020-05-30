import React from "react"
import SideBySide from "./sideBySide";
import {Map, GoogleApiWrapper, Marker, Circle} from 'google-maps-react';


const mapStyles = {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0
};

const RenderMap = props => (
    <SideBySide>
        <div className={"map-component"}>
            <h1 className="text-gray-900 text-3xl md:text-5xl leading-tight font-extrabold" style={{fontFamily: "Nunito Sans"}}>With Great Coverage</h1>
            <div className="relative" style={{height: "40rem"}}>
                <Map
                    style={mapStyles}
                    google={props.google}
                    zoom={9.5}
                    // style={mapStyles}
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
        </div>
        <>
            <h2><a className="text-gray-900 md:text-gray-700 text-2xl leading-tight font-extrabold md:font-semibold  md:text-base md:uppercase" style={{fontFamily: "Nunito Sans"}}>Covering 20 miles around Bath</a></h2><br/>
            <p className="text-gray-600 text-xl font-serif leading-loose">Based in Bath, we cover a 20 mile radius, including Bristol, Chippenham, Trowbridge and more.</p>
        </>
    </SideBySide>
)

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBv1I7D_acWcsAOxNyTUw5dZsk5_9MpFv4'
})(RenderMap)
