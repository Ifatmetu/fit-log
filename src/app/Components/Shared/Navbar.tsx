import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";
import Workout from "../Homepage/component/Workout";
import Myplan from "../Homepage/component/Myplan";
import PlanCount from "../Homepage/component/PlanCount";
import SavedCount from "../Homepage/component/SavedCount";

const Navbar = () => {
    return (
        <nav className="border-b border-[#202228] bg-[#0b0d10]">
            <div className="mx-auto max-w-6xl px-6">
                <div className="flex h-14 items-center justify-between">

                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src={logo}
                            alt="Fitlog logo"
                            width={28}
                            height={28}
                            className="h-7 w-7 object-contain"
                        />

                        <span className="text-sm font-black tracking-wide text-white">
                            FITLOG
                        </span>
                    </Link>

                    <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-1">
                        <Workout />
                        <Myplan />
                    </div>

                    {/* Right Side */}
                    <div className="flex items-center gap-5">

                        <button className="flex items-center gap-1.5 text-[10px] text-gray-300">
                            Plan
                            <PlanCount />
                        </button>

                        <button className="flex items-center gap-1.5 text-[10px] text-gray-400">
                            Saved
                            <SavedCount />
                        </button>

                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;