import React from "react";
import "../App.css";

import Menu from "./Menu";

const TopHeader = () => {
    return (
        <nav classNameName="bg-gray-200">
            <div classNameName="flex flex-wrap items-center">
                <span classNameName="flex items-center">Pocoryanse</span>
                
            </div>
            <Menu />
        </nav>
    );
};

export default TopHeader;