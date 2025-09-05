import { useEffect } from 'react';

const MouseEffectsEnhancer = () => {
    useEffect(() => {
        // Add hover glow to cards
        const addHoverEffects = () => {
            const cards = document.querySelectorAll(
                '.project-card, .skill-card, .experience-card, .education-card'
            );
            
            cards.forEach(card => {
                card.classList.add('hover-glow');
            });
        };

        const timer = setTimeout(() => {
            addHoverEffects();
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return null;
};

export default MouseEffectsEnhancer;