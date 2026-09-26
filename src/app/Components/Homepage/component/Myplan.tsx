"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Myplan = () => {
    const pathname = usePathname();

    const [planCount, setPlanCount] = useState(0);

    useEffect(() => {
        const savedPlan = JSON.parse(
            localStorage.getItem("myPlan") || "[]"
        );

        setPlanCount(savedPlan.length);
    }, []);

    return (
        <Link
            href="/Myplan"
            className={`flex items-center gap-1 rounded-full px-4 py-1.5 text-[10px] font-medium ${
                pathname === "/Myplan"
                    ? "bg-[#263300] text-[#b7f000]"
                    : "text-gray-400 hover:text-white"
            }`}
        >
            <span>My Plan</span>
        </Link>
    );
};

export default Myplan;