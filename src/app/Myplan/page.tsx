import { Suspense } from "react";
import MyPlanList from "@/app/Components/Homepage/component/MyPlanList";

const MyPlan = () => {
    return (
        <div className="min-h-screen bg-[#0b0d11] text-white">
            <main className="mx-auto max-w-6xl px-6 py-8">

                <div className="mb-5">
                    <h1 className="text-2xl font-black tracking-tight">
                        MY PLAN
                    </h1>

                    <p className="mt-1 text-xs text-gray-500">
                        Cap of five lifts for today. Finish them, then load more.
                    </p>
                </div>

                <Suspense fallback={<div>Loading workouts...</div>}>
                    <MyPlanList />
                </Suspense>

            </main>
        </div>
    );
};

export default MyPlan;