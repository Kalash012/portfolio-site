
const clientItems = document.querySelectorAll('.client-item');

clientItems.forEach(item => {
    const image = item.querySelector('.client-preview');

    item.addEventListener('pointermove', (e) => {
        if (e.pointerType === 'touch') return;

        image.style.left = e.clientX + 'px';
        image.style.top = e.clientY + 'px';
    });
});




const lenis = new Lenis({
    smoothWheel: true,
    wheelMultiplier: 0.3,
    touchMultiplier: 0.3,
    duration: 1.5,
    easing: (t) => 1 - Math.pow(1 - t, 4)
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
