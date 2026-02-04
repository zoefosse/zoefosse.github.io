/* 
=====================================================
JAVASCRIPT FOR WEBSITE INTERACTIONS
=====================================================
This file handles:
- Gallery category filtering
- Lightbox (click to enlarge images)
- Scroll animations
- Navigation effects
=====================================================
*/

// Wait for page to load
document.addEventListener('DOMContentLoaded', function() {
    
    // =====================================================
    // GALLERY FILTERING
    // =====================================================
    const galleryTabs = document.querySelectorAll('.gallery-tab');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            galleryTabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Get the category to filter
            const category = this.getAttribute('data-category');
            
            // Show/hide gallery items
            galleryItems.forEach(item => {
                if (category === 'all') {
                    item.style.display = 'block';
                } else {
                    const itemCategory = item.getAttribute('data-category');
                    if (itemCategory === category) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                }
            });
        });
    });
    
    // =====================================================
    // LIGHTBOX (Click to Enlarge Images)
    // =====================================================
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    
    // Add click handler to all gallery items
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            if (img && lightbox && lightboxImg) {
                lightboxImg.src = img.src;
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            }
        });
    });
    
    // Close lightbox when clicking outside the image
    if (lightbox) {
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }
    
    // Close lightbox with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeLightbox();
        }
    });
    
    // =====================================================
    // SCROLL ANIMATIONS
    // =====================================================
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animateElements.forEach(el => observer.observe(el));
    
    // =====================================================
    // NAVIGATION SCROLL EFFECT
    // =====================================================
    const nav = document.querySelector('.main-nav');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        // Add background when scrolled
        if (currentScroll > 100) {
            nav.style.background = 'rgba(255, 255, 255, 0.95)';
        } else {
            nav.style.background = 'linear-gradient(to bottom, rgba(255, 255, 255, 0.95), transparent)';
        }
        
        lastScroll = currentScroll;
    });
    
    // =====================================================
    // SMOOTH IMAGE LOADING
    // =====================================================
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        // If image is already cached
        if (img.complete) {
            img.style.opacity = '1';
        }
    });
});

// =====================================================
// LIGHTBOX CLOSE FUNCTION
// =====================================================
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = ''; // Re-enable scrolling
    }
}

/* 
=====================================================
OPTIONAL: Add parallax effect to hero image
Uncomment if you want this effect
=====================================================
*/
/*
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero-image');
    if (hero) {
        const scrolled = window.pageYOffset;
        hero.style.transform = 'translateY(' + scrolled * 0.5 + 'px)';
    }
});
*/
