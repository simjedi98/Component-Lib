import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(MorphSVGPlugin);

export class tweens {
    static deltax_std(selector: any, target: string, dt: number) {
        return gsap.to(selector.value, {
            dx: target,
            duration: dt,
            ease: "power2.out"
        });
    }

    static deltay_std(selector: any, target: string, dt: number) {
        return gsap.to(selector.value, {
            dy: target,
            duration: dt,
            ease: "power2.out"
        });
    }

    static deltay_elastic(selector: any, target: string, dt: number) {
        return gsap.to(selector.value, {
            dy: target,
            duration: dt,
            ease: "elastic.out(1,0.5)"
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

    static morphvector_std(selector: any, target: string, dt: number) {
        return gsap.to(selector , {
            morphSVG: target,
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