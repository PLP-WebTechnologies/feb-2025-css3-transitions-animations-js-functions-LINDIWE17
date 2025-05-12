document.addEventListener("DOMContentLoaded", () => {
    // Store Animation Preference in localStorage
    localStorage.setItem("animationStyle", "fade-in");
    document.querySelector(".welcome").classList.add(localStorage.getItem("animationStyle"));

    // Interactive Button Effect
    document.querySelector(".btn").addEventListener("mouseover", () => {
        document.querySelector(".btn").classList.toggle("glow");
    });

    // Secret Key Animation
    document.addEventListener("keypress", (e) => {
        if (e.key.toLowerCase() === "s") {
            document.querySelector(".hidden-element").classList.add("reveal");
            localStorage.setItem("secretUnlocked", true);
        }
    });

    // Background Transition on Click
    document.querySelector(".btn").addEventListener("click", () => {
        document.body.style.backgroundColor = "#333";
    });
});