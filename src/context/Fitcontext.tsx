"use client";

import React, {
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";
import { TApps } from "@/app/types/apps.type";

type FitContextType = {
    plan: TApps[];
    addToPlan: (app: TApps) => void;
    removeFromPlan: (id: string | number) => void;
    toast: string;
};

export const Fitcontext = createContext<FitContextType | null>(null);

const FitcontextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [plan, setPlan] = useState<TApps[]>([]);
    const [toast, setToast] = useState("");

    useEffect(() => {
        const savedPlan = localStorage.getItem("fitlog-plan");

        if (savedPlan) {
            setPlan(JSON.parse(savedPlan));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("fitlog-plan", JSON.stringify(plan));
    }, [plan]);

    const addToPlan = (app: TApps) => {
        const alreadyAdded = plan.some(
            (item) => item.id === app.id
        );

        if (alreadyAdded) {
            setToast("Already added to today's plan");
        } else {
            setPlan((prev) => [...prev, app]);
            setToast("Added to today's plan!");
        }

        setTimeout(() => {
            setToast("");
        }, 2500);
    };

    const removeFromPlan = (id: string | number) => {
        setPlan((prev) =>
            prev.filter((item) => item.id !== id)
        );
    };

    return (
        <Fitcontext.Provider
            value={{
                plan,
                addToPlan,
                removeFromPlan,
                toast,
            }}
        >
            {children}

            {toast && (
                <div className="fixed right-5 top-20 z-[100] rounded-lg border border-lime-400/20 bg-[#171a20] px-5 py-3 text-sm font-semibold text-white shadow-2xl">
                    <span className="mr-2 text-lime-400">
                        ✓
                    </span>
                    {toast}
                </div>
            )}
        </Fitcontext.Provider>
    );
};

export const useFitcontext = () => {
    const context = useContext(Fitcontext);

    if (!context) {
        throw new Error(
            "useFitcontext must be used inside FitcontextProvider"
        );
    }

    return context;
};

export default FitcontextProvider;