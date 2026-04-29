import React from "react";

const MovieCards = (props) => {
    return (
        <article className="movie-card group">
            <a
                href={props.url}
                target="_blank"
                rel="noopener noreferrer"
                className="movie-card__link"
                aria-label={`Watch ${props.title}`}
            >
                <figure className="movie-card__media">
                    <img
                        className="movie-card__img"
                        src={props.image}
                        alt={props.title}
                        loading="lazy"
                    />
                    <div className="movie-card__overlay" aria-hidden="true" />

                    {props.season && (
                        <span className="movie-card__season">{props.season}</span>
                    )}

                    <span className="movie-card__play" aria-hidden="true">
                        <svg viewBox="0 0 24 24">
                            <path d="M8 5.5v13a1 1 0 0 0 1.55.83l10-6.5a1 1 0 0 0 0-1.66l-10-6.5A1 1 0 0 0 8 5.5z" fill="currentColor" />
                        </svg>
                    </span>
                </figure>

                <div className="movie-card__body">
                    <h2 className="movie-card__title">{props.title}</h2>
                    {props.description && (
                        <p className="movie-card__desc">{props.description}</p>
                    )}
                    <span className="movie-card__cta">
                        Watch on YouTube
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M7 17L17 7M9 7h8v8" />
                        </svg>
                    </span>
                </div>
            </a>

            <style>{`
                .movie-card {
                    position: relative;
                    width: 100%;
                    border-radius: 22px;
                    overflow: hidden;
                    background: #ffffff;
                    box-shadow: 0 1px 2px rgba(0,0,0,0.04), 0 8px 28px rgba(0,0,0,0.06);
                    transition: transform 0.4s cubic-bezier(.2,.8,.2,1), box-shadow 0.4s ease;
                }
                .movie-card:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 2px 4px rgba(0,0,0,0.05), 0 18px 44px rgba(0,0,0,0.10);
                }
                @media (min-width: 768px) {
                    .movie-card { border-radius: 28px; }
                }
                .movie-card__link {
                    display: block;
                    color: inherit;
                    text-decoration: none;
                }
                .movie-card__media {
                    position: relative;
                    width: 100%;
                    margin: 0;
                    overflow: hidden;
                    aspect-ratio: 16 / 9;
                    background: #f5f5f7;
                }
                .movie-card__img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                    transform: scale(1.02);
                    transition: transform 0.7s cubic-bezier(.2,.8,.2,1), filter 0.5s ease;
                }
                .movie-card:hover .movie-card__img {
                    transform: scale(1.06);
                    filter: brightness(0.92);
                }
                .movie-card__overlay {
                    position: absolute;
                    inset: 0;
                    pointer-events: none;
                    background: linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.45) 100%);
                }
                .movie-card__season {
                    position: absolute;
                    bottom: 12px;
                    right: 12px;
                    z-index: 2;
                    padding: 6px 11px;
                    border-radius: 9999px;
                    background: rgba(255, 255, 255, 0.92);
                    -webkit-backdrop-filter: blur(8px) saturate(160%);
                    backdrop-filter: blur(8px) saturate(160%);
                    color: #1d1d1f;
                    font-size: 10px;
                    letter-spacing: 0.16em;
                    text-transform: uppercase;
                    font-weight: 600;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);
                }
                .movie-card__play {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%) scale(0.85);
                    width: 56px;
                    height: 56px;
                    border-radius: 9999px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    background: rgba(255,255,255,0.22);
                    -webkit-backdrop-filter: blur(20px) saturate(200%);
                    backdrop-filter: blur(20px) saturate(200%);
                    color: #ffffff;
                    opacity: 0;
                    transition: opacity 0.35s ease, transform 0.45s cubic-bezier(.2,.8,.2,1);
                    box-shadow: 0 10px 28px rgba(0,0,0,0.35);
                }
                .movie-card__play svg {
                    width: 18px;
                    height: 18px;
                    margin-left: 2px;
                    filter: drop-shadow(0 1px 1px rgba(0,0,0,0.4));
                }
                .movie-card:hover .movie-card__play {
                    opacity: 1;
                    transform: translate(-50%, -50%) scale(1);
                }
                .movie-card__body {
                    padding: 22px 24px 24px;
                }
                .movie-card__title {
                    font-size: 22px;
                    font-weight: 600;
                    letter-spacing: -0.025em;
                    color: #1d1d1f;
                    line-height: 1.2;
                }
                .movie-card__desc {
                    margin-top: 10px;
                    font-size: 14px;
                    line-height: 1.55;
                    color: #424245;
                    font-weight: 400;
                }
                .movie-card__cta {
                    margin-top: 16px;
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    font-size: 12px;
                    font-weight: 500;
                    letter-spacing: 0.02em;
                    color: #0a84ff;
                    transition: gap 0.25s ease;
                }
                .movie-card:hover .movie-card__cta {
                    gap: 10px;
                }
            `}</style>
        </article>
    );
};

export default MovieCards;
