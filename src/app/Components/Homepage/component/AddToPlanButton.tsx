"use client";

import { TApps } from "@/app/types/apps.type";
import { useEffect, useState } from "react";

const AddToPlanButton = ({ app }: { app: TApps }) => {
    const [toast, setToast] = useState("");
    const [showToast, setShowToast] = useState(false);

    const handleAdd = () => {
        const oldPlan = JSON.parse(
            localStorage.getItem("myPlan") || "[]"
        );

        const alreadyAdded = oldPlan.some(
            (item: TApps) => item.id === app.id
        );

        if (alreadyAdded) {
            setToast("Already added to today's plan");
            setShowToast(true);
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

        setToast("Added to today's plan!");
        setShowToast(true);
    };

    useEffect(() => {
        if (!showToast) return;

        const timer = setTimeout(() => {
            setShowToast(false);
        }, 2500);

        return () => clearTimeout(timer);
    }, [showToast, toast]);

    return (
        <>
            {/* Button */}
            <button
                type="button"
                onClick={handleAdd}
                className="w-full rounded-md bg-[#b7f000] px-4 py-2.5 text-[9px] font-bold text-black transition hover:bg-[#c8ff22] sm:w-auto"
            >
                ⊞ &nbsp; Add to today's plan
            </button>

            {/* Toast */}
            {showToast && (
                <div className="fixed right-4 top-4 z-[99999] w-[280px] overflow-hidden rounded-lg border border-[#30343c] bg-[#15181e] shadow-2xl sm:right-6 sm:top-6">

                    <div className="flex items-center gap-3 px-4 py-3">

                        {/* Green Check */}
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#b7f000] text-sm font-black text-black">
                            ✓
                        </div>

                        {/* Message */}
                        <div>
                            <p className="text-[10px] font-bold text-white">
                                {toast}
                            </p>

                            <p className="mt-0.5 text-[8px] text-gray-500">
                                FitLog
                            </p>
                        </div>

                    </div>

                    {/* Green Timer */}
                    <div className="h-[3px] w-full bg-[#292d34]">
                        <div
                            key={toast}
                            className="h-full origin-left bg-[#b7f000]"
                            style={{
                                animation:
                                    "toastTimer 2.5s linear forwards",
                            }}
                        />
                    </div>

                    <style jsx>{`
                        @keyframes toastTimer {
                            from {
                                width: 100%;
                            }

                            to {
                                width: 0%;
                            }
                        }
                    `}</style>
                </div>
            )}
        </>
    );
};

export default AddToPlanButton;