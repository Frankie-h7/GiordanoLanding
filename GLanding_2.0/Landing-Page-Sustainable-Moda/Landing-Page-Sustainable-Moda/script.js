    // Scripts //

        // Inizializzazione AOS (Animate on Scroll)
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100
        });

        // Seleziona elementi del DOM
        const header = document.getElementById('header');
        const hamburger = document.getElementById('hamburger');
        const navLinks = document.querySelector('.nav-links');
        const modalTriggers = document.querySelectorAll('.modal-trigger');
        const modalOverlay = document.getElementById('subscribeModal');
        const modalClose = document.getElementById('modalClose');
        const backToTop = document.getElementById('backToTop');

        // Funzione per rendere l'header sticky durante lo scroll
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                header.classList.add('sticky');
                backToTop.classList.add('active');
            } else {
                header.classList.remove('sticky');
                backToTop.classList.remove('active');
            }
        });

        // Menu hamburger per mobile
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Chiudi menu mobile quando si clicca su un link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        // Modal popup
        modalTriggers.forEach(trigger => {
            trigger.addEventListener('click', function(e) {
                e.preventDefault();
                const modalId = this.getAttribute('data-modal');
                document.getElementById(modalId).classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        });

        modalClose.addEventListener('click', function() {
            modalOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        });

        // Chiudi modal cliccando fuori
        modalOverlay.addEventListener('click', function(e) {
            if (e.target === modalOverlay) {
                modalOverlay.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });

        // Smooth scroll per i link dell'header
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                if (this.getAttribute('href') !== '#') {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    const targetSection = document.querySelector(targetId);
                    
                    if (targetSection) {
                        window.scrollTo({
                            top: targetSection.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });

        // Form submission
        document.querySelector('.modal-form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Grazie per esserti iscritto! Riceverai presto una email con il tuo codice sconto del 10%.');
            modalOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        });