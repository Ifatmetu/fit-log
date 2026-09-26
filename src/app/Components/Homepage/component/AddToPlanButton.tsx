"use client";

import { TApps } from "@/app/types/apps.type";

const AddToPlanButton = ({ app }: { app: TApps }) => {
    const handleAdd = () => {
        const oldPlan = JSON.parse(
            localStorage.getItem("myPlan") || "[]"
        );

        const alreadyAdded = oldPlan.some(
            (item: TApps) => item.id === app.id
        );

        if (alreadyAdded) {
            alert("Already added to today's plan");
            return;
        }

        const newPlan = [...oldPlan, app];

        localStorage.setItem(
            "myPlan",
            JSON.stringify(newPlan)
        );

        // Navbar Plan count instantly update
        window.dispatchEvent(
            new Event("planUpdated")
        );

        alert("Added to today's plan!");
    };

    return (
        <button
            type="button"
            onClick={handleAdd}
            className="rounded-md bg-[#b7f000] px-4 py-2 text-[9px] font-bold text-black transition hover:bg-[#c8ff22]"
        >
            ⊞ &nbsp; Add to today's plan
        </button>
    );
};

export default AddToPlanButton;