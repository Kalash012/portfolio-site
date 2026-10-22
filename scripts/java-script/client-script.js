
const lenis = new Lenis({
    smoothWheel: true,
    wheelMultiplier: 0.12,
    touchMultiplier: 0.3,
    duration: 1.5,
    easing: (t) => 1 - Math.pow(1 - t, 4)
});

function updateScroll() {
    if (window.matchMedia("(orientation: portrait)").matches) {
        lenis.start();
    } else {
        lenis.stop();
    }
}

updateScroll();

window.addEventListener("resize", updateScroll);

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
