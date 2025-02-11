import React from "react";
import "../App.css";

import TopHeader from "./TopHeader";
import Footer from "./Footer";
import MovieCards from "./components/MovieCards";

import kagoshima from "../images/kagoshima.png";
import gwJinro from "../images/24GW.png";
import kyotoShiga from "../images/kyoto-shiga.png";
import newYear24 from "../images/23-24.png";
import yamamoto from "../images/yamamoto.png";
import kamakura from "../images/kamakura.png";
import yobuko from "../images/yobuko.png";
import dosokaiKyoto from "../images/dosokaiKyoto.jpg";
import kanazawa from "../images/kanazawa.png";
import miyazaki from "../images/miyazaki.png"

const Movies = () => {
    return (
        <div>
            <TopHeader />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pl-5 pr-5 bg-base-200">
                <MovieCards 
                    img={kagoshima}
                    title="Pocoryanse '24 Summer Trip in Kagoshima"
                    season="2024年夏"
                    description="新たにPocoryanseと名乗る5人は綿密に計画を立て、鹿児島へ1泊2日の旅行へ向かう。"
                    url="https://youtu.be/4nztVfJqDU8"
                />
                <MovieCards 
                    img={gwJinro}
                    title="第一回社会人同窓会人狼【VLogもあるヨ！】"
                    season="2024年GW"
                    description="同窓会メンバーで糸島へ。夜は定番の人狼ゲームを楽しみます。"
                    url="https://youtu.be/hcOCKpNWEbY"
                />
                <MovieCards 
                    img={kyotoShiga}
                    title="KINNIKU Kyoto-Shiga Trip 2024"
                    season="2024年春"
                    description='このメンバーでは2回目の京都へ。今回は滋賀も訪れるため"新鮮"な旅となるはず。'
                    url="https://youtu.be/XSpyuz0Haf0"
                />
                <MovieCards 
                    img={newYear24}
                    title="2023-2024 KINNIKU Return to Fukuoka"
                    season="2024年年始"
                    description="毎年恒例年末年始集会。地元福岡での集会だし、全員集合できるよね。"
                    url="https://youtu.be/0YLeWvNrvGo"
                />
                <MovieCards 
                    img={yamamoto}
                    title="山本×岸田ゲーム【神ゲー】"
                    season="2024年年始"
                    description="しっぽり飲みの予定でしたが、不意に神ゲーが誕生しました。"
                    url="https://youtu.be/fqQVJQJiqro"
                />
                <MovieCards 
                    img={kamakura}
                    title="2023 Autumn Petit Trip"
                    season="2023年秋"
                    description="関東で大人気の観光地、鎌倉へとゆったり秋旅を満喫します。"
                    url="https://youtu.be/eBxD9-922rE"
                />
                <MovieCards 
                    img={yobuko}
                    title="2023 Summer Vacation"
                    season="2023年夏"
                    description="バーベキューやカラオケ、天拝の郷など夏の地元を堪能。"
                    url="https://youtu.be/Cgq_vIAQaGo"
                />
                <MovieCards
                    img={dosokaiKyoto}
                    title="DOSOKAI Graduation Trip in Kyoto"
                    season="2023年春"
                    description="卒業旅行は皆で京の都へ大名行列。"
                    url="https://youtu.be/EMgwZPXcTeo"
                />
                <MovieCards 
                    img={kanazawa}
                    title="grulior Last Trip in Kanazawa"
                    season="2023年春"
                    description="「grulior最後の旅行」と銘打って、お洒落?をテーマに金沢へ。"
                    url="https://youtu.be/fhzUCcW0Gak"
                />
                <MovieCards
                    img={miyazaki}
                    title="grulior summer trip in Miyazaki"
                    season="2022年夏"
                    description="宮崎にゆかりのある人は欠席となったが、歴史的なイベントも同時に起こる。記念すべきVLog 1作目"
                    url="https://youtu.be/56gbSORa5fg"
                />
            </div>
            <Footer />
        </div>
    );
}

export default Movies;