// ============================================
// 1. CURSOR ANIMATION
// ============================================
function initCursorAnimation() {
    const cursorElements = document.querySelectorAll('.cursor-star, .code-symbol');
    const positions = Array(cursorElements.length).fill().map(() => ({ x: 0, y: 0 }));

    document.addEventListener('mousemove', (e) => {
        positions[0].x = e.clientX;
        positions[0].y = e.clientY;

        for (let i = 1; i < positions.length; i++) {
            positions[i].x += (positions[i-1].x - positions[i].x) * 0.1;
            positions[i].y += (positions[i-1].y - positions[i].y) * 0.1;
        }

        cursorElements.forEach((el, i) => {
            el.style.left = positions[i].x - 6 + 'px';
            el.style.top = positions[i].y - 7 + 'px';
        });
    });
}

// ============================================
// 2. AOS ANIMATION ON SCROLL
// ============================================
function initAOS() {
    AOS.init({
        duration: 800,
        easing: "ease-in-out",
        once: true
    });
}

// ============================================
// 3. THEME TOGGLE FUNCTIONALITY
// ============================================
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const icon = themeToggle.querySelector('i');

    // Check for saved theme preference or default to light
    const currentTheme = localStorage.getItem('theme') || 'light';
    body.classList.add(currentTheme + '-theme');
    updateThemeIcon(currentTheme);

    themeToggle.addEventListener('click', () => {
        const isLight = body.classList.contains('light-theme');
        const newTheme = isLight ? 'dark' : 'light';
        
        body.classList.remove(isLight ? 'light-theme' : 'dark-theme');
        body.classList.add(newTheme + '-theme');
        
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme) {
        if (theme === 'dark') {
            icon.className = 'fas fa-moon';
        } else {
            icon.className = 'fas fa-sun';
        }
    }
}

// ============================================
// 4. CONTACT FORM DISABLED
// ============================================
// Email functionality removed per user request

// ============================================
// 5. INITIALIZATION ON DOM READY
// ============================================
function initializeApp() {
    initCursorAnimation();
    initAOS();
    initThemeToggle();
}

// Run initialization when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}
