import React from "react";
import "../App.css";
import { Link } from 'react-router-dom';

import TopHeader from "./TopHeader";
import Footer from "./Footer";

const Home = () => {
    const navItems = [
        {
            label: "History",
            path: "/history",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                </svg>
            ),
        },
        {
            label: "Movies",
            path: "/Movies",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M10 9l5 3-5 3z" fill="currentColor" stroke="none" />
                </svg>
            ),
        },
        {
            label: "HotSprings",
            path: "/HotSprings",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 4c0 2 2 2 2 4s-2 2-2 4" />
                    <path d="M14 4c0 2 2 2 2 4s-2 2-2 4" />
                    <path d="M3 17c2 0 2-1 4-1s2 1 4 1 2-1 4-1 2 1 4 1 2-1 2-1" />
                </svg>
            ),
        },
        {
            label: "Ramen",
            path: "/Ramen",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 11h16a8 8 0 0 1-16 0z" />
                    <path d="M3 11h18" />
                    <path d="M9 7c0-1 1-1 1-2M13 7c0-1 1-1 1-2M17 7c0-1 1-1 1-2" />
                </svg>
            ),
        },
        {
            label: "Others",
            path: "/others",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="6" cy="12" r="1.5" fill="currentColor" stroke="none" />
                    <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
                    <circle cx="18" cy="12" r="1.5" fill="currentColor" stroke="none" />
                </svg>
            ),
        },
    ];

    return (
        <div className="min-h-screen bg-[#f5f5f7]">
            <TopHeader />
            <section className="relative w-full overflow-hidden">
                <img
                    src={process.env.PUBLIC_URL + "/images/top.JPG"}
                    alt="Top Background"
                    className="block w-full h-auto home-hero__img"
                    style={{ filter: "saturate(1.05) contrast(1.02)" }}
                />
                {/* 上下からの cinematic グラデ */}
                <div className="absolute inset-0 pointer-events-none home-hero__veil"
                    style={{
                        background:
                            "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.10) 30%, rgba(0,0,0,0.20) 65%, rgba(0,0,0,0.70) 100%)"
                    }}
                />
                {/* 走る光のスイープ */}
                <div className="absolute inset-0 pointer-events-none home-hero__sheen" aria-hidden="true" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6 text-center">
                    <p
                        className="home-hero__eyebrow text-[10px] sm:text-xs uppercase mb-3 sm:mb-4"
                        style={{
                            letterSpacing: "0.32em",
                            fontWeight: 500,
                            color: "rgba(255,255,255,0.78)"
                        }}
                    >
                        Pocoryanse
                    </p>
                    <h1
                        className="home-hero__title text-4xl sm:text-5xl md:text-7xl"
                        style={{
                            fontWeight: 600,
                            letterSpacing: "-0.035em",
                            textShadow: "0 2px 24px rgba(0,0,0,0.35)"
                        }}
                    >
                        Hi there!
                    </h1>
                    <p
                        className="home-hero__lede mt-3 md:mt-5 max-w-xl text-sm sm:text-base md:text-lg"
                        style={{
                            fontWeight: 300,
                            letterSpacing: "-0.005em",
                            color: "rgba(255,255,255,0.92)",
                            textShadow: "0 1px 12px rgba(0,0,0,0.35)"
                        }}
                    >
                        This web site summarizes various things of Pocoryanse.
                    </p>
                    <span className="home-hero__rule" aria-hidden="true" />
                </div>
            </section>

            {/* ページショートカット */}
            <section className="px-4 sm:px-6 md:px-10 py-12 md:py-16">
                <p
                    className="home-explore__label text-center text-[11px] uppercase mb-6"
                    style={{ letterSpacing: "0.22em", color: "#86868b", fontWeight: 500 }}
                >
                    Explore
                </p>
                <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
                    {navItems.map((item, i) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className="home-tile group"
                            style={{ animationDelay: `${0.6 + i * 0.08}s` }}
                        >
                            <span className="home-tile__icon" aria-hidden="true">
                                {item.icon}
                            </span>
                            <span className="home-tile__label">{item.label}</span>
                            <svg
                                className="home-tile__chevron"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                            >
                                <path d="M9 6l6 6-6 6" />
                            </svg>
                        </Link>
                    ))}
                </div>
            </section>

            <style>{`
                /* ===== Opening animations ===== */
                @keyframes home-hero-zoom {
                    0%   { transform: scale(1.08); filter: saturate(1.05) contrast(1.02) blur(6px); opacity: 0; }
                    60%  { opacity: 1; }
                    100% { transform: scale(1); filter: saturate(1.05) contrast(1.02) blur(0); opacity: 1; }
                }
                @keyframes home-veil-fade {
                    from { opacity: 0; }
                    to   { opacity: 1; }
                }
                @keyframes home-sheen-sweep {
                    0%   { transform: translateX(-120%) skewX(-12deg); opacity: 0; }
                    20%  { opacity: 0.9; }
                    100% { transform: translateX(220%) skewX(-12deg); opacity: 0; }
                }
                @keyframes home-text-rise {
                    from { transform: translateY(18px); opacity: 0; filter: blur(4px); }
                    to   { transform: translateY(0);    opacity: 1; filter: blur(0); }
                }
                @keyframes home-rule-grow {
                    from { transform: scaleX(0); opacity: 0; }
                    to   { transform: scaleX(1); opacity: 0.8; }
                }
                @keyframes home-tile-rise {
                    from { transform: translateY(14px); opacity: 0; }
                    to   { transform: translateY(0);    opacity: 1; }
                }
                @keyframes home-label-fade {
                    from { letter-spacing: 0.4em; opacity: 0; }
                    to   { letter-spacing: 0.22em; opacity: 1; }
                }

                .home-hero__img {
                    animation: home-hero-zoom 1.6s cubic-bezier(.2,.8,.2,1) both;
                }
                .home-hero__veil {
                    animation: home-veil-fade 1.4s ease-out both;
                }
                .home-hero__sheen {
                    background: linear-gradient(110deg, rgba(255,255,255,0) 35%, rgba(255,255,255,0.35) 50%, rgba(255,255,255,0) 65%);
                    animation: home-sheen-sweep 2.2s cubic-bezier(.2,.8,.2,1) 0.4s both;
                    mix-blend-mode: screen;
                }
                .home-hero__eyebrow {
                    animation: home-text-rise 1s cubic-bezier(.2,.8,.2,1) 0.5s both;
                }
                .home-hero__title {
                    animation: home-text-rise 1.1s cubic-bezier(.2,.8,.2,1) 0.7s both;
                }
                .home-hero__lede {
                    animation: home-text-rise 1.1s cubic-bezier(.2,.8,.2,1) 0.95s both;
                }
                .home-hero__rule {
                    display: block;
                    margin-top: 22px;
                    width: 56px;
                    height: 1px;
                    background: rgba(255,255,255,0.7);
                    transform-origin: center;
                    animation: home-rule-grow 0.9s cubic-bezier(.2,.8,.2,1) 1.2s both;
                }
                .home-explore__label {
                    animation: home-label-fade 1s ease-out 0.5s both;
                }

                /* ===== Tiles ===== */
                .home-tile {
                    position: relative;
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    padding: 16px 14px;
                    border-radius: 22px;
                    background: #ffffff;
                    color: #1d1d1f;
                    text-decoration: none;
                    box-shadow: 0 1px 2px rgba(0,0,0,0.04), 0 6px 20px rgba(0,0,0,0.05);
                    transition: transform 0.25s cubic-bezier(.2,.8,.2,1),
                                box-shadow 0.25s ease,
                                background 0.25s ease;
                    animation: home-tile-rise 0.7s cubic-bezier(.2,.8,.2,1) both;
                    min-width: 0;
                }
                @media (min-width: 640px) {
                    .home-tile { gap: 14px; padding: 18px 20px; }
                }
                .home-tile:hover {
                    transform: translateY(-2px);
                    background: #fafafa;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.05), 0 12px 28px rgba(0,0,0,0.08);
                }
                .home-tile:active {
                    transform: translateY(0) scale(0.98);
                }
                .home-tile__icon {
                    flex: none;
                    width: 32px;
                    height: 32px;
                    border-radius: 10px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    color: #ffffff;
                    background: linear-gradient(135deg, #0a84ff 0%, #5e5ce6 100%);
                    box-shadow: inset 0 1px 1px rgba(255,255,255,0.35);
                }
                @media (min-width: 640px) {
                    .home-tile__icon { width: 36px; height: 36px; border-radius: 12px; }
                }
                .home-tile__icon svg {
                    width: 18px;
                    height: 18px;
                }
                @media (min-width: 640px) {
                    .home-tile__icon svg { width: 20px; height: 20px; }
                }
                .home-tile__label {
                    flex: 1 1 auto;
                    min-width: 0;
                    font-size: 13px;
                    font-weight: 500;
                    letter-spacing: -0.02em;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                @media (min-width: 640px) {
                    .home-tile__label { font-size: 15px; letter-spacing: -0.015em; }
                }
                .home-tile__chevron {
                    flex: none;
                    width: 14px;
                    height: 14px;
                    color: #c7c7cc;
                    transition: transform 0.25s ease, color 0.25s ease;
                }
                @media (min-width: 640px) {
                    .home-tile__chevron { width: 16px; height: 16px; }
                }
                .home-tile:hover .home-tile__chevron {
                    color: #86868b;
                    transform: translateX(2px);
                }

                @media (prefers-reduced-motion: reduce) {
                    .home-hero__img,
                    .home-hero__veil,
                    .home-hero__sheen,
                    .home-hero__eyebrow,
                    .home-hero__title,
                    .home-hero__lede,
                    .home-hero__rule,
                    .home-explore__label,
                    .home-tile {
                        animation: none !important;
                    }
                }
            `}</style>

            <Footer />
        </div>
    );
}

export default Home;