import React from "react";

/**
 * ミニマルローディングインジケーター
 * 細いヘアラインを上を通って一周する、独自のミニマルなスピナー
 *
 * Props:
 *   size?: number     -- 直径 (px)。デフォルト 28
 *   color?: string    -- 線の色。デフォルト "#1d1d1f"
 *   label?: string    -- 下に表示する文字列（省略可）
 *   fullScreen?: bool -- 半透明ガラスのフルスクリーンオーバーレイにする
 */
const Spinner = ({ size = 28, color = "#1d1d1f", label, fullScreen = false }) => {
    const stroke = Math.max(1, Math.round(size * 0.06));
    const r = (size - stroke) / 2;
    const c = 2 * Math.PI * r;

    const spinner = (
        <div
            className="mini-spinner"
            style={{ width: size, height: size }}
            role="status"
            aria-label={label || "Loading"}
        >
            <svg
                width={size}
                height={size}
                viewBox={`0 0 ${size} ${size}`}
                className="mini-spinner__svg"
            >
                {/* ベースの薄いリング */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={r}
                    fill="none"
                    stroke={color}
                    strokeOpacity="0.12"
                    strokeWidth={stroke}
                />
                {/* 動く弧 */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={r}
                    fill="none"
                    stroke={color}
                    strokeWidth={stroke}
                    strokeLinecap="round"
                    strokeDasharray={`${c * 0.18} ${c}`}
                    className="mini-spinner__arc"
                />
                {/* 中央の小さなドット (アクセント) */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={Math.max(2.5, size * 0.16)}
                    fill={color}
                    className="mini-spinner__dot"
                />
            </svg>
            <style>{`
                .mini-spinner {
                    position: relative;
                    display: inline-block;
                }
                .mini-spinner__svg {
                    display: block;
                }
                .mini-spinner__arc {
                    transform-origin: 50% 50%;
                    animation: mini-spinner-rotate 1.1s cubic-bezier(.65,.05,.36,1) infinite;
                }
                .mini-spinner__dot {
                    transform-origin: 50% 50%;
                    animation: mini-spinner-pulse 1.6s ease-in-out infinite;
                }
                @keyframes mini-spinner-rotate {
                    from { transform: rotate(0deg); }
                    to   { transform: rotate(360deg); }
                }
                @keyframes mini-spinner-pulse {
                    0%, 100% { transform: scale(0.6); opacity: 0.35; }
                    50%      { transform: scale(1);   opacity: 1; }
                }
            `}</style>
        </div>
    );

    if (!fullScreen) {
        return label ? (
            <div className="inline-flex flex-col items-center gap-2">
                {spinner}
                <span
                    style={{
                        color: "#86868b",
                        fontSize: 12,
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        fontWeight: 500
                    }}
                >
                    {label}
                </span>
            </div>
        ) : spinner;
    }

    return (
        <div
            className="fixed inset-0 z-[90] flex flex-col items-center justify-center"
            style={{
                background: "rgba(245,245,247,0.65)",
                backdropFilter: "blur(20px) saturate(180%)",
                WebkitBackdropFilter: "blur(20px) saturate(180%)"
            }}
            role="status"
            aria-live="polite"
        >
            {spinner}
            {label && (
                <p
                    className="mt-4 text-[11px]"
                    style={{
                        color: "#1d1d1f",
                        opacity: 0.55,
                        letterSpacing: "0.22em",
                        textTransform: "uppercase",
                        fontWeight: 500
                    }}
                >
                    {label}
                </p>
            )}
        </div>
    );
};

export default Spinner;
