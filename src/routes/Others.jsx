import React from "react";
import "../App.css";

import TopHeader from "./TopHeader";
import Footer from "./Footer";
import ScrollAnimation from "./components/ScrollAnimation";

const Others = () => {
    const videos = [
        { year: "'25", url: "https://youtu.be/yT5p0As0rUg" },
        { year: "'24", url: "https://youtu.be/u2Zb3pGkRPg" },
        { year: "'22-'23", url: "https://youtu.be/3f3Qf3bk_yE" },
    ];

    return (
        <div className="bg-[#f5f5f7] min-h-screen">
            <TopHeader />
            <main className="pt-16 pb-24">
                <div className="max-w-5xl mx-auto px-5 md:px-10">
                    {/* タイトル */}
                    <header className="mb-12 md:mb-16">
                        <p
                            className="text-[11px] uppercase mb-3"
                            style={{ letterSpacing: "0.22em", color: "#86868b", fontWeight: 500 }}
                        >
                            Archive
                        </p>
                        <h1
                            className="text-4xl md:text-6xl"
                            style={{
                                fontWeight: 600,
                                letterSpacing: "-0.035em",
                                color: "#1d1d1f"
                            }}
                        >
                            Others
                        </h1>
                        <p
                            className="mt-3 text-base md:text-lg"
                            style={{ color: "#6e6e73", fontWeight: 300, letterSpacing: "-0.005em" }}
                        >
                            Opening &amp; Ending Collection
                        </p>
                    </header>

                    {/* 上部ヘアライン */}
                    <div className="h-px bg-black/[0.08]" />

                    {/* 年ごとのリスト */}
                    <ul className="divide-y divide-black/[0.08]">
                        {videos.map((video, idx) => (
                            <ScrollAnimation
                                key={video.year}
                                animation="fade-in-bottom"
                                elem={
                                    <li>
                                        <a
                                            href={video.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="others-row"
                                            aria-label={`Watch ${video.year} on YouTube`}
                                        >
                                            {/* 番号 */}
                                            <span className="others-row__num">
                                                {String(idx + 1).padStart(2, "0")}
                                            </span>

                                            {/* 年 (大きいタイポ) */}
                                            <span className="others-row__year">
                                                {video.year}
                                            </span>

                                            {/* 説明 */}
                                            <span className="others-row__meta">
                                                <span className="others-row__label">YouTube</span>
                                                <span className="others-row__sub">Opening &amp; Ending</span>
                                            </span>

                                            {/* 矢印 */}
                                            <span className="others-row__arrow" aria-hidden="true">
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M7 17L17 7M9 7h8v8" />
                                                </svg>
                                            </span>
                                        </a>
                                    </li>
                                }
                            />
                        ))}
                    </ul>
                </div>
            </main>

            <style>{`
                .others-row {
                    display: grid;
                    grid-template-columns: 44px 1fr auto auto;
                    align-items: center;
                    gap: 16px;
                    padding: 28px 0;
                    color: #1d1d1f;
                    text-decoration: none;
                    transition: padding 0.3s cubic-bezier(.2,.8,.2,1);
                }
                .others-row:hover {
                    padding-left: 8px;
                    padding-right: 8px;
                }
                .others-row__num {
                    font-size: 11px;
                    letter-spacing: 0.18em;
                    color: #86868b;
                    font-weight: 500;
                    font-feature-settings: "tnum" on;
                }
                .others-row__year {
                    font-size: clamp(40px, 8vw, 88px);
                    font-weight: 600;
                    letter-spacing: -0.045em;
                    line-height: 1;
                    color: #1d1d1f;
                    transition: color 0.3s ease;
                }
                .others-row:hover .others-row__year {
                    color: #0a84ff;
                }
                .others-row__meta {
                    display: none;
                    flex-direction: column;
                    align-items: flex-end;
                    gap: 2px;
                    text-align: right;
                }
                @media (min-width: 640px) {
                    .others-row__meta { display: flex; }
                }
                .others-row__label {
                    font-size: 11px;
                    letter-spacing: 0.18em;
                    text-transform: uppercase;
                    color: #86868b;
                    font-weight: 500;
                }
                .others-row__sub {
                    font-size: 13px;
                    color: #424245;
                    font-weight: 400;
                }
                .others-row__arrow {
                    width: 36px;
                    height: 36px;
                    border-radius: 9999px;
                    background: rgba(0,0,0,0.03);
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    color: #86868b;
                    transition: background 0.25s ease, color 0.25s ease, transform 0.3s cubic-bezier(.2,.8,.2,1);
                }
                .others-row__arrow svg {
                    width: 14px;
                    height: 14px;
                }
                .others-row:hover .others-row__arrow {
                    background: #1d1d1f;
                    color: #ffffff;
                    transform: rotate(0deg) scale(1.05);
                }
            `}</style>

            <Footer />
        </div>
    );
};

export default Others;
