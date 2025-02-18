import React from "react";
import "../App.css";

import TopHeader from "./TopHeader";
import Footer from "./Footer";
import MovieCards from "./components/MovieCards";
import ScrollAnimation from "./components/ScrollAnimation";

import movies from "../data/movies.json";

const createMovieCardsList = () => {
    const list = [];
    for (const movieInfo of movies) {
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
            animation="animate-text-focus-in"
        />);
    }
    return <>{list}</>;
}

const Movies = () => {
    return (
        <div>
            <TopHeader />
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pl-5 pr-5 bg-base-200">
                    {createMovieCardsList()}
                </div>
            <Footer />
        </div>
    );
}

export default Movies;