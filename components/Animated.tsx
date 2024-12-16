import { AnimatedTestimonials } from "./ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
    const testimonials = [
        {
            quote:
                "Crypto airdrops are free token distribution programs by blockchain projects to promote their coins or platforms.",
            name: "Paws",
            designation: "Airdrop Paws",
            button: <a href="https://t.me/PAWSOG_bot/PAWS?startapp=pVMjckVZ">Start Bot</a>,
            src: "https://cdn.dribbble.com/userupload/18012216/file/original-206ccbbb7100ca4546d8aa074503affc.jpg?resize=1024x923&vertical=center",
        },
        {
            quote:
                "Crypto airdrops are free token distribution programs by blockchain projects to promote their coins or platforms.",
            name: "Agent301",
            designation: "Airdrop Agent301",
            button: <a href="https://t.me/Agent301Bot/app?startapp=onetime1551592381">Start Bot</a>,
            src: "https://cdn.dribbble.com/userupload/18031426/file/original-c851db0e4fc397f009f9f78182037bf6.jpg?resize=752x&vertical=center",
        },
        {
            quote:
                "Crypto airdrops are free token distribution programs by blockchain projects to promote their coins or platforms.",
            name: "Clayton X Babydoge",
            designation: "Airdrop Clayton X Babydoge",
            button: <a href="https://t.me/BabyDogePAWS_Bot/game?startapp=r_1551592381">Start Bot</a>,
            src: "https://cdn.dribbble.com/userupload/18012362/file/original-e95307f1eae56228c64af7d48eded9ec.jpg?resize=1024x1024&vertical=center",
        },
    ];
    return <AnimatedTestimonials testimonials={testimonials} />;
}