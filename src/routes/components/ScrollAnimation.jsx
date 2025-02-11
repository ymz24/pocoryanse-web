import React from "react";
import { useInView } from "react-intersection-observer";
import "../App.css";

const ScrollAnimation = ({ elem, animation }) => {
    const { ref, inView } = useInView({
        rootMargin: "-100px",
        triggerOnce: true
    });
    
    return (
        <div ref={ref} className={ `${ inView ? animation : "opacity-0" }`}>
            {elem}
        </div>
    )
};

export default ScrollAnimation;