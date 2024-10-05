function showFireTransition() {
    const fireTransition = document.createElement('div');
    fireTransition.className = 'page-transition';
    document.body.appendChild(fireTransition);

    setTimeout(() => {
        fireTransition.remove();  // Remove after animation completes
    }, 3000);
}

// Trigger fire transition on navigation
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        showFireTransition();
        setTimeout(() => {
            window.location.href = e.target.href;
        }, 3000);  // Wait for fire animation to finish
    });
});

// Floating interactive elements
document.querySelectorAll('.floating-element').forEach(elem => {
    elem.addEventListener('click', () => {
        elem.style.animation = 'disappear 3s forwards';
        const audio = new Audio('enjoy.mp3');
        audio.play();
        setTimeout(() => {
            elem.remove();  // Remove after 3 seconds
        }, 3000);
    });
});
