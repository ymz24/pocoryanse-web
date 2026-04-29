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
        <div className="bg-[#f5f5f7] min-h-screen">
            <TopHeader />
            <main className="pt-20 md:pt-28 pb-24">
                <div className="max-w-6xl mx-auto px-5 md:px-8">
                    <header className="mb-10 md:mb-14">
                        <p
                            className="text-[11px] uppercase mb-3"
                            style={{ letterSpacing: "0.22em", color: "#86868b", fontWeight: 500 }}
                        >
                            Featured
                        </p>
                        <h1
                            className="text-4xl md:text-6xl"
                            style={{
                                fontWeight: 600,
                                letterSpacing: "-0.035em",
                                color: "#1d1d1f"
                            }}
                        >
                            Movies
                        </h1>
                        <p
                            className="mt-3 text-sm md:text-base"
                            style={{ color: "#6e6e73", fontWeight: 300 }}
                        >
                            これまでの活動を映像で振り返る。
                        </p>
                    </header>
                    <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-5">
                        {createMovieCardsList()}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Movies;