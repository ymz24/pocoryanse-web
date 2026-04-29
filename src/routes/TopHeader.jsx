import React, { useState } from "react";
import "../App.css";

import { Link } from 'react-router-dom';

const TopHeader = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <>
        <header className="liquid-glass-header fixed top-0 left-0 w-full z-[70]">
            <span className="liquid-glass-header__tint" aria-hidden="true" />
            <span className="liquid-glass-header__highlight" aria-hidden="true" />
            <div className="navbar relative z-10 bg-transparent" style={{ height: "40px", minHeight: "unset" }}>
                {/* 左寄せ: "Pocoryanse-web" */}
                <div className="navbar-start">
                    <Link
                        to="/"
                        className="px-3 text-[15px]"
                        style={{ fontWeight: 600, letterSpacing: "-0.02em", color: "#1d1d1f" }}
                    >
                        Pocoryanse
                    </Link>
                </div>
                
                {/* 中央部分: メニュー（PC表示時のみ表示） */}
                <div className="navbar-center hidden lg:flex absolute left-1/2 transform -translate-x-1/2">
                    <ul className="flex items-center gap-7 text-[13px]">
                        {[
                            { label: "Home", path: "/" },
                            { label: "History", path: "/history" },
                            { label: "Movies", path: "/Movies" },
                            { label: "HotSprings", path: "/HotSprings" },
                            { label: "Ramen", path: "/Ramen" },
                            { label: "Others", path: "/others" },
                        ].map((it) => (
                            <li key={it.path}>
                                <Link
                                    to={it.path}
                                    className="apple-nav-link"
                                >
                                    {it.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                
                {/* 右寄せ: ハンバーガー → × モーフィングボタン */}
                <div className="navbar-end lg:hidden">
                    <button
                        onClick={toggleDrawer}
                        className={`hamburger-btn ${isDrawerOpen ? "is-open" : ""}`}
                        aria-label={isDrawerOpen ? "メニューを閉じる" : "メニューを開く"}
                        aria-expanded={isDrawerOpen}
                    >
                        <span className="hamburger-btn__bar" />
                        <span className="hamburger-btn__bar" />
                        <span className="hamburger-btn__bar" />
                    </button>
                </div>
            </div>

            <style>{`
                /* アニメーションを無効化したシンプルなアイコンボタン */
                .plain-icon-btn {
                    background: transparent;
                    border: none;
                    padding: 8px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    color: inherit;
                    cursor: pointer;
                    outline: none;
                    transition: none;
                    transform: none;
                }
                .plain-icon-btn:hover,
                .plain-icon-btn:focus,
                .plain-icon-btn:active {
                    background: transparent;
                    transform: none;
                    box-shadow: none;
                    outline: none;
                }
                /* Apple風ナビゲーションリンク */
                .apple-nav-link {
                    color: #1d1d1f;
                    opacity: 0.85;
                    font-weight: 400;
                    letter-spacing: -0.01em;
                    transition: opacity 0.2s ease, color 0.2s ease;
                    text-decoration: none;
                }
                .apple-nav-link:hover {
                    opacity: 1;
                }
                /* ハンバーガー → × モーフィングボタン */
                .hamburger-btn {
                    position: relative;
                    width: 32px;
                    height: 32px;
                    background: transparent;
                    border: none;
                    padding: 0;
                    cursor: pointer;
                    color: inherit;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    outline: none;
                }
                .hamburger-btn:hover,
                .hamburger-btn:focus,
                .hamburger-btn:active {
                    background: transparent;
                    box-shadow: none;
                    outline: none;
                }
                .hamburger-btn__bar {
                    position: absolute;
                    left: 6px;
                    right: 6px;
                    height: 2px;
                    background: currentColor;
                    border-radius: 2px;
                    transition: transform 0.28s cubic-bezier(.2,.8,.2,1), opacity 0.2s ease, top 0.28s cubic-bezier(.2,.8,.2,1);
                    transform-origin: center;
                }
                .hamburger-btn__bar:nth-child(1) { top: 10px; }
                .hamburger-btn__bar:nth-child(2) { top: 15px; }
                .hamburger-btn__bar:nth-child(3) { top: 20px; right: 11px; }
                /* 閉じている状態の3本目は短く（元のデザイン踏襲） */

                .hamburger-btn.is-open .hamburger-btn__bar:nth-child(1) {
                    top: 15px;
                    transform: rotate(45deg);
                }
                .hamburger-btn.is-open .hamburger-btn__bar:nth-child(2) {
                    opacity: 0;
                    transform: scaleX(0);
                }
                .hamburger-btn.is-open .hamburger-btn__bar:nth-child(3) {
                    top: 15px;
                    right: 6px;
                    transform: rotate(-45deg);
                }
                .liquid-glass-header {
                    position: fixed;
                    overflow: hidden;
                    isolation: isolate;
                    background: rgba(255, 255, 255, 0.55);
                    -webkit-backdrop-filter: blur(20px) saturate(180%);
                    backdrop-filter: blur(20px) saturate(180%);
                    border-bottom: 1px solid rgba(255, 255, 255, 0.35);
                    box-shadow:
                        0 6px 20px rgba(0, 0, 0, 0.08),
                        inset 0 1px 1px rgba(255, 255, 255, 0.7),
                        inset 0 -1px 2px rgba(255, 255, 255, 0.18);
                }
                .liquid-glass-header__tint {
                    position: absolute;
                    inset: 0;
                    pointer-events: none;
                    z-index: 0;
                    background:
                        radial-gradient(120% 120% at 20% 0%, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0) 60%),
                        radial-gradient(120% 120% at 80% 100%, rgba(120,180,255,0.25) 0%, rgba(255,255,255,0) 65%);
                }
                .liquid-glass-header__highlight {
                    position: absolute;
                    top: 0;
                    left: 8%;
                    right: 8%;
                    height: 6px;
                    border-radius: 9999px;
                    background: linear-gradient(180deg, rgba(255,255,255,0.85), rgba(255,255,255,0));
                    filter: blur(2px);
                    opacity: 0.85;
                    pointer-events: none;
                    z-index: 1;
                }
                /* navbar 内のテキストを少しコントラスト付ける */
                .liquid-glass-header .navbar a,
                .liquid-glass-header .navbar button {
                    text-shadow: 0 1px 0 rgba(255,255,255,0.45);
                }
                @media (prefers-color-scheme: dark) {
                    .liquid-glass-header {
                        background: rgba(20, 20, 22, 0.45);
                        border-bottom-color: rgba(255,255,255,0.12);
                        box-shadow:
                            0 6px 20px rgba(0, 0, 0, 0.45),
                            inset 0 1px 1px rgba(255, 255, 255, 0.18),
                            inset 0 -1px 2px rgba(255, 255, 255, 0.06);
                    }
                    .liquid-glass-header .navbar a,
                    .liquid-glass-header .navbar button {
                        text-shadow: 0 1px 0 rgba(0,0,0,0.5);
                    }
                }
            `}</style>
        </header>

            {/* Drawer (header の外に出して全画面で表示できるようにする) */}
            <div
                className={`fixed inset-0 z-[60] flex flex-col transform transition-all duration-500 ${
                    isDrawerOpen ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-full opacity-0 pointer-events-none"
                }`}
                style={{
                    background: "rgba(245, 245, 247, 0.92)",
                    backdropFilter: "blur(30px) saturate(180%)",
                    WebkitBackdropFilter: "blur(30px) saturate(180%)"
                }}
            >
                <div className="w-full h-full pt-16 px-8 md:px-16">
                    <p
                        className="text-[11px] uppercase mb-6"
                        style={{ letterSpacing: "0.22em", color: "#86868b", fontWeight: 500 }}
                    >
                        Menu
                    </p>
                    <ul key={isDrawerOpen ? "open" : "closed"} className="flex flex-col gap-1">
                        {[
                            { label: "Home", path: "/" },
                            { label: "History", path: "/history" },
                            { label: "Movies", path: "/Movies" },
                            { label: "HotSprings", path: "/HotSprings" },
                            { label: "Ramen", path: "/Ramen" },
                            { label: "Others", path: "/others" },
                        ].map((link, index) => (
                            <li
                                key={index}
                                className="opacity-0 animate-fade-in"
                                style={{ animationDelay: `${index * 80}ms` }}
                            >
                                <Link
                                    to={link.path}
                                    onClick={toggleDrawer}
                                    className="block py-3"
                                    style={{
                                        color: "#1d1d1f",
                                        fontSize: "32px",
                                        fontWeight: 500,
                                        letterSpacing: "-0.03em",
                                        borderBottom: "1px solid rgba(0,0,0,0.06)"
                                    }}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default TopHeader;