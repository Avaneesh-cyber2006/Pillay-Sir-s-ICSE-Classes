document.addEventListener("mousemove", (event) => {
    const symbols = ["π", "∑", "√", "θ", "∞", "∆", "∫", "Ω", "α", "β", "γ", "Φ", "μ", "Σ"];

    const mathSymbol = document.createElement("span");
    mathSymbol.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    mathSymbol.classList.add("math-symbol");

    mathSymbol.style.position = "absolute";
    mathSymbol.style.left = `${event.clientX}px`;
    mathSymbol.style.top = `${event.clientY}px`;
    mathSymbol.style.fontSize = `${Math.random() * 20 + 15}px`; // Random size for variation
    mathSymbol.style.color = ["#D96B1F", "#555555", "#E58A45"][Math.floor(Math.random() * 3)];

    document.body.appendChild(mathSymbol);

    setTimeout(() => {
        mathSymbol.style.opacity = "0";
        mathSymbol.style.transform = `scale(0.5)`;
        setTimeout(() => mathSymbol.remove(), 250);
    }, 250);
});
