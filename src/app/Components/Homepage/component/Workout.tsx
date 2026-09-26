"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Workout = () => {
    const pathname = usePathname();

    return (
        <Link
            href="/"
            className={`rounded-full px-4 py-1.5 text-[10px] font-medium ${
                pathname === "/"
                    ? "bg-[#263300] text-[#b7f000]"
                    : "text-gray-400 hover:text-white"
            }`}
        >
            Workouts
        </Link>
    );
};

export default Workout;