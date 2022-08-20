import React, { useRef, useEffect, useState } from "react";
import ReactMapGl from "react-map-gl";
//Styles

const Location = () => {
    const [viewPort, setViewPort] = useState({
        latitude: 23.813777504086968,
        longitude: 90.41314594014881,
        width: "100%",
        height: "100%",
        zoom: 9,
    });
    return (
        <div className="myLocation">
            <ReactMapGl
                {...viewPort}
                onViewportChange={(viewPort) => {
                    setViewPort(viewPort);
                }}
                mapStyle="mapbox://styles/sajjad060/cl723q066000d14n6gf1vdud9"
                mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            ></ReactMapGl>
        </div>
    );
};

export default Location;
