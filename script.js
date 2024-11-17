const fills = document.querySelectorAll('.color-fill');
const rates = [2, 3, 4, 1, 5];
let animationId = null;

function animate(timestamp) {
    fills.forEach((fill, i) => {
        const progress = (timestamp * rates[i]) % 6000;
        const scale = progress < 3000 ? 1 - progress / 3000 : (progress - 3000) / 3000;
        fill.style.transform = `scaleY(${scale})`;
        fill.style.transformOrigin = 'bottom';
    });
    animationId = requestAnimationFrame(animate);
}

function startAnimation() {
    if (!animationId) animationId = requestAnimationFrame(animate);
}

function stopAnimation() {
    if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
    }
}

function resetAnimation() {
    stopAnimation();
    fills.forEach(fill => fill.style.transform = 'scaleY(1)');
}

document.getElementById('start').onclick = startAnimation;
document.getElementById('stop').onclick = stopAnimation;
document.getElementById('reset').onclick = resetAnimation;
