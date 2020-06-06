import React from "react"
import {Map, Circle, CircleMarker, Popup, TileLayer} from 'react-leaflet'

const MapContainer = (props) => (
    <>
        <link
            rel="stylesheet"
            href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
            integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
            crossOrigin=""
        />
        <Map className={"relative w-full"} style={{height: "40rem"}} center={[51.3811, -2.3590]} zoom={9.5}>
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Circle center={[51.3811, -2.3590]} color="blue" fillColor="blue" fillOpacity={0.15} opacity={0.2} radius={28186.9}>
                <Popup>Yes, we cover here!</Popup>
            </Circle>
        </Map>
    </>
)

export default MapContainer
