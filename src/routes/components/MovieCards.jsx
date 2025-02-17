import React from "react";

const MovieCards = (props) => {
    return(
        <div className="card bg-base-100 w-full shadow-xl animate-text-focus-in">
            <figure>
                <img className="h-full w-full" src={props.image} alt={props.image} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{props.title}</h2>
                <p>{props.season}</p><br />
                <p>{props.description}</p>
                <div className="card-actions justify-end">
                    <a href={props.url} className="btn btn-primary">Watch on YouTube</a>
                </div>
            </div>
        </div>
    );
}

export default MovieCards;