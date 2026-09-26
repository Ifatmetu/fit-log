"use client";

import { useEffect, useState } from "react";

const SavedCount = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const updateCount = () => {
            const saved = JSON.parse(
                localStorage.getItem("savedPlan") || "[]"
            );

            setCount(saved.length);
        };

        // Initial count
        updateCount();

        // Same tab update
        window.addEventListener("savedUpdated", updateCount);

        return () => {
            window.removeEventListener("savedUpdated", updateCount);
        };
    }, []);

    return (
        <span className="flex h-4 w-4 items-center justify-center rounded-full border border-[#30333a] text-[9px] text-gray-400">
            {count}
        </span>
    );
};

export default SavedCount;