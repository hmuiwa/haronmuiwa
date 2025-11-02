// Navbar scroll effect
const navbar = document.getElementById('navbar');
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
        backToTop.classList.add('show');
    } else {
        navbar.classList.remove('scrolled');
        backToTop.classList.remove('show');
    }
});

// Mobile menu toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navLinks = document.getElementById('navLinks');

mobileMenuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    });
});

// Active nav link on scroll
const sections = document.querySelectorAll('section');
const navLinksAll = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinksAll.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Portfolio filter
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        const filterValue = btn.getAttribute('data-filter');
        
        portfolioItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, 10);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    });
});

// Portfolio Modal with Gallery
const readMoreBtns = document.querySelectorAll('.read-more-btn');
const portfolioModal = document.getElementById('portfolioModal');
const modalClose = document.querySelector('.modal-close');
const galleryPrev = document.getElementById('galleryPrev');
const galleryNext = document.getElementById('galleryNext');
const galleryIndicators = document.getElementById('galleryIndicators');
let currentImages = [];
let currentImageIndex = 0;

function updateGalleryImage(index) {
    if (currentImages.length === 0) return;
    
    currentImageIndex = index;
    const modalImage = document.getElementById('modalImage');
    modalImage.src = currentImages[currentImageIndex];
    
    // Update indicators
    const indicators = galleryIndicators.querySelectorAll('.indicator');
    indicators.forEach((ind, i) => {
        ind.classList.toggle('active', i === currentImageIndex);
    });
    
    // Show/hide navigation buttons
    if (galleryPrev && galleryNext) {
        galleryPrev.style.display = currentImages.length > 1 ? 'flex' : 'none';
        galleryNext.style.display = currentImages.length > 1 ? 'flex' : 'none';
    }
}

function createGalleryIndicators() {
    if (!galleryIndicators) return;
    galleryIndicators.innerHTML = '';
    
    if (currentImages.length > 1) {
        currentImages.forEach((_, index) => {
            const indicator = document.createElement('span');
            indicator.className = 'indicator';
            if (index === currentImageIndex) indicator.classList.add('active');
            indicator.addEventListener('click', () => updateGalleryImage(index));
            galleryIndicators.appendChild(indicator);
        });
    }
}

readMoreBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const portfolioItem = btn.closest('.portfolio-item');
        const title = portfolioItem.getAttribute('data-title') || portfolioItem.querySelector('h4').textContent;
        const category = portfolioItem.querySelector('.portfolio-category').textContent;
        const description = portfolioItem.getAttribute('data-description') || '';
        
        // Get images array from data attribute
        const imagesData = portfolioItem.getAttribute('data-images');
        currentImages = imagesData ? JSON.parse(imagesData) : [];
        currentImageIndex = 0;
        
        // Update modal content
        if (portfolioModal) {
            document.getElementById('modalTitle').textContent = title;
            document.getElementById('modalCategory').textContent = category;
            document.getElementById('modalDescription').textContent = description;
            
            // Setup gallery
            createGalleryIndicators();
            updateGalleryImage(0);
            
            // Show modal
            portfolioModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
});

// Gallery navigation
if (galleryPrev) {
    galleryPrev.addEventListener('click', () => {
        const newIndex = currentImageIndex > 0 ? currentImageIndex - 1 : currentImages.length - 1;
        updateGalleryImage(newIndex);
    });
}

if (galleryNext) {
    galleryNext.addEventListener('click', () => {
        const newIndex = currentImageIndex < currentImages.length - 1 ? currentImageIndex + 1 : 0;
        updateGalleryImage(newIndex);
    });
}

// Close modal
if (modalClose) {
    modalClose.addEventListener('click', () => {
        portfolioModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
}

// Close modal on outside click
if (portfolioModal) {
    portfolioModal.addEventListener('click', (e) => {
        if (e.target === portfolioModal) {
            portfolioModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
}

// Testimonial slider
let currentTestimonial = 0;
const testimonialCards = document.querySelectorAll('.testimonial-card');
const testimonialTrack = document.querySelector('.testimonial-track');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function updateTestimonialSlider() {
    if (testimonialTrack) {
        const offset = -currentTestimonial * 100;
        testimonialTrack.style.transform = `translateX(${offset}%)`;
    }
}

if (nextBtn && testimonialCards.length > 0) {
    nextBtn.addEventListener('click', () => {
        currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
        updateTestimonialSlider();
    });
}

if (prevBtn && testimonialCards.length > 0) {
    prevBtn.addEventListener('click', () => {
        currentTestimonial = (currentTestimonial - 1 + testimonialCards.length) % testimonialCards.length;
        updateTestimonialSlider();
    });
}

// Auto-slide testimonials every 5 seconds
if (testimonialCards.length > 0 && testimonialTrack) {
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
        updateTestimonialSlider();
    }, 5000);
}

// Contact form submission with Formspree
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

if (contactForm && formSuccess) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Get submit button
        const submitBtn = contactForm.querySelector('.btn-submit');
        const originalBtnText = submitBtn.querySelector('span').textContent;
        
        // Disable button and show loading state
        submitBtn.disabled = true;
        submitBtn.querySelector('span').textContent = 'Sending...';
        
        // Get form data
        const formData = new FormData(contactForm);
        
        try {
            // Send data to Formspree
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                // Show success message
                formSuccess.classList.add('show');
                
                // Reset form
                contactForm.reset();
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    formSuccess.classList.remove('show');
                }, 5000);
            } else {
                // Show error message
                alert('Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to send message. Please try again or contact directly via email.');
        } finally {
            // Re-enable button
            submitBtn.disabled = false;
            submitBtn.querySelector('span').textContent = originalBtnText;
        }
    });
}

// Newsletter form
const newsletterForms = document.querySelectorAll('.newsletter-form');

newsletterForms.forEach(newsletterForm => {
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = newsletterForm.querySelector('input').value;
            console.log('Newsletter subscription:', email);
            alert('Thank you for subscribing!');
            newsletterForm.reset();
        });
    }
});

// Back to top button
if (backToTop) {
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.service-card, .portfolio-item, .stat-item, .testimonial-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});
