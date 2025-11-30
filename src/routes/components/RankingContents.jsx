import React from "react";

const RankingContents = ({ ranking, index }) => {
    return(
        <div className="card w-full bg-base-100 shadow-sm relative overflow-hidden">
            <div className="card-body pb-20">
                {/* 順位を豪華に表示：左に大きなメダル風バッジ、右に合計点 */}
                <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <div className="w-16 md:w-20 aspect-square flex-none rounded-full bg-gradient-to-tr from-indigo-500 via-purple-600 to-pink-500 text-white flex items-center justify-center shadow-xl ring-4 ring-white">
                            <span className="text-lg md:text-2xl font-extrabold leading-none text-center">#{index}</span>
                        </div>
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold">{ranking.name}</h2>
                        </div>
                    </div>
                </div>
                {/* 評価項目：左=項目名、中央=progress（中央寄せ）、右=点数（右寄せ） */}
                <ul className="mt-6 flex flex-col gap-3 text-xs md:text-sm">
                    {[
                        { key: "spa", label: "温泉", max: 20 },
                        { key: "sauna", label: "サウナ", max: 15 },
                        { key: "bedrock", label: "岩盤浴", max: 15 },
                        { key: "rest", label: "休憩所・館内", max: 15 },
                        { key: "cost", label: "コスト", max: 15 },
                        { key: "bonus", label: "能美ボーナス", max: 20 },
                    ].map((item) => (
                        <li key={item.key}>
                            <div className="flex items-center gap-3">
                                {/* 項目名は改行させない（必要なら省略表示） */}
                                <div className="flex-shrink-0 min-w-[72px] md:min-w-[96px] text-left whitespace-nowrap overflow-hidden text-ellipsis">
                                    {item.label}
                                </div>

                                {/* プログレスは中央に見えるよう flex-1 を使う（最大幅を設定して極端な伸びを抑制） */}
                                <div className="flex-1 flex justify-center">
                                    <progress
                                        className="progress progress-accent w-full max-w-[320px] md:max-w-[420px]"
                                        value={ranking[item.key]}
                                        max={item.max}
                                    ></progress>
                                </div>

                                {/* 点数は固定幅にして幅を取りすぎないようにする */}
                                <div className="w-10 text-right font-bold whitespace-nowrap">
                                    {ranking[item.key]} / {item.max}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                {/* Total: 一行で表示（折り返さない） */}
                <div className="absolute bottom-4 right-4 z-20 whitespace-nowrap">
                    <span className="inline-block text-xxs md:text-xs tracking-wider text-gray-500 mr-2 align-middle">Total</span>
                    <span className="inline-flex items-baseline gap-1 align-middle">
                        <span className="text-2xl md:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent leading-none">
                            {ranking.total}
                        </span>
                        <span className="text-xl md:text-2xl lg:text-3xl font-extrabold bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent leading-none">
                            pt
                        </span>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default RankingContents;