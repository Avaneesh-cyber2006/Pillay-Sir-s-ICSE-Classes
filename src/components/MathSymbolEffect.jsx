import { useEffect } from 'react';

const SYMBOLS = ['π', '∑', '√', 'θ', '∞', '∆', '∫', 'Ω', 'α', 'β', 'γ', 'Φ', 'μ', 'Σ'];
const COLORS = ['#D96B1F', '#555555', '#E58A45'];

export default function MathSymbolEffect() {
  useEffect(() => {
    const activeTimeouts = new Set();
    const activeElements = new Set();

    const handleMouseMove = (event) => {
      const mathSymbol = document.createElement('span');
      mathSymbol.textContent = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
      mathSymbol.classList.add('math-symbol');

      mathSymbol.style.position = 'absolute';
      mathSymbol.style.left = `${event.clientX}px`;
      mathSymbol.style.top = `${event.clientY}px`;
      mathSymbol.style.fontSize = `${Math.random() * 20 + 15}px`;
      mathSymbol.style.color = COLORS[Math.floor(Math.random() * COLORS.length)];

      document.body.appendChild(mathSymbol);
      activeElements.add(mathSymbol);

      const t1 = setTimeout(() => {
        mathSymbol.style.opacity = '0';
        mathSymbol.style.transform = 'scale(0.5)';
        const t2 = setTimeout(() => {
          if (mathSymbol.parentNode) {
            mathSymbol.remove();
          }
          activeElements.delete(mathSymbol);
          activeTimeouts.delete(t2);
        }, 250);
        activeTimeouts.add(t2);
        activeTimeouts.delete(t1);
      }, 250);

      activeTimeouts.add(t1);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      activeTimeouts.forEach((timeoutId) => clearTimeout(timeoutId));
      activeElements.forEach((el) => {
        if (el.parentNode) {
          el.remove();
        }
      });
    };
  }, []);

  return null;
}
