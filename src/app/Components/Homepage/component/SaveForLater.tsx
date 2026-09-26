"use client";

import { TApps } from "@/app/types/apps.type";

const SaveForLater = ({ app }: { app: TApps }) => {
    const handleSave = () => {
        const oldSaved = JSON.parse(
            localStorage.getItem("savedPlan") || "[]"
        );

        const alreadySaved = oldSaved.some(
            (item: TApps) => item.id === app.id
        );

        if (alreadySaved) {
            alert("Already saved");
            return;
        }

        const newSaved = [...oldSaved, app];

        localStorage.setItem(
            "savedPlan",
            JSON.stringify(newSaved)
        );

        // Navbar Saved count instantly update
        window.dispatchEvent(
            new Event("savedUpdated")
        );

        alert("Saved for later!");
    };

    return (
        <button
            type="button"
            onClick={handleSave}
            className="rounded-md border border-white/10 px-4 py-2 text-[9px] text-gray-300 transition hover:border-white/20 hover:text-white"
        >
            ♡ &nbsp; Save for later
        </button>
    );
};

export default SaveForLater;