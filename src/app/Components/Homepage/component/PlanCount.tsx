"use client";

import { useEffect, useState } from "react";

const PlanCount = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const updateCount = () => {
            const plan = JSON.parse(
                localStorage.getItem("myPlan") || "[]"
            );

            setCount(plan.length);
        };

        
        updateCount();

        
        window.addEventListener("planUpdated", updateCount);

        return () => {
            window.removeEventListener("planUpdated", updateCount);
        };
    }, []);

    return (
        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#b7f000] text-[9px] font-bold text-black">
            {count}
        </span>
    );
};

export default PlanCount;