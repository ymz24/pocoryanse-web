import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import TopHeader from "../TopHeader";
import Footer from "../Footer";
import ScrollAnimation from "./ScrollAnimation";
import RankingCard from "./RankingCard";
import Spinner from "./Spinner";
import { CONFIG } from "../../const";

/**
 * 共通の一覧ページ。設定オブジェクトを config として受け取り、
 * 一覧 + Liquid Glass の登録 FAB を表示する。
 *
 * @param {object} config - rankings.jsx の HOTSPRINGS_CONFIG / RAMEN_CONFIG など
 */
const RankingListPage = ({ config }) => {
    const [rankingData, setRankingData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // hotsprings は後方互換のため type 指定なしでも取得できるが、
        // ここでは明示して常に type を付ける
        const url = `${CONFIG.API_URL}?type=${encodeURIComponent(config.type)}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const sortedData = (Array.isArray(data) ? data : [])
                    .slice()
                    .sort((a, b) => (a.total > b.total ? -1 : 1));
                setRankingData(sortedData);
                setLoading(false);
            })
            .catch(error => {
                console.error(`Error fetching ${config.type} ranking data: `, error);
                setLoading(false);
            });
    }, [config.type]);

    if (loading) {
        return <Spinner fullScreen size={36} label="Loading" />;
    }

    const accentColor = config.accent.primary;

    return (
        <div className="bg-[#f5f5f7] min-h-screen">
            <TopHeader />

            {/* 浮かせた右下の追加ボタン (Liquid Glass) */}
            <Link
                to={config.registerPath}
                aria-label={config.fab.ariaLabel}
                className="liquid-glass-btn fixed bottom-5 right-5 z-50"
                style={{ "--accent": accentColor }}
            >
                <span className="liquid-glass-btn__tint" aria-hidden="true" />
                <span className="liquid-glass-btn__highlight" aria-hidden="true" />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="liquid-glass-btn__icon"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M12 4v16m8-8H4" />
                </svg>
                <span className="liquid-glass-btn__label">{config.fab.label}</span>
            </Link>

            <style>{`
                .liquid-glass-btn {
                    position: fixed;
                    height: 52px;
                    padding: 0 22px 0 18px;
                    gap: 8px;
                    border-radius: 9999px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                    isolation: isolate;
                    text-decoration: none;
                    background: rgba(255, 255, 255, 0.18);
                    -webkit-backdrop-filter: blur(28px) saturate(220%);
                    backdrop-filter: blur(28px) saturate(220%);
                    border: 1px solid rgba(255, 255, 255, 0.45);
                    box-shadow:
                        0 12px 32px rgba(0, 0, 0, 0.10),
                        0 2px 6px rgba(0, 0, 0, 0.05),
                        inset 0 1px 0 rgba(255, 255, 255, 0.55),
                        inset 0 -1px 0 rgba(255, 255, 255, 0.18);
                    transition:
                        transform 0.25s cubic-bezier(.2,.8,.2,1),
                        box-shadow 0.25s ease,
                        background 0.25s ease;
                }
                .liquid-glass-btn:hover {
                    transform: translateY(-1px) scale(1.04);
                    background: rgba(255, 255, 255, 0.28);
                    box-shadow:
                        0 16px 40px rgba(0, 0, 0, 0.14),
                        0 3px 8px rgba(0, 0, 0, 0.06),
                        inset 0 1px 0 rgba(255, 255, 255, 0.65),
                        inset 0 -1px 0 rgba(255, 255, 255, 0.22);
                }
                .liquid-glass-btn:active {
                    transform: translateY(0) scale(0.97);
                }
                .liquid-glass-btn__tint {
                    position: absolute;
                    inset: 0;
                    border-radius: inherit;
                    pointer-events: none;
                    z-index: 0;
                    background:
                        radial-gradient(140% 110% at 25% 0%, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0) 55%),
                        radial-gradient(120% 100% at 100% 100%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 60%);
                    mix-blend-mode: screen;
                }
                .liquid-glass-btn__highlight {
                    display: block;
                    position: absolute;
                    top: 1px;
                    left: 8%;
                    right: 8%;
                    height: 38%;
                    border-radius: 9999px;
                    pointer-events: none;
                    z-index: 1;
                    background: linear-gradient(180deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0) 100%);
                    filter: blur(0.5px);
                }
                .liquid-glass-btn__icon {
                    position: relative;
                    z-index: 2;
                    width: 18px;
                    height: 18px;
                    color: var(--accent);
                }
                .liquid-glass-btn__label {
                    position: relative;
                    z-index: 2;
                    color: var(--accent);
                    font-size: 14px;
                    font-weight: 300;
                    letter-spacing: 0.04em;
                }
            `}</style>

            <div className="pt-20 md:pt-28 pb-24">
                <div className="max-w-6xl mx-auto px-5 md:px-8">
                    <header className="mb-10 md:mb-14">
                        <p
                            className="text-[11px] uppercase mb-3"
                            style={{ letterSpacing: "0.22em", color: "#86868b", fontWeight: 500 }}
                        >
                            {config.page?.eyebrow || "Ranking"}
                        </p>
                        <h1
                            className="text-4xl md:text-6xl"
                            style={{
                                fontWeight: 600,
                                letterSpacing: "-0.035em",
                                color: "#1d1d1f"
                            }}
                        >
                            {config.page?.title}
                        </h1>
                        {config.page?.description && (
                            <p
                                className="mt-3 text-sm md:text-base"
                                style={{ color: "#6e6e73", fontWeight: 300 }}
                            >
                                {config.page.description}
                            </p>
                        )}
                    </header>
                    <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-5">
                        {rankingData.map((ranking, index) => (
                            <ScrollAnimation
                                key={index}
                                elem={
                                    <RankingCard
                                        index={index + 1}
                                        ranking={ranking}
                                        items={config.items}
                                        accentGradient={config.accent.gradient}
                                    />
                                }
                                animation="fade-in-bottom"
                            />
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default RankingListPage;
