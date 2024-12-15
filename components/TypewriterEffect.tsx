"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
    const words = [
        {
            text: "Airdrop",
        },
        {
            text: "Crypto",
        },
        {
            text: "Potential",
        },
        {
            text: "View Airdop, Click Button",
            className: "text-violet-500",
        },
    ];
    return (
        <div className="flex flex-col items-center justify-center">
            <TypewriterEffectSmooth words={words} />
            
        </div>
    );
}
