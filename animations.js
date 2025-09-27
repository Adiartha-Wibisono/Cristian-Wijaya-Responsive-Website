document.addEventListener('DOMContentLoaded', function() {
    // Scroll reveal animation for sections
    const revealElements = document.querySelectorAll('.section-header, .product-card, .about-content, .season-content, .craft-content, .craft-gallery');
    
    const revealOnScroll = function() {
        for (let i = 0; i < revealElements.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = revealElements[i].getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                revealElements[i].classList.add('fade-in');
            }
        }
    };
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check on page load
    
    // Parallax effect for hero and about preview sections
    const parallaxSections = document.querySelectorAll('.hero, .about-preview');
    
    window.addEventListener('scroll', function() {
        for (let i = 0; i < parallaxSections.length; i++) {
            const section = parallaxSections[i];
            const scrollPosition = window.pageYOffset;
            const sectionPosition = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            // Only apply parallax if the section is in view
            if (scrollPosition > sectionPosition - window.innerHeight && 
                scrollPosition < sectionPosition + sectionHeight) {
                const yPos = -(scrollPosition - sectionPosition) * 0.2;
                section.style.backgroundPosition = `center ${yPos}px`;
            }
        }
    });
    
    // Subtle hover animations for interactive elements
    const interactiveElements = document.querySelectorAll('.btn, .product-card, .craft-image');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
            
            if (this.classList.contains('btn')) {
                this.style.transform = 'translateY(-2px)';
            } else if (this.classList.contains('product-card')) {
                this.style.transform = 'translateY(-5px)';
                this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.15)';
            } else if (this.classList.contains('craft-image')) {
                this.style.transform = 'scale(1.02)';
                this.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.12)';
            }
        });
        
        element.addEventListener('mouseleave', function() {
            if (this.classList.contains('btn')) {
                this.style.transform = 'translateY(0)';
            } else if (this.classList.contains('product-card')) {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            } else if (this.classList.contains('craft-image')) {
                this.style.transform = 'scale(1)';
                this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            }
        });
    });
    
    // Counter animation for stats
    const stats = document.querySelectorAll('.stat-number');
    
    const animateCounters = function() {
        stats.forEach(stat => {
            const target = parseInt(stat.textContent, 10);
            let count = 0;
            const duration = 2000; // 2 seconds
            const frameDuration = 1000 / 60; // 60 fps
            const totalFrames = Math.round(duration / frameDuration);
            const increment = target / totalFrames;
            
            const counter = setInterval(() => {
                count += increment;
                if (count >= target) {
                    stat.textContent = target + '+';
                    clearInterval(counter);
                } else {
                    stat.textContent = Math.floor(count) + '+';
                }
            }, frameDuration);
        });
    };
    
    // Run counter animation when stats section comes into view
    const craftContent = document.querySelector('.craft-content');
    if (craftContent) {
        window.addEventListener('scroll', function() {
            const rect = craftContent.getBoundingClientRect();
            if (rect.top <= window.innerHeight * 0.8 && rect.bottom >= 0) {
                animateCounters();
                // Remove event listener after animation starts
                window.removeEventListener('scroll', this);
            }
        });
    }
});