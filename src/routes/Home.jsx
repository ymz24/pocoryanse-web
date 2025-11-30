import React from "react";
import "../App.css";
import { Link } from 'react-router-dom';

import TopHeader from "./TopHeader";
import Footer from "./Footer";

const Home = () => {
    return (
        <div className="h-screen">
            <TopHeader />
            <div className="relative">
                <img
                    src={process.env.PUBLIC_URL + "/images/top.JPG"}
                    alt="Top Background"
                    className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white">
                    <h1 className="text-5xl font-bold animate-text-focus-in">Hi there!</h1>
                    <p className="text-center py-6 animate-text-focus-in">
                        This web site summarizes various things of Pocoryanse.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;