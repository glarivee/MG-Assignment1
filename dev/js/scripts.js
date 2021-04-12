import { gsap } from "gsap";

let shapeTL = gsap.timeline();

shapeTL.to("#green-circle", {duration: 5, scaleX:-1, scaleY:-1})
    .to("#green-circle",{duration:3,ease:"elastic.out",y:300})
    .to("#green-circle",{duration:2.5,ease:"steps(12)",y:-100})
    .to("#green-circle",{duration:2.5,ease:"bounce.inOut",y:300})
    .to("#green-circle",{duration:2.5,ease:"circ.inOut",x:-900})
    .to("#green-circle", {duration:2.5,ease:"power4.out(1.7)",x:-1})
    .to("#green-circle", {duration: 1, scaleX:-20, scaleY:-1})
    .to("#green-circle", {duration: 1, scaleX:-1, scaleY:-20})
    .to("#green-circle", {duration: 2, scaleX:-1, scaleY:-1})
//WRITE GSAP TRANSITION

//