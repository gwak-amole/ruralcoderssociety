import { useState, useEffect } from "react";
import NumberFlow from '@number-flow/react';


const InfoCard = ({ number = 0, prefix, suffix, desc = ""}) => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        setValue(number);
    }, [])
    // 
    return(
        <div className="border-0 p-8 m-2 w-96 rounded-3xl bg-blue-400">
            <NumberFlow className="text-6xl font-semibold m-5 text-amber-300" value={value} prefix={prefix} suffix={suffix}/>
            <p className="m-3 text-xl text-amber-400">{desc}</p>
        </div>
    );
}

export default InfoCard;