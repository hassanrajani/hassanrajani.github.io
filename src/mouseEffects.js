// Simple Mouse Effects Handler
class MouseEffects {
    constructor() {
        this.cursorDot = null;
        this.cursorRing = null;
        this.isInitialized = false;
        this.mouseX = 0;
        this.mouseY = 0;
        this.isHovering = false;
        this.isClicking = false;
        this.init();
    }

    init() {
        if (this.isInitialized) return;
        
        // Check for reduced motion and touch devices
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || 
            window.matchMedia('(hover: none) and (pointer: coarse)').matches) {
            return;
        }

        this.createCursorElements();
        this.bindEvents();
        this.startAnimationLoop();
        this.isInitialized = true;
    }

    createCursorElements() {
        // Create cursor dot
        this.cursorDot = document.createElement('div');
        this.cursorDot.className = 'cursor-dot';
        document.body.appendChild(this.cursorDot);

        // Create cursor ring
        this.cursorRing = document.createElement('div');
        this.cursorRing.className = 'cursor-ring';
        document.body.appendChild(this.cursorRing);
    }

    bindEvents() {
        // Mouse move handler
        document.addEventListener('mousemove', (e) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;
        });

        // Mouse down/up handlers
        document.addEventListener('mousedown', () => {
            this.isClicking = true;
            this.cursorDot?.classList.add('click');
        });

        document.addEventListener('mouseup', () => {
            this.isClicking = false;
            this.cursorDot?.classList.remove('click');
        });

        // Add interactive hover effects
        this.addInteractiveEffects();
    }

    startAnimationLoop() {
        const animate = () => {
            // Update cursor positions
            if (this.cursorDot) {
                this.cursorDot.style.left = this.mouseX + 'px';
                this.cursorDot.style.top = this.mouseY + 'px';
            }

            if (this.cursorRing) {
                this.cursorRing.style.left = this.mouseX + 'px';
                this.cursorRing.style.top = this.mouseY + 'px';
            }

            requestAnimationFrame(animate);
        };
        animate();
    }

    addInteractiveEffects() {
        // Simple interactive elements
        const interactiveElements = document.querySelectorAll(
            'button, a, .card, .project-card, .skill-card, .experience-card, .education-card'
        );
        
        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                this.isHovering = true;
                this.cursorDot?.classList.add('hover');
                this.cursorRing?.classList.add('hover');
            });

            element.addEventListener('mouseleave', () => {
                this.isHovering = false;
                this.cursorDot?.classList.remove('hover');
                this.cursorRing?.classList.remove('hover');
            });

            // Simple click effect
            element.addEventListener('click', (e) => {
                this.createSimpleRipple(e, element);
            });
        });
    }

    createSimpleRipple(event, element) {
        const ripple = document.createElement('span');
        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;

        ripple.className = 'simple-ripple';
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';

        // Ensure element has relative positioning
        if (getComputedStyle(element).position === 'static') {
            element.style.position = 'relative';
        }

        element.appendChild(ripple);

        setTimeout(() => {
            if (ripple.parentNode) {
                ripple.parentNode.removeChild(ripple);
            }
        }, 600);
    }

    // Method to refresh effects for dynamically added elements
    refresh() {
        setTimeout(() => {
            this.addInteractiveEffects();
        }, 100);
    }

    // Simple cleanup method
    destroy() {
        // Remove cursor elements
        [this.cursorDot, this.cursorRing].forEach(element => {
            if (element && element.parentNode) {
                element.parentNode.removeChild(element);
            }
        });

        this.isInitialized = false;
    }
}

// Initialize mouse effects when DOM is loaded
let mouseEffectsInstance = null;

// Auto-initialize for non-React environments
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        if (!mouseEffectsInstance) {
            mouseEffectsInstance = new MouseEffects();
        }
    });
}

// Export for use in React components
export default MouseEffects;