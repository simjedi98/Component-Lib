import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

export class tweens {
    static deltax_std(selector: any, target: string, dt: number) {
        return gsap.to(selector.value, {
            dx: target,
            duration: dt,
            ease: "power2.out"
        });
    }

    static changealpha_std(selector: any, target: number, dt: number) {
        return gsap.to(selector.value, {
            opacity: target,
            duration: dt,
            ease: "power2.out"
        });
    }

    static changeaccent_std(selector: any, target: string, dt: number) {
        return gsap.to(selector.value, {
            accent: target,
            duration: dt,
            ease: "power2.out"
        });
    }
}

export class timelines {
    static default_timeline() {
        const tl = gsap.timeline({paused: true});

        return tl;
    }
}