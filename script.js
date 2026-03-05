document.addEventListener('DOMContentLoaded', () => {
    // Sticky header scroll effect
    const siteHeader = document.querySelector('.site-header');
    if (siteHeader) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 15) {
                siteHeader.classList.add('scrolled');
            } else {
                siteHeader.classList.remove('scrolled');
            }
        });
    }

    // Mobile navigation toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.nav-links a');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            mainNav.classList.toggle('active');

            // Toggle icon
            const icon = menuToggle.querySelector('i');
            if (mainNav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });

        // Close mobile menu on link click
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                    menuToggle.setAttribute('aria-expanded', 'false');

                    const icon = menuToggle.querySelector('i');
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }

    // Cookie Banner
    const cookieBanner = document.getElementById('cookie-banner');
    const cookieAccept = document.getElementById('cookie-accept');
    const cookieDecline = document.getElementById('cookie-decline');

    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('klikaweby_cookie_consent');

    if (!cookieConsent && cookieBanner) {
        // Show banner after a short delay
        setTimeout(() => {
            cookieBanner.classList.remove('hidden');
        }, 1000);

        if (cookieAccept) {
            cookieAccept.addEventListener('click', () => {
                localStorage.setItem('klikaweby_cookie_consent', 'accepted');
                cookieBanner.classList.add('hidden');
                initGoogleAnalytics();
            });
        }

        if (cookieDecline) {
            cookieDecline.addEventListener('click', () => {
                localStorage.setItem('klikaweby_cookie_consent', 'declined');
                cookieBanner.classList.add('hidden');
            });
        }
    } else if (cookieConsent === 'accepted') {
        // Inicializace GA, pokud již dříve souhlasil
        initGoogleAnalytics();
    }

    // Google Analytics Initialization
    function initGoogleAnalytics() {
        // Zde můžete vložit reálné ID pro Google Analytics (odkomentujte kód a nahraďte 'G-XXXXXXXXXX')
        /*
        const gaScript = document.createElement('script');
        gaScript.async = true;
        gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX';
        document.head.appendChild(gaScript);

        const configScript = document.createElement('script');
        configScript.innerHTML = `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
        `;
        document.head.appendChild(configScript);
        */
        console.log("Google Analytics script aktivován po souhlasu.");
    }

    // Simple scroll animation for cards (optional subtle effect)
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    // Back to Top Logic
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Odstranění "index.html" a dynamické updatování URL v závislosti na scrollu (aby bylo vidět jen "kde se člověk nachází")
    const cleanCurrentUrl = () => {
        const url = new URL(window.location);
        if (url.pathname.endsWith('index.html')) {
            const newPath = url.pathname.replace(/index\.html$/, '');
            // Necháme hash (#sekce), pouze smazat index.html pro čistý vzhled
            window.history.replaceState(null, '', newPath + url.search + url.hash);
        }
    };
    cleanCurrentUrl();

    const scrollSections = document.querySelectorAll('section[id], header[id]');
    if (scrollSections.length > 0) {
        const scrollObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    const url = new URL(window.location);

                    // Bezpečně přepíšeme URL pouze tehdy, zmenil-li se hash
                    if (window.location.hash !== `#${id}`) {
                        const newPath = url.pathname.replace(/index\.html$/, '');
                        window.history.replaceState(null, '', newPath + url.search + `#${id}`);
                    }
                }
            });
        }, {
            rootMargin: '-30% 0px -60% 0px'
        });

        scrollSections.forEach(section => {
            scrollObserver.observe(section);
        });
    }
});
