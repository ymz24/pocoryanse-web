import React from "react";
import "../App.css";

import TopHeader from "./TopHeader";
import Footer from "./Footer";
import ScrollAnimation from "./components/ScrollAnimation";

const Others = () => {
    const videos = [
        { year: "'25", url: "https://youtu.be/yT5p0As0rUg" },
        { year: "'24", url: "https://youtu.be/u2Zb3pGkRPg" },
        { year: "'22-'23", url: "https://youtu.be/3f3Qf3bk_yE" },
    ];

    return (
        <div className="bg-base-200 min-h-screen">
            <TopHeader />
            <div className="pt-10">
                <div className="py-8 px-4 mx-auto max-w-6xl lg:py-16">
                    <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                        Others
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
                        Opening & Ending Collection
                    </p>

                    {/* Video links grid: 1 column on mobile, 2-3 on larger screens */}
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {videos.map((video) => (
                            <ScrollAnimation
                                key={video.year}
                                elem={
                                    <a
                                        href={video.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="card bg-base-100 shadow-lg hover:shadow-2xl transition-shadow cursor-pointer"
                                    >
                                        <div className="card-body items-center text-center">
                                            <h2 className="card-title text-3xl font-bold text-primary">
                                                {video.year}
                                            </h2>
                                            <p className="text-gray-600 text-sm mt-2">
                                                Click to watch on YouTube
                                            </p>
                                            <div className="mt-4">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-8 w-8 text-red-500"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                >
                                                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </a>
                                }
                                animation="fade-in-bottom"
                            />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Others;
