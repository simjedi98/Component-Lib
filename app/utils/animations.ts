import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

export class tweens {
    static scrolleffect(selector: any, trigger: string, target: string, start: string) {
        return gsap.to(selector.value, {
            scrollTrigger: {
                trigger: trigger,
                scroller: '.page-wrapper',
                start: start,
                end: start,
                toggleActions: "play none reverse none"
            },
            dx: target,
            duration: 1,
            stagger: 0.3,
            ease: "power2.out"
        })
    }
}