import React from "react";
import "../App.css";

import TopHeader from "./TopHeader";
import Footer from "./Footer";

const items = [
    { name: "ベビフェ" },
    { name: "ごりごの部屋" },
    { name: "apmtn" },
    { name: "ウオウオウオ" },
    { name: "grulior" },
    { name: "筋肉は裏切らない" },
    { name: "Pocoryanse", current: true },
];

const History = () => {
    return (
        <div className="bg-[#f5f5f7] min-h-screen">
            <TopHeader />

            <main className="pt-20 md:pt-28 pb-24">
                <div className="max-w-3xl mx-auto px-5 md:px-8">
                    {/* タイトル */}
                    <header className="mb-12 md:mb-20">
                        <p
                            className="text-[11px] uppercase mb-3"
                            style={{ letterSpacing: "0.22em", color: "#86868b", fontWeight: 500 }}
                        >
                            Chronology
                        </p>
                        <h1
                            className="text-4xl md:text-6xl"
                            style={{
                                fontWeight: 600,
                                letterSpacing: "-0.035em",
                                color: "#1d1d1f"
                            }}
                        >
                            History
                        </h1>
                        <p
                            className="mt-3 text-sm md:text-base"
                            style={{ color: "#6e6e73", fontWeight: 300 }}
                        >
                            これまでの歩みと、今に至るまで。
                        </p>
                    </header>

                    {/* タイムライン */}
                    <ol className="history-timeline">
                        {items.map((it, i) => (
                            <li
                                key={it.name}
                                className={`history-item ${it.current ? "is-current" : ""}`}
                                style={{ animationDelay: `${0.1 + i * 0.1}s` }}
                            >
                                <span className="history-item__rail" aria-hidden="true" />
                                <span className="history-item__dot" aria-hidden="true">
                                    {it.current && <span className="history-item__pulse" />}
                                </span>
                                <div className="history-item__card">
                                    <p className="history-item__index">
                                        <span>{String(i + 1).padStart(2, "0")}</span>
                                        {it.current && <span className="history-item__now">Now</span>}
                                    </p>
                                    <h2 className="history-item__name">{it.name}</h2>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </main>

            <style>{`
                .history-timeline {
                    position: relative;
                    list-style: none;
                    margin: 0;
                    padding: 0;
                }

                .history-item {
                    position: relative;
                    display: grid;
                    grid-template-columns: 56px 1fr;
                    align-items: center;
                    min-height: 92px;
                    padding-left: 8px;
                    opacity: 0;
                    animation: history-rise 0.8s cubic-bezier(.2,.8,.2,1) forwards;
                }
                @media (min-width: 768px) {
                    .history-item {
                        grid-template-columns: 80px 1fr;
                        min-height: 108px;
                    }
                }

                .history-item__rail {
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 28px;
                    width: 1px;
                    background: linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.12) 50%, rgba(0,0,0,0.05) 100%);
                    z-index: 0;
                }
                @media (min-width: 768px) {
                    .history-item__rail { left: 40px; }
                }
                .history-item:first-child .history-item__rail { top: 50%; }
                .history-item:last-child .history-item__rail { bottom: 50%; }

                .history-item__dot {
                    position: relative;
                    z-index: 1;
                    justify-self: center;
                    width: 12px;
                    height: 12px;
                    border-radius: 9999px;
                    background: #ffffff;
                    border: 1.5px solid rgba(0,0,0,0.18);
                    box-shadow: 0 2px 6px rgba(0,0,0,0.10);
                    transition: transform 0.3s cubic-bezier(.2,.8,.2,1);
                }
                .history-item.is-current .history-item__dot {
                    width: 14px;
                    height: 14px;
                    background: linear-gradient(135deg, #0a84ff 0%, #5e5ce6 100%);
                    border-color: #ffffff;
                    box-shadow:
                        0 0 0 3px rgba(10,132,255,0.18),
                        0 4px 12px rgba(10,132,255,0.35);
                }
                .history-item__pulse {
                    position: absolute;
                    inset: -6px;
                    border-radius: 9999px;
                    background: rgba(10,132,255,0.35);
                    animation: history-pulse 2s ease-out infinite;
                    z-index: -1;
                }

                .history-item__card {
                    padding: 18px 22px;
                    border-radius: 18px;
                    background: #ffffff;
                    box-shadow: 0 1px 2px rgba(0,0,0,0.04), 0 6px 20px rgba(0,0,0,0.05);
                    transition: transform 0.35s cubic-bezier(.2,.8,.2,1), box-shadow 0.35s ease;
                }
                @media (min-width: 768px) {
                    .history-item__card {
                        padding: 22px 28px;
                        border-radius: 22px;
                    }
                }
                .history-item__card:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 2px 4px rgba(0,0,0,0.05), 0 12px 28px rgba(0,0,0,0.08);
                }

                .history-item__index {
                    font-size: 10px;
                    letter-spacing: 0.22em;
                    text-transform: uppercase;
                    color: #86868b;
                    font-weight: 500;
                    font-feature-settings: "tnum" on;
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                }
                .history-item__now {
                    display: inline-block;
                    padding: 2px 8px;
                    border-radius: 9999px;
                    background: linear-gradient(135deg, #0a84ff 0%, #5e5ce6 100%);
                    color: #ffffff;
                    font-size: 9px;
                    letter-spacing: 0.16em;
                    font-weight: 600;
                }
                .history-item__name {
                    margin-top: 6px;
                    font-size: 18px;
                    font-weight: 600;
                    letter-spacing: -0.02em;
                    color: #1d1d1f;
                    line-height: 1.3;
                }
                @media (min-width: 768px) {
                    .history-item__name {
                        font-size: 22px;
                        letter-spacing: -0.025em;
                    }
                }
                .history-item.is-current .history-item__name {
                    background: linear-gradient(135deg, #0a84ff 0%, #5e5ce6 100%);
                    -webkit-background-clip: text;
                    background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                @keyframes history-rise {
                    from { transform: translateY(16px); opacity: 0; }
                    to   { transform: translateY(0); opacity: 1; }
                }
                @keyframes history-pulse {
                    0%   { transform: scale(0.7); opacity: 0.7; }
                    70%  { transform: scale(1.6); opacity: 0; }
                    100% { transform: scale(1.6); opacity: 0; }
                }

                @media (prefers-reduced-motion: reduce) {
                    .history-item { animation: none; opacity: 1; }
                    .history-item__pulse { animation: none; display: none; }
                }
            `}</style>

            <Footer />
        </div>
    );
};

export default History;
