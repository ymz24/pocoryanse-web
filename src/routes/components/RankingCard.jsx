import React from "react";

/**
 * ランキング1件分のカード（汎用）
 * @param {object} ranking - シートから取得した1行分のオブジェクト (name, total, ...各キー)
 * @param {number} index - 1始まりの順位
 * @param {Array}  items - 評価項目 [{ key, label, max }]
 * @param {string} accentGradient - 進捗バーのグラデ CSS
 */
const RankingCard = ({ ranking, index, items, accentGradient }) => {
    // ランクに応じた配色（金/銀/銅/それ以外はモノトーン）
    const rankPalette = (i) => {
        if (i === 1) return "linear-gradient(135deg, #f6d365 0%, #fda085 100%)";
        if (i === 2) return "linear-gradient(135deg, #d7d2cc 0%, #abb2b9 100%)";
        if (i === 3) return "linear-gradient(135deg, #d99063 0%, #b06a3a 100%)";
        return "linear-gradient(135deg, #2c2c2e 0%, #1c1c1e 100%)";
    };

    return (
        <div
            className="relative w-full overflow-hidden rounded-[22px] md:rounded-[28px] bg-white"
            style={{
                boxShadow: "0 1px 2px rgba(0,0,0,0.04), 0 8px 28px rgba(0,0,0,0.06)"
            }}
        >
            <div className="px-4 sm:px-6 md:px-8 pt-5 md:pt-8 pb-16 sm:pb-20 min-w-0">
                {/* ヘッダー: ランク + 名前 */}
                <div className="flex items-center gap-3 sm:gap-5 min-w-0">
                    <div
                        className="w-11 h-11 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-white flex-none"
                        style={{
                            background: rankPalette(index),
                            boxShadow: "inset 0 1px 1px rgba(255,255,255,0.4), 0 6px 18px rgba(0,0,0,0.18)"
                        }}
                    >
                        <span
                            className="text-base sm:text-lg md:text-xl leading-none"
                            style={{ fontWeight: 600, letterSpacing: "-0.02em" }}
                        >
                            {index}
                        </span>
                    </div>
                    <div className="min-w-0 flex-1">
                        <h2
                            className="text-lg sm:text-2xl md:text-[28px] truncate"
                            style={{ fontWeight: 600, letterSpacing: "-0.025em", color: "#1d1d1f" }}
                        >
                            {ranking.name}
                        </h2>
                    </div>
                </div>

                {/* ヘアライン */}
                <div className="mt-4 mb-3 sm:mt-6 sm:mb-5 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />

                {/* 評価項目 */}
                <ul className="flex flex-col gap-2.5 sm:gap-4 text-[11px] sm:text-[13px] md:text-sm min-w-0">
                    {items.map((item) => {
                        const ratio = Math.max(0, Math.min(1, (ranking[item.key] ?? 0) / item.max));
                        return (
                            <li key={item.key} className="min-w-0">
                                <div className="flex items-center gap-2 sm:gap-4 min-w-0 w-full">
                                    <div
                                        className="flex-none w-[88px] sm:w-[100px] text-left whitespace-nowrap"
                                        style={{ color: "#6e6e73", fontWeight: 400 }}
                                    >
                                        {item.label}
                                    </div>
                                    <div className="flex-1 min-w-0 h-[6px] rounded-full bg-black/[0.06] overflow-hidden">
                                        <div
                                            className="h-full rounded-full transition-all duration-700"
                                            style={{
                                                width: `${ratio * 100}%`,
                                                background: accentGradient
                                            }}
                                        />
                                    </div>
                                    <div
                                        className="flex-none w-[44px] sm:w-14 text-right whitespace-nowrap tabular-nums"
                                        style={{ color: "#1d1d1f", fontWeight: 500 }}
                                    >
                                        {ranking[item.key]}
                                        <span className="text-gray-400 font-light">/{item.max}</span>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>

            {/* Total */}
            <div className="absolute bottom-3 right-3 sm:bottom-5 sm:right-6 z-20 flex items-baseline gap-1.5 sm:gap-2">
                <span
                    className="text-[9px] sm:text-[10px] uppercase"
                    style={{ letterSpacing: "0.18em", color: "#86868b", fontWeight: 500 }}
                >
                    Total
                </span>
                <span
                    className="tabular-nums leading-none"
                    style={{
                        fontSize: "1.4rem",
                        fontWeight: 600,
                        letterSpacing: "-0.03em",
                        color: "#1d1d1f"
                    }}
                >
                    {ranking.total}
                </span>
                <span
                    className="leading-none"
                    style={{ fontSize: "0.7rem", color: "#86868b", fontWeight: 400 }}
                >
                    pt
                </span>
            </div>
        </div>
    );
};

export default RankingCard;
