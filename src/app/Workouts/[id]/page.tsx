import { getApp } from "@/lib/Datafetch";

const DetailsPage = async ({
    params,
}: {
    params: Promise<{ id: string }>;
}) => {
    const { id } = await params;
    const app = await getApp(id);

    return (
        <div className="min-h-screen bg-[#0d0f13] px-4 py-6 text-white md:px-8 md:py-8">
            <div className="mx-auto max-w-6xl">

                <div className="grid gap-7 md:grid-cols-[1fr_1.05fr]">

                    {/* LEFT - IMAGE */}
                    <div className="relative h-[420px] overflow-hidden rounded-lg md:h-[560px]">
                        <img
                            src={app.image}
                            alt={app.name}
                            className="h-full w-full object-cover"
                        />
                    </div>

                    {/* RIGHT - DETAILS */}
                    <div className="flex flex-col justify-center">

                        {/* Title */}
                        <h1 className="text-3xl font-black uppercase tracking-tight md:text-4xl">
                            {app.name}
                        </h1>

                        {/* Description */}
                        <p className="mt-2 max-w-xl text-xs leading-5 text-gray-500">
                            {app.description}
                        </p>

                        {/* Muscle Groups */}
                        <div className="mt-4 flex gap-2">
                            {app.muscleGroups.map((muscle: string) => (
                                <span
                                    key={muscle}
                                    className="rounded-full bg-[#b7f000] px-3 py-1 text-[9px] font-black text-black"
                                >
                                    {muscle}
                                </span>
                            ))}
                        </div>

                        {/* Stats */}
                        <div className="mt-5 overflow-hidden rounded-xl border border-white/5 bg-[#171a20]">

                            <div className="flex items-center justify-between border-b border-white/5 px-4 py-3">
                                <span className="text-[9px] uppercase tracking-wide text-gray-500">
                                    Equipment
                                </span>
                                <span className="text-[10px]">
                                    {app.equipment}
                                </span>
                            </div>

                            <div className="flex items-center justify-between border-b border-white/5 px-4 py-3">
                                <span className="text-[9px] uppercase tracking-wide text-gray-500">
                                    Difficulty
                                </span>
                                <span className="text-[10px]">
                                    {app.difficulty}
                                </span>
                            </div>

                            <div className="flex items-center justify-between border-b border-white/5 px-4 py-3">
                                <span className="text-[9px] uppercase tracking-wide text-gray-500">
                                    Sets
                                </span>
                                <span className="text-[10px]">
                                    {app.sets}
                                </span>
                            </div>

                            <div className="flex items-center justify-between border-b border-white/5 px-4 py-3">
                                <span className="text-[9px] uppercase tracking-wide text-gray-500">
                                    Reps
                                </span>
                                <span className="text-[10px]">
                                    {app.reps}
                                </span>
                            </div>

                            <div className="flex items-center justify-between border-b border-white/5 px-4 py-3">
                                <span className="text-[9px] uppercase tracking-wide text-gray-500">
                                    Duration
                                </span>
                                <span className="text-[10px]">
                                    {app.duration} min
                                </span>
                            </div>

                            <div className="flex items-center justify-between border-b border-white/5 px-4 py-3">
                                <span className="text-[9px] uppercase tracking-wide text-gray-500">
                                    Calories
                                </span>
                                <span className="text-[10px]">
                                    {app.caloriesBurned} kcal
                                </span>
                            </div>

                            <div className="flex items-center justify-between px-4 py-3">
                                <span className="text-[9px] uppercase tracking-wide text-gray-500">
                                    Rating
                                </span>
                                <span className="text-[10px]">
                                    {app.rating}
                                </span>
                            </div>

                        </div>

                        {/* Instructions */}
                        <div className="mt-6">
                            <h2 className="text-xs font-black uppercase tracking-wider">
                                Instructions
                            </h2>

                            <div className="mt-3 space-y-2">
                                {app.instructions.map(
                                    (instruction: string, index: number) => (
                                        <div
                                            key={index}
                                            className="flex gap-2 text-[9px] leading-4 text-gray-400"
                                        >
                                            <span className="text-gray-500">
                                                {index + 1}.
                                            </span>

                                            <span>{instruction}</span>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="mt-6 flex gap-2">

                            <button className="rounded-md bg-[#b7f000] px-4 py-2 text-[9px] font-bold text-black transition hover:bg-[#c8ff22]">
                                ⊞ &nbsp; Add to today's plan
                            </button>

                            <button className="rounded-md border border-white/10 px-4 py-2 text-[9px] text-gray-300 transition hover:border-white/20 hover:text-white">
                                ♡ &nbsp; Save for later
                            </button>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default DetailsPage;