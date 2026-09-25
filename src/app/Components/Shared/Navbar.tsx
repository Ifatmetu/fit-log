import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="border-b border-[#202228] bg-[#0b0d10]">
            <div className="mx-auto max-w-6xl px-6">
                <div className="flex h-14 items-center justify-between">

                    {/* Logo */}
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

                    {/* Center Navigation */}
                    <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-1">
                        <Link
                            href="/"
                            className="rounded-full bg-[#263300] px-4 py-1.5 text-[10px] font-medium text-[#b7f000]"
                        >
                            Workouts
                        </Link>

                        <Link
                            href="/Myplan"
                            className="rounded-full px-4 py-1.5 text-[10px] font-medium text-gray-400 transition hover:text-white"
                        >
                            My Plan
                        </Link>
                    </div>

                    {/* Right Side */}
                    <div className="flex items-center gap-5 ">

                        <button className="flex items-center gap-1.5 text-[10px] text-gray-300">
                            Plan
                            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#b7f000] text-[9px] font-bold text-black">
                                0
                            </span>
                        </button>

                        <button className="flex items-center gap-1.5 text-[10px] text-gray-400">
                            Saved
                            <span className="flex h-4 w-4 items-center justify-center rounded-full border border-[#30333a] text-[9px] text-gray-400">
                                0
                            </span>
                        </button>

                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;