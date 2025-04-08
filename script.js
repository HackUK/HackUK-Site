document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;

    // Apply initial styles for the fade-in effect
    body.style.opacity = "0";
    body.style.transition = "opacity 1.5s ease-in-out";

    // Trigger the fade-in effect after a short delay
    setTimeout(() => {
        body.style.opacity = "1";
    }, 100);
});