import React from "react";
import "../App.css";

import TopHeader from "./TopHeader";
import ScrollAnimation from "./ScrollAnimation";
import Avatar from "./Avatar";

const Members = () => {
    return (
        <div>
            <TopHeader />
            <ScrollAnimation elem={<Avatar />} animation="animate-text-focus-in"/>
            <ScrollAnimation elem={<Avatar />} animation="animate-text-focus-in"/>
            <div className="h-screen"></div>
            <ScrollAnimation elem={<Avatar />} animation="animate-text-focus-in"/>
            <ScrollAnimation elem={<Avatar />} animation="animate-text-focus-in"/>
        </div>
    );
}

export default Members;