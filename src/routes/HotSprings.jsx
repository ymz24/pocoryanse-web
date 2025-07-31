import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import "../App.css";

import TopHeader from "./TopHeader";
import Footer from "./Footer";
import ScrollAnimation from "./components/ScrollAnimation";
import RankingContents from "./components/RankingContents";
import { API_URL } from "../const";

const HotSprings = () => {
    const [rankingData, setRankingData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(API_URL)
            .then(response => response.json())
            .then(data => {
                // data は google sheets の全データ（配列の配列）と仮定
                // 各行の total は最終要素と仮定し、降順に並び替え
                const sortedData = data.slice().sort((a, b) => {
                    return a.total > b.total ? -1 : 1;
                });
                setRankingData(sortedData);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching ranking data: ", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-50 z-50">
                <div className="loading loading-ring loading-xl"></div>
            </div>
        );
    }

    return (
        <div className="bg-base-200">
            <TopHeader />
            <Link className="btn btn-primary text-white w-full mt-3" to="/RankingRegister">施設登録</Link>
            <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-5 lg:pl-5 lg:pr-5 bg-base-200 pt-5">
                {rankingData.map((ranking, index) => (
                    <ScrollAnimation
                        elem={
                            <RankingContents key={index} index={index + 1} ranking={ranking} />
                        }
                        animation="fade-in-bottom"
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default HotSprings;