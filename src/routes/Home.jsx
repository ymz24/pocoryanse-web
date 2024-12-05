import React from "react";
import "../App.css";

import TopHeader from "./TopHeader";
import Footer from "./Footer";

const Home = () => {
    return (
        <div>
            <TopHeader />
            <div className="z-0">
                <div className="absolute bg-black w-full h-screen bg-opacity-40 animate-text-focus-in" />
                <div className="bg-[url('./images/top.JPG')] bg-contain bg-cover h-screen flex items-center justify-center bg-fixed">
                    <div className="animate-text-focus-in text-white text-5xl">
                        Pocoryanse!
                    </div>
                </div>
            </div>
            <div className="bg-base-200 h-1/2">
                <h1 className="text-4xl">Wellcome to Pocoryanse-web!!</h1>
                <p>桒野歩夢、能美泰成、三谷一晴、柳井一真、山崎翔矢の5人からなるグループのいろいろをまとめたサイトです。</p>
            </div>
            <Footer />
      </div>
    );
}

export default Home;