// Typing Animation for Skills
const createTypingAnimation = () => {
    const typingElement = document.getElementById('typingAnimation');
    const skills = [
        'HTML5 & CSS3',
        'JavaScript (ES6+)',
        'Responsive Design',
        'Tailwind CSS',
        'React.js',
        'Problem Solving'
    ];

    if (!typingElement) return;

    let skillIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const delayBetweenSkills = 2000;

    const type = () => {
        const currentSkill = skills[skillIndex];
        
        if (isDeleting) {
            charIndex--;
        } else {
            charIndex++;
        }

        typingElement.textContent = currentSkill.substring(0, charIndex);

        let timeout = isDeleting ? deletingSpeed : typingSpeed;

        if (!isDeleting && charIndex === currentSkill.length) {
            // Finished typing, wait before deleting
            timeout = delayBetweenSkills;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            // Finished deleting, move to next skill
            isDeleting = false;
            skillIndex = (skillIndex + 1) % skills.length;
            timeout = 500;
        }

        setTimeout(type, timeout);
    };

    // Start the animation
    setTimeout(type, 500);
};

window.addEventListener('DOMContentLoaded', createTypingAnimation);

// Initialize all functionality when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;

    if (themeToggle) {
        themeToggle.addEventListener('click', (e) => {
            e.preventDefault();
            const isDark = html.classList.contains('dark');
            if (isDark) {
                html.classList.remove('dark');
                localStorage.setItem('theme', 'light');
                console.log('Switched to light mode');
            } else {
                html.classList.add('dark');
                localStorage.setItem('theme', 'dark');
                console.log('Switched to dark mode');
            }
        });
    }

    // Mobile Menu Toggle
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close mobile menu when a link is clicked
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // Set active nav link based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('text-blue-600', 'dark:text-blue-400', 'bg-gray-100', 'dark:bg-slate-800');
        }
    });
});

// Scroll Reveal Animation
const revealElements = () => {
    const elements = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });

    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
};

window.addEventListener('DOMContentLoaded', revealElements);

// Scroll progress indicator
const createProgressBar = () => {
    const progressBar = document.createElement('div');
    progressBar.id = 'scrollProgress';
    progressBar.style.cssText = `
        position: fixed;
        top: 64px;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, #3b82f6, #60a5fa);
        width: 0%;
        z-index: 40;
        transition: width 0.2s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
};

window.addEventListener('DOMContentLoaded', createProgressBar);

// Form validation helper
const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

// Prevent FOUC
document.documentElement.style.visibility = 'visible';
