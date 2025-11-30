import React from "react";

const MovieCards = (props) => {
    return(
        <div className="card bg-base-100 w-full shadow-xl animate-text-focus-in">
            <figure className="relative w-full overflow-hidden">
                <img className="h-full w-full" src={props.image} alt={props.image} />
                <a href={props.url} className="btn glass absolute bottom-3 right-3 z-10 text-white">Watch</a>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{props.title}</h2>
                <p>{props.season}</p><br />
                <p>{props.description}</p>
            </div>
        </div>
    );
}

export default MovieCards;