// File for animation of navigation bar

import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

export function moveSearch(isActive) {
    if (isActive) {
        gsap.to("#search", {
            x: 100,
            width: "18%",
            backgroundColor: "blue",
        });
    } else {
        gsap.to("#search", {
            x: 0,
            width: "100%",
            backgroundColor: "rgb(127 29 29)",
        });
    }
}

export function onLoad() {

    const elementsToAnimate = ["#footer-texts", "#copyright-message", "#footer-area"];


    gsap.from("#header", {
        opacity: 0,
        duration: 1,
    });

    gsap.from("#logo", {
        x: -100,
        opacity: 0,
        duration: 1,
        delay: 1,
    });

    gsap.from("#searchBox", {
        y: -100,
        opacity: 0,
        delay: 0.9,
        duration: 1,
    });


    gsap.from("#footer-area", {
        opacity: 0.4,
        duration: 1,
        delay: 1,
    });

    gsap.from("#footer-texts", {
        y: 20,
        opacity: 0,
        delay: 1,
        duration: 1,
    });

    gsap.from("#copyright-message", {
        y: -30,
        opacity: 0,
        delay: 1,
        duration: 1,
    });
    
}

// toggle "isActive" only if search area is empty otherwise perform search operation

export function toggleActive(isActive, setIsActive) {
    let searchArea = document.getElementById("searchArea");
    if (searchArea.value == "") {
        setIsActive(!isActive);
        moveSearch(isActive);
    } else {
        // perform search operation
        alert("Search operation will get performed");
    }
}
