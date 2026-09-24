import Image from "next/image";
import banner from "@/assets/banner.png";

const Banner = () => {
    return (
        <div className="container mx-auto px-4">

            <div className="flex items-center justify-between overflow-hidden rounded-lg border border-gray-800 bg-[#15171c] px-6 py-6">

                {/* Left Content */}
                <div>
                    <h4 className="mb-3 text-[7px] font-bold tracking-wide text-lime-400">
                        WORKOUT LIBRARY
                    </h4>

                    <h1 className="text-3xl font-extrabold leading-[0.95] text-white">
                        TRAIN WITH INTENT. LOG
                        <br />
                        EVERY SET.
                    </h1>

                    <p className="mt-3 max-w-[430px] text-[9px] leading-4 text-gray-400">
                        Fitlog is a dark, no-nonsense gym companion: pick a lift, lock it
                        <br />
                        into today&apos;s plan, and watch the week&apos;s work add up.
                    </p>

                    <button className="mt-4 rounded-sm bg-lime-400 px-3 py-2 text-[8px] font-bold text-black hover:bg-lime-300">
                        BROWSE WORKOUTS
                    </button>
                </div>

                {/* Right Image */}
                <div className="relative h-[170px] w-[180px]">
                    <Image
                        src={banner}
                        alt="Workout"
                        fill
                        className="object-contain"
                    />
                </div>

            </div>

        </div>
    );
};

export default Banner;