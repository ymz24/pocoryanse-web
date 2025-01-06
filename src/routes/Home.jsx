import React from "react";
import "../App.css";

import TopHeader from "./TopHeader";
import Footer from "./Footer";

const Home = () => {
    return (
        <div>
            <TopHeader />
            <div className="z-0">
                <div className="absolute bg-black w-full h-screen bg-opacity-40 hidden sm:flex animate-text-focus-in" />
                <div className="bg-[url('./images/top.JPG')] bg-center bg-cover w-full hidden sm:flex h-screen items-center justify-center bg-fixed">
                    <div className="animate-text-focus-in text-white text-5xl font-bold">
                        Hi there!
                    </div>
                    <div className="text-center py-6">
                        This web site is summarize various things of Pocoryanse.
                    </div>
                </div>
            </div>
            <div className="text-5xl font-bold justify-center flex sm:hidden animate-text-focus-in">
                Hi There!
            </div>
            <Footer />
      </div>
    );
}

export default Home;