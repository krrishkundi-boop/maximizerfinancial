document.addEventListener('DOMContentLoaded', () => {
    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '10px 0';
            navbar.style.boxShadow = '0 10px 30px -10px rgba(2, 12, 27, 0.7)';
        } else {
            navbar.style.padding = '20px 0';
            navbar.style.boxShadow = 'none';
        }
    });

    // Mobile Menu Toggle (Simplified for now)
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenu.addEventListener('click', () => {
        // This is a placeholder for a more complex mobile drawer
        alert('Mobile menu functionality can be expanded with a side drawer.');
    });

    // Form Submission Handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Gather data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());
            
            console.log('Form Submitted:', data);
            
            // Show success message (UI only for now)
            const submitBtn = contactForm.querySelector('button');
            const originalText = submitBtn.innerText;
            
            submitBtn.innerText = 'Sending...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                alert('Thank you for your inquiry, ' + data.name + '. Our financial experts will contact you shortly.');
                contactForm.reset();
                submitBtn.innerText = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }

    // Scroll Reveal Animation (Intersection Observer)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.service-card, .about-content, .contact-info').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });

    // Modal Logic
    const modal = document.getElementById('enquiryModal');
    const closeBtn = document.getElementById('closeModal');
    const modalForm = document.getElementById('modalForm');

    if (modal) {
        // Show modal after 3 seconds
        setTimeout(() => {
            if (!localStorage.getItem('modalShown')) {
                modal.classList.add('active');
            }
        }, 3000);

        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
            localStorage.setItem('modalShown', 'true'); // Only show once per session/visit
        });

        // Close on clicking outside
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                localStorage.setItem('modalShown', 'true');
            }
        });

        if (modalForm) {
            modalForm.addEventListener('submit', (e) => {
                e.preventDefault();
                alert('Thank you! Our experts will contact you shortly.');
                modal.classList.remove('active');
                localStorage.setItem('modalShown', 'true');
            });
        }
    }
});
