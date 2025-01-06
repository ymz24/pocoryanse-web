import React from "react";
import "../App.css";

import TopHeader from "./TopHeader";

const Movies = () => {
    return (
        <div>
            <TopHeader />
            <div className="grid grid-cols-1 sm:grid-cols-3">
                <div className="card bg-base-100 w-full shadow-xl animate-text-focus-in">
                    <figure>
                        {/* <img className="h-full w-full" src="https://i9.ytimg.com/vi/4nztVfJqDU8/maxresdefault.jpg?v=66e02220&sqp=CMD2xroG&rs=AOn4CLDZHpELUZYDWYwk_71F89_4TEE7gg" /> */}
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Pocoryanse '24 Summer Trip in Kagoshima</h2>
                        <p>2024年夏</p><br />
                        <p>新たにPocoryanseと名乗る5人は綿密に計画を立て、鹿児島へ1泊2日の旅行へ向かう...</p>
                        <div className="card-actions justify-end">
                        <a href="https://youtu.be/4nztVfJqDU8" className="btn btn-primary">Watch on YouTube</a>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-full shadow-xl animate-text-focus-in">
                    <figure>
                        {/* <img className="h-full w-full" src="https://i9.ytimg.com/vi_webp/hcOCKpNWEbY/maxresdefault.webp?v=6686881a&sqp=CLzvxroG&rs=AOn4CLCGtWYc_P4_hzziEi0BQlgHATgUqg" /> */}
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">第一回社会人同窓会人狼【VLogもあるヨ！】</h2>
                        <p>2024年GW</p><br />
                        <p>同窓会メンバーで糸島へ。夜は定番の人狼ゲームを楽しみます。</p>
                        <div className="card-actions justify-end">
                        <a href="https://youtu.be/hcOCKpNWEbY" className="btn btn-primary">Watch on YouTube</a>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-full shadow-xl animate-text-focus-in">
                    <figure>
                        {/* <img className="h-full w-full" src="https://i9.ytimg.com/vi/XSpyuz0Haf0/maxresdefault.jpg?v=65ed0434&sqp=COjxxroG&rs=AOn4CLACxQVAMNShsRUGCxSPlwBA_zZSgg" /> */}
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">KINNIKU Kyoto-Shiga Trip 2024</h2>
                        <p>2024年春</p><br />
                        <p>このメンバーでは2回目の京都へ。今回は滋賀も訪れるため"新鮮"な旅となるか...</p>
                        <div className="card-actions justify-end">
                        <a href="https://youtu.be/XSpyuz0Haf0" className="btn btn-primary">Watch on YouTube</a>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-full shadow-xl animate-text-focus-in">
                    <figure>
                        {/* <img className="h-full w-full" src="https://i9.ytimg.com/vi_webp/0YLeWvNrvGo/mqdefault.webp?v=65a92b67&sqp=CJT0xroG&rs=AOn4CLCxNrBaAx9792RkyZ_uVl0gz-4BGg" /> */}
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">2023-2024 KINNIKU Return to Fukuoka</h2>
                        <p>2024年年始</p><br />
                        <p>毎年恒例年末年始集会。地元福岡での集会だし、全員集合できるよね。</p>
                        <div className="card-actions justify-end">
                        <a href="https://youtu.be/0YLeWvNrvGo" className="btn btn-primary">Watch on YouTube</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Movies;