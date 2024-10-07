import React from "react";
import "./App.css";

const TopHeader = () => {
    return (
        <div className="z-10">
            <div className="absolute bg-black w-full h-full bg-opacity-40 animate-text-focus-in" />
            <div className="bg-[url('./images/top.JPG')] bg-center bg-cover h-screen flex items-center justify-center bg-fixed">
                <div className="animate-text-focus-in text-white text-5xl">
                    Pocoryanse!
                </div>
            </div>
        </div>
    );
};

export default TopHeader;