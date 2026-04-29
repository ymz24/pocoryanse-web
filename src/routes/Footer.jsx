import React from "react";
import { CONFIG } from "../const";
import "../App.css";
import { useState } from "react";

const Footer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <footer
            className="w-full px-6 md:px-10 pt-12 pb-10 mt-10"
            style={{
                background: "#f5f5f7",
                color: "#86868b",
                borderTop: "1px solid rgba(0,0,0,0.06)",
                fontSize: "12px",
                letterSpacing: "-0.005em"
            }}
        >
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-start md:justify-between gap-8">
                {/* 左: ナビ */}
                <nav className="flex flex-wrap gap-x-6 gap-y-2">
                    {["About us", "Contact", "Jobs", "Press kit"].map((label) => (
                        <a
                            key={label}
                            className="hover:text-[#1d1d1f] transition-colors cursor-pointer"
                        >
                            {label}
                        </a>
                    ))}
                </nav>

                {/* 右: ソーシャルアイコン */}
                <div className="flex items-center gap-2">
                    <button
                        type="button"
                        aria-label="Open links modal"
                        onClick={() => setIsModalOpen(true)}
                        className="w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:bg-black/5"
                        style={{ color: "#86868b" }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                        </svg>
                    </button>

                    <a
                        href="https://www.youtube.com/playlist?list=PL1P9P6wFhN3QRKskHCObaQ3dZMetZNPkT"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="YouTube playlist"
                        className="w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:bg-black/5"
                        style={{ color: "#86868b" }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                        </svg>
                    </a>
                </div>
            </div>

            {/* 区切り線 */}
            <div className="max-w-5xl mx-auto mt-8 pt-6" style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}>
                <p className="text-[11px]" style={{ color: "#86868b" }}>
                    {CONFIG.VERSION}
                </p>
                <p className="text-[11px] mt-1" style={{ color: "#86868b" }}>
                    Copyright © {new Date().getFullYear()} Pocoryanse Co., Ltd. All rights reserved.
                </p>
            </div>

            {/* iOS 風シートモーダル */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 z-[80] flex items-end sm:items-center justify-center"
                    role="dialog"
                    aria-modal="true"
                    onClick={() => setIsModalOpen(false)}
                    style={{
                        background: "rgba(0,0,0,0.45)",
                        backdropFilter: "blur(8px)",
                        WebkitBackdropFilter: "blur(8px)"
                    }}
                >
                    <div
                        className="w-full sm:max-w-md mx-3 mb-3 sm:mb-0 rounded-[22px] overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            background: "rgba(255,255,255,0.85)",
                            backdropFilter: "blur(30px) saturate(180%)",
                            WebkitBackdropFilter: "blur(30px) saturate(180%)",
                            boxShadow: "0 20px 60px rgba(0,0,0,0.25)"
                        }}
                    >
                        <div className="px-5 pt-4 pb-3 flex items-center justify-between">
                            <h3
                                className="text-[15px]"
                                style={{ fontWeight: 600, color: "#1d1d1f", letterSpacing: "-0.01em" }}
                            >
                                Links
                            </h3>
                            <button
                                type="button"
                                aria-label="Close"
                                onClick={() => setIsModalOpen(false)}
                                className="w-7 h-7 rounded-full flex items-center justify-center"
                                style={{ background: "rgba(0,0,0,0.06)", color: "#1d1d1f" }}
                            >
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                                </svg>
                            </button>
                        </div>
                        <nav className="flex flex-col">
                            {[
                                "yan_kaz0110",
                                "yananaya01",
                                "0oclock.sh",
                                "cgvpsh",
                                "ay_mu_3",
                                "nohmin_min_914",
                                "mitaniiiss"
                            ].map((handle, i, arr) => (
                                <a
                                    key={handle}
                                    href={`https://www.instagram.com/${handle}/`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-5 py-3.5 flex items-center justify-between transition-colors"
                                    style={{
                                        color: "#1d1d1f",
                                        fontSize: "15px",
                                        fontWeight: 400,
                                        borderTop: i === 0 ? "1px solid rgba(0,0,0,0.08)" : "1px solid rgba(0,0,0,0.05)"
                                    }}
                                >
                                    <span>@{handle}</span>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: "#c7c7cc" }}>
                                        <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>
            )}
        </footer>
    );
}

export default Footer;