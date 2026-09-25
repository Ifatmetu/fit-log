"use client";

import { TApps } from "@/app/types/apps.type";
import Link from "next/link";
import { useEffect, useState } from "react";

const MyPlan = () => {
    const [plan, setPlan] = useState<TApps[]>([]);

    useEffect(() => {
        const savedPlan = JSON.parse(
            localStorage.getItem("myPlan") || "[]"
        );

        setPlan(savedPlan);
    }, []);

    const totalMinutes = plan.reduce(
        (total, item) => total + item.duration,
        0
    );

    const totalCalories = plan.reduce(
        (total, item) => total + item.caloriesBurned,
        0
    );

    return (
        <div className="min-h-screen bg-[#0b0d11] text-white">
            <main className="mx-auto max-w-[1200px] px-8 py-8">

                <div className="mb-5">
                    <h1 className="text-2xl font-black">
                        MY PLAN
                    </h1>

                    <p className="mt-1 text-sm text-gray-500">
                        Cap of five lifts for today. Finish them, then load more.
                    </p>
                </div>

                {/* Stats */}
                <div className="mb-6 grid grid-cols-3 overflow-hidden rounded-xl border border-gray-800 bg-[#13161c]">

                    <div className="border-r border-gray-800 p-5">
                        <p className="text-xs text-gray-500">
                            Exercises
                        </p>

                        <p className="mt-1 text-3xl font-black text-lime-400">
                            {plan.length}
                        </p>
                    </div>

                    <div className="border-r border-gray-800 p-5">
                        <p className="text-xs text-gray-500">
                            Minutes
                        </p>

                        <p className="mt-1 text-3xl font-black">
                            {totalMinutes}
                        </p>
                    </div>

                    <div className="p-5">
                        <p className="text-xs text-gray-500">
                            Calories
                        </p>

                        <p className="mt-1 text-3xl font-black">
                            {totalCalories}
                        </p>
                    </div>

                </div>

                {/* Exercises */}
                {plan.length === 0 ? (
                    <div className="flex h-[210px] flex-col items-center justify-center rounded-xl border border-dashed border-gray-800">

                        <h2 className="text-sm font-black">
                            NOTHING HERE YET
                        </h2>

                        <p className="mt-1 text-xs text-gray-500">
                            Browse the library and add a lift to get today moving.
                        </p>

                        <Link
                            href="/"
                            className="mt-4 rounded-full bg-lime-400 px-5 py-2.5 text-xs font-bold text-black"
                        >
                            Go to workouts
                        </Link>

                    </div>
                ) : (
                    <div className="space-y-3">
                        {plan.map((app) => (
                            <div
                                key={app.id}
                                className="flex items-center gap-4 rounded-xl border border-gray-800 bg-[#13161c] p-3"
                            >
                                <img
                                    src={app.image}
                                    alt={app.name}
                                    className="h-20 w-24 rounded-lg object-cover"
                                />

                                <div className="flex-1">
                                    <h3 className="font-bold">
                                        {app.name}
                                    </h3>

                                    <p className="text-xs text-gray-500">
                                        {app.equipment}
                                    </p>

                                    <p className="mt-2 text-xs text-gray-400">
                                        {app.sets} sets × {app.reps}
                                    </p>
                                </div>

                                <div className="text-right text-xs text-gray-500">
                                    <p>{app.duration} min</p>
                                    <p>{app.caloriesBurned} kcal</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

            </main>
        </div>
    );
};

export default MyPlan;
