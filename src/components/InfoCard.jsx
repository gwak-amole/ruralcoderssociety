import { useState, useEffect, useRef } from "react";
import NumberFlow from '@number-flow/react';


const InfoCard = ({ number = 0, prefix, suffix, desc = ""}) => {
    const [value, setValue] = useState(0);
    const hasTriggered = useRef(false);
    // my learning note again: useRef can be used to reference a spec element instead of id
    // esp when mapped
    const cardRef = useRef(null);


// my learning notes
    useEffect(() => {
        const handleScroll = () => {
            const element = cardRef.current;
            
            // if it's not the element or if the event is already triggered then stop checking w this function
            if (!element || hasTriggered.current) {
                return;
            }
            // if in view then set hasTriggered ref to true and remove the scrolling event listener
            // so that the handleScroll is stopped called
            const position = element.getBoundingClientRect();
            if(position.top < window.innerHeight && position.bottom >= 0) {
                setValue(number);
                hasTriggered.current = true;
                window.removeEventListener('scroll', handleScroll);
            }
        }
        window.addEventListener('scroll', handleScroll);
        
        // just in case the thing is already in view when the person reloads
        handleScroll();

        // returning this so that when this thingy exits the window view the event listener's removed
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [number])
    return(
        <div ref={cardRef} className="border-0 p-8 m-2 w-96 rounded-3xl bg-blue-400">
            <NumberFlow className="text-6xl font-semibold m-5 text-amber-300" value={value} prefix={prefix} suffix={suffix} id="data-container"/>
            <p className="m-3 text-xl text-amber-400">{desc}</p>
        </div>
    );
}

export default InfoCard;