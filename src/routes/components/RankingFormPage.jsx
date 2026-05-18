import React, { useMemo, useState } from "react";

import TopHeader from "../TopHeader";
import Footer from "../Footer";
import Spinner from "./Spinner";
import { CONFIG } from "../../const";

/**
 * 共通の登録フォームページ。設定オブジェクトを config として受け取る。
 *
 * @param {object} config - rankings.jsx の設定オブジェクト
 */
const RankingFormPage = ({ config }) => {
    // 初期 state を items から動的生成
    const initialState = useMemo(() => {
        const base = { name: "", total: 0 };
        config.items.forEach((it) => { base[it.key] = ""; });
        return base;
    }, [config]);

    const [formData, setFormData] = useState(initialState);
    const [loading, setLoading] = useState(false);

    // フォーム描画用フィールド一覧（name + items + total）
    const fields = useMemo(() => {
        return [
            { name: "name", label: config.register.nameField.label, type: "text", placeholder: config.register.nameField.placeholder },
            ...config.items.map((it) => ({
                name: it.key, label: it.label, type: "number", min: 0, max: it.max,
            })),
            { name: "total", label: "総合点数", type: "number", disabled: true },
        ];
    }, [config]);

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        const newVal = type === "number" ? Number(value) : value;

        setFormData((prevData) => {
            const updatedData = { ...prevData, [name]: newVal };
            const total = config.items.reduce(
                (sum, it) => sum + (Number(updatedData[it.key]) || 0),
                0
            );
            updatedData.total = total;
            return updatedData;
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // バリデーション
        const overItems = config.items.filter(
            (it) => Number(formData[it.key] || 0) > it.max
        );
        if (overItems.length > 0) {
            const msg = overItems
                .map((it) => `${it.label} は ${it.max} 点以下で入力してください`)
                .join("\n");
            alert(msg);
            return;
        }
        if (Number(formData.total || 0) > 100) {
            alert("合計点数は 100 点以下で登録してください");
            return;
        }
        if (!String(formData.name || "").trim()) {
            alert("名称を入力してください");
            return;
        }

        setLoading(true);
        try {
            const payload = fields.reduce((acc, f) => {
                const val = formData[f.name];
                if (typeof val !== "undefined") acc[f.name] = String(val);
                return acc;
            }, {});
            payload.type = config.type;

            const params = new URLSearchParams(payload).toString();
            const response = await fetch(CONFIG.API_URL, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: params,
            });
            const result = await response.json();
            alert(result.result === "success" ? "登録しました" : "登録に失敗しました");
            if (result.result === "success") {
                setFormData(initialState);
            }
        } catch (err) {
            alert("通信エラー");
        }
        setLoading(false);
    };

    if (loading) {
        return <Spinner fullScreen size={36} label="Submitting" />;
    }

    const { primary: accentColor, gradient: accentGradient, shadowRgba } = config.accent;

    // 入力エラー判定（送信ボタン無効化用）
    const hasError =
        config.items.some((it) => Number(formData[it.key] || 0) > it.max) ||
        Number(formData.total || 0) > 100;

    return (
        <div className="bg-[#f5f5f7] min-h-screen">
            <TopHeader />
            <main
                className="pt-16 pb-24"
                style={{
                    "--accent": accentColor,
                    "--accent-gradient": accentGradient,
                    "--accent-shadow": shadowRgba,
                }}
            >
                <div className="max-w-2xl mx-auto px-5 md:px-8">
                    <header className="mb-10 md:mb-14">
                        <p
                            className="text-[11px] uppercase mb-3"
                            style={{ letterSpacing: "0.22em", color: "#86868b", fontWeight: 500 }}
                        >
                            {config.register.eyebrow}
                        </p>
                        <h1
                            className="text-4xl md:text-5xl"
                            style={{
                                fontWeight: 600,
                                letterSpacing: "-0.035em",
                                color: "#1d1d1f",
                            }}
                        >
                            {config.register.title}
                        </h1>
                        <p
                            className="mt-3 text-sm md:text-base"
                            style={{ color: "#6e6e73", fontWeight: 300 }}
                        >
                            {config.register.description}
                        </p>
                    </header>

                    <form onSubmit={handleSubmit} className="rr-card">
                        {fields.map((field, idx) => {
                            const isText = field.type === "text";
                            const isLast = idx === fields.length - 1;
                            const value = Number(formData[field.name] || 0);
                            const isOver = !!field.max && value > field.max;
                            const isTotalOver = field.name === "total" && value > 100;
                            const ratio = field.max
                                ? Math.max(0, Math.min(1, value / field.max))
                                : 0;

                            return (
                                <div
                                    key={field.name}
                                    className={`rr-row ${isOver || isTotalOver ? "rr-row--error" : ""}`}
                                    style={{ borderBottom: isLast ? "none" : "1px solid rgba(0,0,0,0.06)" }}
                                >
                                    <label htmlFor={field.name} className="rr-row__label">
                                        <span className="rr-row__label-main">{field.label}</span>
                                        {field.max && (
                                            <span className="rr-row__label-max">/ {field.max} pt</span>
                                        )}
                                    </label>

                                    <div className="rr-row__field">
                                        {isText ? (
                                            <input
                                                type="text"
                                                name={field.name}
                                                id={field.name}
                                                placeholder={field.placeholder}
                                                value={formData[field.name]}
                                                onChange={handleChange}
                                                required
                                                className="rr-input rr-input--text"
                                            />
                                        ) : field.disabled ? (
                                            <div className="rr-total">
                                                <span className="rr-total__num">{formData[field.name]}</span>
                                                <span className="rr-total__unit">pt</span>
                                                {isTotalOver && (
                                                    <span className="rr-error-text">100 pt 以下で登録してください</span>
                                                )}
                                            </div>
                                        ) : (
                                            <div className="rr-stepper">
                                                <input
                                                    type="number"
                                                    name={field.name}
                                                    id={field.name}
                                                    min={field.min}
                                                    max={field.max}
                                                    placeholder="0"
                                                    value={formData[field.name]}
                                                    onChange={handleChange}
                                                    required
                                                    className={`rr-input rr-input--num ${isOver ? "rr-input--error" : ""}`}
                                                />
                                                <div className="rr-stepper__bar" aria-hidden="true">
                                                    <div
                                                        className="rr-stepper__bar-fill"
                                                        style={{ width: `${ratio * 100}%` }}
                                                    />
                                                </div>
                                                {isOver && (
                                                    <span className="rr-error-text">上限 {field.max}</span>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </form>

                    <button
                        type="submit"
                        onClick={handleSubmit}
                        disabled={hasError}
                        className={`rr-submit ${hasError ? "rr-submit--disabled" : ""}`}
                    >
                        <span>{config.register.submitLabel}</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M5 12h14M13 6l6 6-6 6" />
                        </svg>
                    </button>
                </div>
            </main>

            <style>{`
                .rr-card {
                    background: #ffffff;
                    border-radius: 22px;
                    overflow: hidden;
                    box-shadow: 0 1px 2px rgba(0,0,0,0.04), 0 8px 28px rgba(0,0,0,0.06);
                }
                @media (min-width: 768px) {
                    .rr-card { border-radius: 28px; }
                }
                .rr-row {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 12px;
                    padding: 18px 22px;
                }
                @media (min-width: 640px) {
                    .rr-row {
                        grid-template-columns: 180px 1fr;
                        align-items: center;
                        gap: 24px;
                        padding: 20px 28px;
                    }
                }
                .rr-row__label {
                    display: flex;
                    align-items: baseline;
                    gap: 8px;
                    color: #1d1d1f;
                    font-size: 14px;
                    font-weight: 500;
                    letter-spacing: -0.01em;
                }
                .rr-row__label-max {
                    color: #86868b;
                    font-size: 11px;
                    letter-spacing: 0.05em;
                    font-weight: 400;
                }
                .rr-row__field { width: 100%; }
                .rr-input {
                    width: 100%;
                    background: transparent;
                    border: none;
                    outline: none;
                    color: #1d1d1f;
                    font-size: 15px;
                    font-weight: 400;
                    letter-spacing: -0.01em;
                    padding: 8px 0;
                    border-bottom: 1px solid rgba(0,0,0,0.10);
                    transition: border-color 0.25s ease;
                    font-feature-settings: "tnum" on;
                }
                .rr-input:focus {
                    border-bottom-color: var(--accent);
                }
                .rr-input::placeholder {
                    color: #c7c7cc;
                }
                .rr-input--num {
                    width: 64px;
                    flex: none;
                    text-align: right;
                    font-variant-numeric: tabular-nums;
                }
                .rr-input--num::-webkit-outer-spin-button,
                .rr-input--num::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }
                .rr-input--num { -moz-appearance: textfield; }

                .rr-stepper {
                    display: flex;
                    align-items: center;
                    gap: 14px;
                }
                .rr-stepper__bar {
                    flex: 1;
                    height: 6px;
                    border-radius: 9999px;
                    background: rgba(0,0,0,0.06);
                    overflow: hidden;
                }
                .rr-stepper__bar-fill {
                    height: 100%;
                    border-radius: 9999px;
                    background: var(--accent-gradient);
                    transition: width 0.4s cubic-bezier(.2,.8,.2,1);
                }
                .rr-total {
                    display: flex;
                    align-items: baseline;
                    justify-content: flex-end;
                    gap: 4px;
                    font-feature-settings: "tnum" on;
                }
                .rr-total__num {
                    font-size: 32px;
                    font-weight: 600;
                    letter-spacing: -0.03em;
                    color: #1d1d1f;
                    line-height: 1;
                }
                .rr-total__unit {
                    font-size: 12px;
                    color: #86868b;
                    font-weight: 400;
                }
                .rr-submit {
                    margin-top: 24px;
                    width: 100%;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    padding: 16px 22px;
                    border-radius: 9999px;
                    background: #1d1d1f;
                    color: #ffffff;
                    font-size: 15px;
                    font-weight: 500;
                    letter-spacing: -0.01em;
                    border: none;
                    cursor: pointer;
                    box-shadow: 0 8px 24px rgba(0,0,0,0.18);
                    transition: transform 0.2s cubic-bezier(.2,.8,.2,1),
                                background 0.2s ease,
                                box-shadow 0.25s ease;
                }
                .rr-submit:hover {
                    transform: translateY(-1px);
                    background: var(--accent);
                    box-shadow: 0 12px 30px var(--accent-shadow);
                }
                .rr-submit:active { transform: translateY(0) scale(0.98); }
                .rr-submit--disabled,
                .rr-submit--disabled:hover {
                    background: #c7c7cc;
                    box-shadow: none;
                    cursor: not-allowed;
                    transform: none;
                }
                .rr-input--error,
                .rr-input--error:focus {
                    border-bottom-color: #ff3b30 !important;
                    color: #ff3b30;
                }
                .rr-row--error .rr-row__label-main {
                    color: #ff3b30;
                }
                .rr-error-text {
                    color: #ff3b30;
                    font-size: 11px;
                    font-weight: 500;
                    letter-spacing: 0.02em;
                    margin-left: 8px;
                    white-space: nowrap;
                }
            `}</style>

            <Footer />
        </div>
    );
};

export default RankingFormPage;
