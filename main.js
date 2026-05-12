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
// 5. HAMBURGER MENU TOGGLE
// ============================================
function initHamburgerMenu() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    const navLinksItems = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    navLinksItems.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

// ============================================
// 6. SCROLL PROGRESS INDICATOR
// ============================================
function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.id = 'scrollProgress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 4px;
        background: linear-gradient(90deg, #006A63, #4ade80);
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

// ============================================
// 7. TYPING ANIMATION
// ============================================
function initTypingAnimation() {
    const phrases = ['Full Stack Developer', 'Graphics Designer', 'UI/UX Designer', 'Freelancer'];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typeElement = document.getElementById('typedText');
    
    if (!typeElement) return;

    function type() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            typeElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typeElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            setTimeout(() => isDeleting = true, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
        }

        const typeSpeed = isDeleting ? 50 : 100;
        setTimeout(type, typeSpeed);
    }
    type();
}

// ============================================
// 8. LOADING SCREEN
// ============================================
function initLoadingScreen() {
    const loader = document.createElement('div');
    loader.id = 'loader';
    loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #091426;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        transition: opacity 0.5s ease;
    `;
    loader.innerHTML = `
        <div class="loader-content">
            <div class="loader-spinner"></div>
            <p style="color: white; margin-top: 20px; font-size: 18px;">Loading...</p>
        </div>
    `;
    document.body.appendChild(loader);

    const style = document.createElement('style');
    style.textContent = `
        .loader-spinner {
            width: 50px;
            height: 50px;
            border: 4px solid rgba(0, 106, 99, 0.3);
            border-top: 4px solid #006A63;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);

    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => loader.remove(), 500);
        }, 1000);
    });
}

// ============================================
// 9. PROJECT TILT EFFECT
// ============================================
function initProjectTilt() {
    const projects = document.querySelectorAll('.projectCon');
    
    projects.forEach(project => {
        project.addEventListener('mousemove', (e) => {
            const rect = project.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            project.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });
        
        project.addEventListener('mouseleave', () => {
            project.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });
}

// ============================================
// 10. SMOOTH SCROLL
// ============================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ============================================
// 11. STATS COUNTER ANIMATION
// ============================================
function initStatsCounter() {
    const stats = document.querySelectorAll('.statNumber');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const countTo = parseInt(target.getAttribute('data-count'));
                let count = 0;
                const duration = 2000;
                const increment = countTo / (duration / 16);
                
                const updateCount = () => {
                    count += increment;
                    if (count < countTo) {
                        target.textContent = Math.floor(count) + '+';
                        requestAnimationFrame(updateCount);
                    } else {
                        target.textContent = countTo + '+';
                    }
                };
                updateCount();
                observer.unobserve(target);
            }
        });
    }, { threshold: 0.5 });
    
    stats.forEach(stat => observer.observe(stat));
}

// ============================================
// 12. DOWNLOAD CV HANDLER
// ============================================
function initDownloadCV() {
    const downloadBtns = document.querySelectorAll('.downloadBtn');
    downloadBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Replace this with actual CV file path
            // Example: window.location.href = './media/your-cv.pdf';
            alert('Please add your CV PDF file to the media folder and update the download link in the code.');
        });
    });
}

// ============================================
// 13. CONTACT FORM HANDLER
// ============================================
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        // Let FormSubmit handle the submission
        // Just show a brief message
        const submitBtn = document.getElementById('submitBtn');
        submitBtn.value = 'Sending...';
        submitBtn.disabled = true;
        
        // Form will redirect to FormSubmit success page automatically
    });
}

// ============================================
// 11. INITIALIZATION ON DOM READY
// ============================================
function initializeApp() {
    initLoadingScreen();
    initCursorAnimation();
    initAOS();
    initThemeToggle();
    initHamburgerMenu();
    initScrollProgress();
    initTypingAnimation();
    initProjectTilt();
    initSmoothScroll();
    initStatsCounter();
    initDownloadCV();
    initContactForm();
}

// Run initialization when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}
