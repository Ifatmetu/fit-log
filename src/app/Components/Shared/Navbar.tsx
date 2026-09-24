import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="border-b border-gray-800">
            <div className="container mx-auto h-[72px] px-6">
                <div className="flex h-full items-center justify-between">

                    {/* Left - Logo */}
                    <div className="flex items-center gap-3">
                        <Image
                            src={logo}
                            className="h-[30px] w-[30px]"
                            alt="Nav logo"
                        />

                        <h1 className="text-Black font-bold text-lg">
                            FITLOG
                        </h1>
                    </div>


                    {/* Center - Navigation */}
                    <div className="flex items-center gap-6">

                        <Link
                            href="/"
                            className="rounded-full bg-lime-950 px-5 py-2 text-sm font-medium text-lime-400"
                        >
                            Workouts
                        </Link>

                        <Link
                            href="/Myplan"
                            className="text-sm text-gray-400 hover:text-white"
                        >
                            My Plan
                        </Link>

                    </div>


                    {/* Right - Plan & Saved */}
                    <div className="flex items-center gap-6">

                        <button className="flex items-center gap-2 text-sm text-gray-300">
                            Plan
                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-lime-400 text-xs font-bold text-black">
                                0
                            </span>
                        </button>

                        <button className="flex items-center gap-2 text-sm text-gray-400">
                            Saved
                            <span className="flex h-5 w-5 items-center justify-center rounded-full border border-gray-700 text-xs text-gray-400">
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