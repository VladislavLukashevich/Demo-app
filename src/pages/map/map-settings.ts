import {CircleLayer} from "react-map-gl";

export const layerStyle: CircleLayer = {
    id: 'point',
    type: 'circle',
    paint: {
        'circle-radius': 5,
        'circle-color': '#007cbf'
    }
};

export const initialViewState = {
    longitude: -122.4,
    latitude: 37.8,
    zoom: 14
}
