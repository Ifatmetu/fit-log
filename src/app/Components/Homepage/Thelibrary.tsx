
import { TApps } from '@/app/types/apps.type';

const Thelibrary = async () => {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog", {
        cache: 'no-store',
    });

    const data: TApps[] = await res.json();

    return (
        <div className="min-h-screen bg-[#0d0f13] px-6 py-10 text-white">
            
            <div className="mx-auto mb-8 max-w-6xl">
                <h1 className="text-3xl font-black tracking-tight">
                    THE LIBRARY
                </h1>

                <p className="mt-1 text-sm text-gray-500">
                    Twelve lifts covering every major muscle group.
                </p>
            </div>

            
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                {data.map((app: TApps) => (
                    <div
                        key={app.id}
                        className="overflow-hidden rounded-2xl border border-white/5 bg-[#171a20] shadow-lg transition duration-300 hover:-translate-y-1 hover:border-white/10"
                    >
                        
                        <div className="relative h-[170px] overflow-hidden">
                            <img
                                src={app.image}
                                alt={app.name}
                                className="h-full w-full object-cover transition duration-500 hover:scale-105"
                            />

                            
                            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#171a20] to-transparent" />
                        </div>

                       
                        <div className="px-4 pb-4">
                            
                            <div className="mb-2 flex flex-wrap gap-1.5">
                                {app.muscleGroups.map((muscle: string) => (
                                    <span
                                        key={muscle}
                                        className="rounded-full bg-[#b7f000] px-2 py-1 text-[9px] font-black uppercase tracking-wide text-black"
                                    >
                                        {muscle}
                                    </span>
                                ))}
                            </div>

                            
                            <h3 className="text-sm font-black uppercase tracking-tight">
                                {app.name}
                            </h3>

                           
                            <p className="mt-1 text-[10px] text-gray-500">
                                {app.equipment}
                            </p>

                            
                            <div className="my-3 h-px bg-white/10" />

                            
                            <div className="flex items-center justify-between text-[10px] text-gray-400">
                                <span>◷ {app.duration} min</span>

                                <span>
                                    🔥 {app.caloriesBurned} kcal
                                </span>

                                <span>★ {app.rating}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Thelibrary;
