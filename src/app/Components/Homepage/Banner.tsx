import Image from "next/image";
import banner from "@/assets/banner.png";
import BrowseButton from "./component/BrowseButton";
const Banner = () => {
    return (
        <section className="mx-auto max-w-7xl bg-[#0d0f13] px-3 pt-4 sm:px-6 sm:pt-8">

            {/* ================= MOBILE ================= */}
            <div className="flex flex-col items-center rounded-xl border border-[#15171D] bg-[#15171D] px-5 py-7 text-center sm:hidden">

                <p className="mb-3 text-[8px] font-bold tracking-[0.12em] text-[#b7f000]">
                    WORKOUT LIBRARY
                </p>

                <h1 className="text-[28px] font-black uppercase leading-[0.92] tracking-[-0.02em] text-white">
                    TRAIN WITH INTENT.
                    <br />
                    LOG EVERY SET.
                </h1>

                <p className="mt-3 max-w-[300px] text-[10px] leading-[1.5] text-gray-400">
                    Fitlog is a dark, no-nonsense gym companion: pick a lift, lock it
                    into today&apos;s plan, and watch the week&apos;s work add up.
                </p>

                {/* Mobile Image */}
                <div className="relative mt-5 h-[190px] w-[190px]">
                    <Image
                        src={banner}
                        alt="Workout"
                        fill
                        priority
                        className="object-contain"
                    />
                </div>

                {/* Mobile Button */}
                <BrowseButton/>

            </div>


            {/* ================= DESKTOP ================= */}
            <div className="relative hidden h-[315px] items-center justify-between overflow-hidden rounded-xl border border-[#15171D] bg-[#15171D] px-10 sm:flex">

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

                    <BrowseButton/>

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