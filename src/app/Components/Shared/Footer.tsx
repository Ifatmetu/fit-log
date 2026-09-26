import Image from "next/image";
import logo from "@/assets/logo.png";

const Footer = () => {
    return (
        <footer className="border-t border-white/10 bg-[#090b0e]">
            <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-5 px-5 py-10 text-center sm:flex-row sm:px-10 sm:text-left">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <Image
                        src={logo}
                        className="h-[30px] w-[30px]"
                        alt="Nav logo"
                    />

                    <span className="text-lg font-black tracking-tight text-white">
                        FITLOG
                    </span>
                </div>

                {/* Copyright */}
                <p className="text-xs text-gray-500 sm:text-sm">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>
            </div>
        </footer>
    );
};

export default Footer;