import {MenuProps} from "antd";
import {NavLink} from "react-router-dom";

export const menuItems: MenuProps["items"] = [
    {
        label: (
            <NavLink to={"/calculator"}>Calculator</NavLink>
        ),
        key: 'calculator',
    },
    {
        label: (
            <NavLink to={"/quotes"}>Quotes</NavLink>
        ),
        key: 'quotes',
    },
    {
        label: (
            <NavLink to={"/map"}>Map</NavLink>
        ),
        key: 'map',
    }
]
