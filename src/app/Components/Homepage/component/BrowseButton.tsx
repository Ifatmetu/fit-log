"use client";

const BrowseButton = () => {
    const handleClick = () => {
        document.getElementById("library")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <button
            onClick={handleClick}
            className="mt-4 rounded-md bg-[#b7f000] px-4 py-2.5 text-[9px] font-black text-black transition hover:bg-[#c8ff20] sm:mt-5"
        >
            BROWSE WORKOUTS
        </button>
    );
};

export default BrowseButton;