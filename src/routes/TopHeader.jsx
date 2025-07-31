import React, { useState } from "react";
import "../App.css";

import { Link } from 'react-router-dom';

const TopHeader = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <header>
            <div className="navbar bg-base-100" style={{ height: "40px", minHeight: "unset" }}>
                {/* 左寄せ: "Pocoryanse-web" */}
                <div className="navbar-start">
                    <Link to="/" className="btn btn-ghost text-xl">Pocoryanse-web</Link>
                </div>
                
                {/* 中央部分: メニュー（PC表示時のみ表示） */}
                <div className="navbar-center hidden lg:flex absolute left-1/2 transform -translate-x-1/2">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/history">History</Link></li>
                        <li><Link to="/movies">Movies</Link></li>
                        <li><Link to="/HotSprings">HotSprings</Link></li>
                    </ul>
                </div>
                
                {/* 右寄せ: ドロップダウンメニュー */}
                <div className="navbar-end lg:hidden">
                    <button
                        onClick={toggleDrawer}
                        className="btn btn-ghost btn-circle"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h7"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Drawer */}
            <div
                className={`fixed inset-0 z-50 bg-black bg-opacity-75 flex flex-col transform transition-all duration-500 ${
                    isDrawerOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
                }`}
            >
                <div className="bg-white w-full h-full">
                    <div className="relative h-12 flex items-center">
                        <button
                            onClick={toggleDrawer}
                            className="btn btn-ghost btn-circle absolute top-1/2 right-2 transform -translate-y-1/2"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                        <h2 className="text-xl font-bold pl-4 text-left ml-2">Menu</h2>
                    </div>
                    <ul key={isDrawerOpen ? "open" : "closed"} className="p-4 ml-2 font-bold">
                        {["Home", "History", "Movies", "HotSprings"].map((link, index) => (
                            <li
                                key={index}
                                className={`py-2 opacity-0 animate-fade-in`}
                                style={{ animationDelay: `${index * 200}ms` }}
                            >
                                <Link to={`/${link.toLowerCase()}`} onClick={toggleDrawer}>
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default TopHeader;