import { TApps } from "@/app/types/apps.type";

export const getApps = async () => {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog", {
        cache: "no-store",
    });

    const data: TApps[] = await res.json();

    return data;
};

export const getApp = async (id: string) => {
    const res = await fetch(
        `https://api.abcz.workers.dev/api/fitlog/${id}`,
        {
            cache: "no-store",
        }
    );

    const data = await res.json();

    return data;
};