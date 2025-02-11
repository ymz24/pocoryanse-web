import React from "react";
import "../App.css";
import { Link } from 'react-router-dom';

import TopHeader from "./TopHeader";
import Footer from "./Footer";

import pocoryanse from "../images/top.JPG";

const Home = () => {
    return (
        <div>
            <TopHeader />
            <div className="hero min-h-screen bg-[url('./images/top.JPG')]">
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
            </div>
            <Footer />
        </div>
    );
}

export default Home;