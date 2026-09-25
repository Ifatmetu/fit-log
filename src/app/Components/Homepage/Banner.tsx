import Image from "next/image";
import banner from "@/assets/banner.png";

const Banner = () => {
    return (
        <section className="bg-[#0d0f13] mx-auto max-w-7xl px-6 pt-8">

            <div className="relative flex h-[315px] items-center justify-between overflow-hidden rounded-xl border border-[#15171D] bg-[#15171D] px-10">

                {/* Left Content */}
                <div className="relative z-10 max-w-[500px]">

                    <p className="mb-4 text-[9px] font-bold tracking-[0.12em] text-[#b7f000]">
                        WORKOUT LIBRARY
                    </p>

                    <h1 className="text-[36px] font-black uppercase leading-[0.92] tracking-[-0.02em] text-white">
                        TRAIN WITH INTENT. LOG
                        <br />
                        EVERY SET.
                    </h1>

                    <p className="mt-4 max-w-[430px] text-[11px] leading-[1.5] text-gray-400">
                        Fitlog is a dark, no-nonsense gym companion: pick a lift, lock it
                        <br />
                        into today&apos;s plan, and watch the week&apos;s work add up.
                    </p>

                    <button className="mt-5 rounded-md bg-[#b7f000] px-4 py-2.5 text-[9px] font-black text-black transition hover:bg-[#c8ff20]">
                        BROWSE WORKOUTS
                    </button>

                </div>

                {/* Right Image */}
                <div className="absolute right-10 top-1/2 h-[250px] w-[240px] -translate-y-1/2">
                    <Image
                        src={banner}
                        alt="Workout"
                        fill
                        priority
                        className="object-contain"
                    />
                </div>

            </div>

        </section>
    );
};

export default Banner;