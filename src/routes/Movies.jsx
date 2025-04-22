import React from "react";
import "../App.css";

import TopHeader from "./TopHeader";
import Footer from "./Footer";
import MovieCards from "./components/MovieCards";
import ScrollAnimation from "./components/ScrollAnimation";

import movies from "../data/movies.json";

const createMovieCardsList = () => {
    const list = [];
    // movies.jsonの内容を逆順に表示
    for (let i = movies.length - 1; i >= 0; i--) {
        const movieInfo = movies[i];
        list.push(<ScrollAnimation    
            elem={
                <MovieCards
                    image={movieInfo.image}
                    title={movieInfo.title}
                    season={movieInfo.season}
                    description={movieInfo.description}
                    url={movieInfo.url}
                />
            }
            animation="fade-in-bottom"
        />);
    }
    return <>{list}</>;
}

const Movies = () => {
    return (
        <div>
            <TopHeader />
                {/* スマホの場合縦一列で横幅いっぱい, PC表示の場合縦横5pxずつ開けた3行表示 */}
                <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-5 lg:pl-5 lg:pr-5 bg-base-200 pt-5">
                    {createMovieCardsList()}
                </div>
            <Footer />
        </div>
    );
}

export default Movies;