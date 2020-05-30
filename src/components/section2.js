import React from "react"
import {Map, GoogleApiWrapper, Marker, Circle} from 'google-maps-react';

const mapStyles = {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0
};

export class Section extends React.Component {
    render() {
        return (
            <div className="container  mx-auto p-10">
                <div className="md:flex">
                    <div className="md:w-3/4 md:pr-20 pt-20">
                        <a className="text-gray-700 font-semibold">SERVICES</a>
                        <h1 className="mt-3 text-gray-900 text-5xl leading-tight"
                            style={{fontFamily: "Nunito Sans"}}>Covering
                            20 miles around Bath</h1>
                        <p className="text-gray-600 text-xl font-serif leading-loose">Based in Bath, we cover a 20 mile
                            radius, including Bristol, Chippenham, Trowbridge and more.</p>
                        <div className="relative" style={{height: "40rem"}}>
                            <Map
                                style={mapStyles}
                                google={this.props.google}
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
                    {/*<div className="md:w-1/4 pt-20">*/}
                    {/*    <h2><a className="text-gray-700 font-semibold">SCHEDULE APPOINTMENT</a></h2><br/>*/}
                    {/*    <p className="text-gray-600 text-xl font-serif leading-loose">All estimates are free and*/}
                    {/*        flexible. No*/}
                    {/*        hidden charges. No up selling.</p>*/}
                    {/*    <button*/}
                    {/*        className="border-solid border-2 border-orange-600 hover:bg-orange-600 hover:text-white text-orange-600 font-semibold py-4 my-8 px-8">BOOK*/}
                    {/*        NOW*/}
                    {/*    </button>*/}
                    {/*</div>*/}
                </div>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBv1I7D_acWcsAOxNyTUw5dZsk5_9MpFv4'
})(Section);