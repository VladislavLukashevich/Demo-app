import React from "react";
import {Menu} from "antd";
import {menuItems} from "./menu-items/menu-items"

export const Navbar: React.FC = () => (
    <Menu style={{marginBottom:10}}
          mode="horizontal"
          items={menuItems}>
    </Menu>
)
