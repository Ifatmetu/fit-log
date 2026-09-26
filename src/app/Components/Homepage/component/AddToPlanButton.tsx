"use client";

import { TApps } from "@/app/types/apps.type";
import { useEffect, useState } from "react";

const AddToPlanButton = ({ app }: { app: TApps }) => {
    const [toast, setToast] = useState("");
    const [timer, setTimer] = useState(100);
    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
        if (!toast) return;

        setTimer(100);

        const interval = setInterval(() => {
            setTimer((prev) => {
                if (prev <= 0) {
                    clearInterval(interval);
                    return 0;
                }

                return prev - 2;
            });
        }, 50);

        const timeout = setTimeout(() => {
            setToast("");
        }, 2500);

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, [toast]);

    const showToast = (message: string, success: boolean) => {
        setIsSuccess(success);
        setToast(message);
    };

    const handleAdd = () => {
        const oldPlan = JSON.parse(
            localStorage.getItem("myPlan") || "[]"
        );

        const alreadyAdded = oldPlan.some(
            (item: TApps) => item.id === app.id
        );

        if (alreadyAdded) {
            showToast("Already added to today's plan", false);
            return;
        }

        const newPlan = [...oldPlan, app];

        localStorage.setItem(
            "myPlan",
            JSON.stringify(newPlan)
        );

        window.dispatchEvent(
            new Event("planUpdated")
        );

        showToast("Added to today's plan!", true);
    };

    return (
        <>
            <button
                type="button"
                onClick={handleAdd}
                className="w-full rounded-md bg-[#b7f000] px-4 py-2.5 text-[9px] font-bold text-black transition hover:bg-[#c8ff22] sm:w-auto"
            >
                ⊞ &nbsp; Add to today's plan
            </button>

            
            {toast && (
                <div className="fixed right-4 top-4 z-[9999] w-[260px] overflow-hidden rounded-lg border border-white/10 bg-[#171a20] shadow-2xl sm:right-6 sm:top-6">
                    
                    <div className="flex items-center gap-3 px-4 py-3">
                        
                        <div
                            className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-black ${
                                isSuccess
                                    ? "bg-[#b7f000] text-black"
                                    : "bg-[#2a2e35] text-gray-400"
                            }`}
                        >
                            {isSuccess ? "✓" : "!"}
                        </div>

                        <p className="text-[10px] font-medium text-white">
                            {toast}
                        </p>
                    </div>

                    
                    {isSuccess && (
                        <div className="h-[3px] w-full bg-[#252932]">
                            <div
                                className="h-full bg-[#b7f000] transition-[width] duration-75"
                                style={{
                                    width: `${timer}%`,
                                }}
                            />
                        </div>
                    )}
                </div>
            )}
        </>
    );
};

export default AddToPlanButton;