import React from "react";
import "../App.css";
import { Link } from 'react-router-dom';

import TopHeader from "./TopHeader";
import Footer from "./Footer";

const Home = () => {
    return (
        <div>
            <TopHeader />
            {/* <div className="hero min-h-screen bg-[url('../public/images/top.JPG')]">
                <div className="hero-overlay bg-opacity-40"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">
                            Pocoryanse is a group consisting of Ayumu Kuwano, Issei Mitani, Kazuma Yanai, Shoya Yamasaki, and Taisei Nomi.
                        </p>
                        <Link to="/history" className="btn btn-primary">Learn about us</Link>
                    </div>
                </div>
            </div> */}
            <div className="z-0">
                <div className="absolute bg-black w-full h-screen bg-opacity-40 hidden sm:flex animate-text-focus-in" />
                <div className="bg-[url('../public/images/top.JPG')] bg-center bg-cover w-full hidden sm:flex h-screen items-center justify-center bg-fixed">
                    <div className="animate-text-focus-in text-white text-5xl font-bold items-center">
                        Hi there!
                    </div>
                    <div className="text-center py-6 animate-text-focus-in">
                        This web site is summarize various things of Pocoryanse.
                    </div>
                </div>
            </div>
            {/* <div className="bg-[url('../public/images/top.JPG')] bg-center bg-cover w-full" /> */}
            <div className="text-5xl font-bold justify-center flex sm:hidden animate-text-focus-in">
                Hi There!
            </div>
            <Footer />
        </div>
    );
}

export default Home;