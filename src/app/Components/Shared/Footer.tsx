import Image from "next/image";
import logo from "@/assets/logo.png";

const Footer = () => {
    return (
        <footer className="border-t border-white/10 bg-[#090b0e] px-7 py-10">
            <div className="mx-auto flex max-w-[1460px] items-center justify-between">
                
                
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

                
                <p className="text-sm text-gray-500">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
