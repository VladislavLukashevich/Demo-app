import React from "react";
import {Map as Mapbox} from "react-map-gl";
import {Layer, Source} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import data from "../../countries.geojson.json"
import type {FeatureCollection} from 'geojson';
import {initialViewState, layerStyle} from "./map-settings";

export const Map: React.FC = () => {
    return (
        <Mapbox
            mapboxAccessToken="" //TODO
            initialViewState={initialViewState}
            style={{width: "90vw", height: "90vh"}}
            mapStyle="mapbox://styles/mapbox/streets-v9"
        >
            <Source id="routeSource" type="geojson" data={data as FeatureCollection}>
                <Layer   {...layerStyle}/>
            </Source>
        </Mapbox>
    )
}
