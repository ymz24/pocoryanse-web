import React from "react";
import "../App.css";

import Menu from "./Menu";

const TopHeader = () => {
    return (
        <div className="bg-base-100 h-300">
            <Menu />
            <span className="flex justify-center">Pocoryanse-web</span>
        </div>
    );
};

export default TopHeader;