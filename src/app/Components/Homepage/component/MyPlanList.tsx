"use client";

import { TApps } from "@/app/types/apps.type";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const MyPlanList = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [plan, setPlan] = useState<TApps[]>([]);
    const [saved, setSaved] = useState<TApps[]>([]);
    const [completed, setCompleted] = useState<(string | number)[]>([]);

    // URL theke active tab
    const activeTab =
        searchParams.get("tab") === "saved"
            ? "saved"
            : "today";

    useEffect(() => {
        const savedPlan = JSON.parse(
            localStorage.getItem("myPlan") || "[]"
        );

        const savedLater = JSON.parse(
            localStorage.getItem("savedPlan") || "[]"
        );

        const savedCompleted = JSON.parse(
            localStorage.getItem("completedPlan") || "[]"
        );

        setPlan(savedPlan);
        setSaved(savedLater);
        setCompleted(savedCompleted);
    }, []);

    // Today's Plan stats
    const totalMinutes = plan.reduce(
        (total, item) => total + item.duration,
        0
    );

    const totalCalories = plan.reduce(
        (total, item) => total + item.caloriesBurned,
        0
    );

    // Saved stats
    const savedMinutes = saved.reduce(
        (total, item) => total + item.duration,
        0
    );

    const savedCalories = saved.reduce(
        (total, item) => total + item.caloriesBurned,
        0
    );

    // Mark as Done
    const handleComplete = (id: string | number) => {
        setCompleted((prev) => {
            const newCompleted = prev.includes(id)
                ? prev.filter((item) => item !== id)
                : [...prev, id];

            localStorage.setItem(
                "completedPlan",
                JSON.stringify(newCompleted)
            );

            return newCompleted;
        });
    };

    // Remove from Today's Plan
    const handleRemovePlan = (id: string | number) => {
        const newPlan = plan.filter(
            (item) => item.id !== id
        );

        setPlan(newPlan);

        localStorage.setItem(
            "myPlan",
            JSON.stringify(newPlan)
        );

        // Navbar Plan count instantly update
        window.dispatchEvent(
            new Event("planUpdated")
        );

        setCompleted((prev) => {
            const newCompleted = prev.filter(
                (item) => item !== id
            );

            localStorage.setItem(
                "completedPlan",
                JSON.stringify(newCompleted)
            );

            return newCompleted;
        });
    };

    // Remove from Saved
    const handleRemoveSaved = (id: string | number) => {
        const newSaved = saved.filter(
            (item) => item.id !== id
        );

        setSaved(newSaved);

        localStorage.setItem(
            "savedPlan",
            JSON.stringify(newSaved)
        );

        // Navbar Saved count instantly update
        window.dispatchEvent(
            new Event("savedUpdated")
        );
    };

    // Current list
    const currentList =
        activeTab === "today" ? plan : saved;

    return (
        <>
            {/* Stats */}
            <div className="mb-5 grid grid-cols-3 overflow-hidden rounded-xl border border-[#20242b] bg-[#13161c]">

                {/* Exercises / Saved */}
                <div className="border-r border-[#20242b] px-5 py-4">
                    <p className="text-[9px] text-gray-500">
                        {activeTab === "today"
                            ? "Exercises"
                            : "Saved"}
                    </p>

                    <p className="mt-1 text-2xl font-black text-[#b7f000]">
                        {currentList.length}
                    </p>
                </div>

                {/* Minutes */}
                <div className="border-r border-[#20242b] px-5 py-4">
                    <p className="text-[9px] text-gray-500">
                        Minutes
                    </p>

                    <p className="mt-1 text-2xl font-black">
                        {activeTab === "today"
                            ? totalMinutes
                            : savedMinutes}
                    </p>
                </div>

                {/* Calories */}
                <div className="px-5 py-4">
                    <p className="text-[9px] text-gray-500">
                        Calories
                    </p>

                    <p className="mt-1 text-2xl font-black">
                        {activeTab === "today"
                            ? totalCalories
                            : savedCalories}
                    </p>
                </div>
            </div>

            {/* Tabs + Sort */}
            <div className="mb-3 flex items-center justify-between">

                {/* Tabs */}
                <div className="flex rounded-md border border-[#20242b] bg-[#11141a] p-0.5">

                    {/* Today's Plan */}
                    <button
                        type="button"
                        onClick={() =>
                            router.push("/Myplan?tab=today")
                        }
                        className={`rounded px-3 py-1 text-[8px] font-medium transition ${
                            activeTab === "today"
                                ? "bg-[#252932] text-white"
                                : "text-gray-500 hover:text-white"
                        }`}
                    >
                        Today's Plan
                    </button>

                    {/* Saved */}
                    <button
                        type="button"
                        onClick={() =>
                            router.push("/Myplan?tab=saved")
                        }
                        className={`rounded px-3 py-1 text-[8px] font-medium transition ${
                            activeTab === "saved"
                                ? "bg-[#252932] text-white"
                                : "text-gray-500 hover:text-white"
                        }`}
                    >
                        Saved
                    </button>
                </div>

                {/* Sort */}
                <div className="flex items-center gap-2">

                    <span className="text-[8px] text-gray-500">
                        Sort By
                    </span>

                    <button
                        type="button"
                        className="flex items-center gap-2 rounded-md border border-[#252932] bg-[#13161c] px-3 py-1.5 text-[8px] text-gray-400"
                    >
                        Duration

                        <span className="text-[7px]">
                            ↓
                        </span>
                    </button>
                </div>
            </div>

            {/* Empty State */}
            {currentList.length === 0 ? (
                <div className="flex h-[210px] flex-col items-center justify-center rounded-xl border border-dashed border-[#252932]">

                    <h2 className="text-xs font-black">
                        {activeTab === "today"
                            ? "NOTHING HERE YET"
                            : "NO SAVED EXERCISES"}
                    </h2>

                    <p className="mt-1 text-[8px] text-gray-500">
                        {activeTab === "today"
                            ? "Browse the library and add a lift to get today moving."
                            : "Save exercises for later and they will appear here."}
                    </p>
                </div>
            ) : (
                <div className="space-y-3">

                    {currentList.map((app) => {

                        const isCompleted =
                            completed.includes(app.id);

                        return (
                            <div
                                key={app.id}
                                className={`flex items-center gap-3 rounded-xl border p-2.5 transition ${
                                    activeTab === "today" &&
                                    isCompleted
                                        ? "border-[#536d00] bg-[#263300]"
                                        : "border-[#20242b] bg-[#13161c]"
                                }`}
                            >

                                {/* Image */}
                                <img
                                    src={app.image}
                                    alt={app.name}
                                    className="h-16 w-24 rounded-lg object-cover"
                                />

                                {/* Info */}
                                <div className="flex-1">

                                    <h3 className="text-[11px] font-black uppercase">
                                        {app.name}
                                    </h3>

                                    <p className="mt-0.5 text-[8px] text-gray-500">
                                        {app.equipment}
                                    </p>

                                    <div className="mt-1 flex items-center gap-2 text-[8px] text-gray-400">

                                        <span>
                                            ◉ {app.duration} min
                                        </span>

                                        <span>
                                            🔥 {app.caloriesBurned} kcal
                                        </span>

                                        <span>
                                            ★ {app.rating}
                                        </span>
                                    </div>
                                </div>

                                {/* Buttons */}
                                <div className="flex items-center gap-2">

                                    {/* View Details */}
                                    <Link
                                        href={`/Workouts/${app.id}`}
                                        className="rounded-full border border-[#303641] px-3 py-1.5 text-[8px] text-gray-300 transition hover:border-gray-500 hover:text-white"
                                    >
                                        View Details
                                    </Link>

                                    {/* Mark as Done */}
                                    {activeTab === "today" && (
                                        <button
                                            type="button"
                                            onClick={() =>
                                                handleComplete(app.id)
                                            }
                                            className={`rounded-full px-3 py-1.5 text-[8px] font-bold transition ${
                                                isCompleted
                                                    ? "bg-[#8cab00] text-black"
                                                    : "bg-[#b7f000] text-black"
                                            }`}
                                        >
                                            ✓ Mark as Done
                                        </button>
                                    )}

                                    {/* Remove */}
                                    <button
                                        type="button"
                                        onClick={() =>
                                            activeTab === "today"
                                                ? handleRemovePlan(app.id)
                                                : handleRemoveSaved(app.id)
                                        }
                                        className="px-1 text-gray-500 transition hover:text-white"
                                    >
                                        ×
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </>
    );
};

export default MyPlanList;