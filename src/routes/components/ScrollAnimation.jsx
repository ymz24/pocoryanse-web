import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const ScrollAnimation = ({ elem, animation }) => {
    const { ref, inView } = useInView({
        rootMargin: "-100px",
        triggerOnce: true
    });

    const [ isVisible, setIsVisible ] = useState(false);

    useEffect(() => {
        if (inView) {
            setIsVisible(true);
        }
    }, [ inView ]);
    
    return (
        <div
            ref={ref}
            className={`${isVisible ? `${animation} translate-y-0 opacity-100` : "translate-y-5 opacity-0"} transition-all duration-1500`}
        >
            {elem}
        </div>
    )
};

export default ScrollAnimation;