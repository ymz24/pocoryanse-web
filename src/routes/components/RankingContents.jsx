import React from "react";

const RankingContents = ({ ranking, index }) => {
    return(
        <div className="card w-96 bg-base-100 shadow-sm">
            <div className="card-body">
                <div className="flex justify-between items-center">
                    <span className="badge badge-xs badge-warning text-xl text-bold">#{index}</span>
                    <span className="text-xl font-bold">{ranking.total}pt</span>
                </div>
                <div className="flex justify-between">
                <h2 className="text-3xl font-bold">{ranking.name}</h2>
            </div>
                <ul className="mt-6 flex flex-col gap-2 text-xs">
                    <li>
                        <div className="flex justify-between items-center">
                            <span className="whitespace-nowrap">温泉・館内</span>
                            <progress className="progress progress-accent w-40" value={ranking.spa} max="20"></progress>
                            <span className="text-xs font-bold whitespace-nowrap">{ranking.spa} / 20</span>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center justify-between">
                            <span className="whitespace-nowrap">サウナ</span>
                            <progress className="progress progress-accent w-40 justify-center" value={ranking.sauna} max="15"></progress>
                            <span className="text-xs font-bold whitespace-nowrap">{ranking.sauna} / 15</span>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center justify-between">
                            <span className="whitespace-nowrap">岩盤浴</span>
                            <progress className="progress progress-accent w-40" value={ranking.bedrock} max="15"></progress>
                            <span className="text-xs font-bold whitespace-nowrap">{ranking.bedrock} / 15</span>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center justify-between">
                            <span className="whitespace-nowrap">休憩所</span>
                            <progress className="progress progress-accent w-40" value={ranking.rest} max="15"></progress>
                            <span className="text-xs font-bold whitespace-nowrap">{ranking.rest} / 15</span>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center justify-between">
                            <span className="whitespace-nowrap">コスト</span>
                            <progress className="progress progress-accent w-40" value={ranking.cost} max="10"></progress>
                            <span className="text-xs font-bold whitespace-nowrap">{ranking.cost} / 10</span>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center justify-between">
                            <span className="whitespace-nowrap">お食事処</span>
                            <progress className="progress progress-accent w-40" value={ranking.dining} max="10"></progress>
                            <span className="text-xs font-bold whitespace-nowrap">{ranking.dining} / 10</span>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center justify-between">
                            <span className="whitespace-nowrap">能美ボーナス</span>
                            <progress className="progress progress-accent w-40" value={ranking.bonus} max="15"></progress>
                            <span className="text-xs font-bold whitespace-nowrap">{ranking.bonus} / 15</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default RankingContents;