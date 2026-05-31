const facts = [
    "Deep learning models improve as you feed them more data.",
    "The transformer architecture powers modern AI like GPT and Gemini.",
    "Neural networks were inspired by the human brain.",
    "AI can now generate images, music, and even full websites.",
    "Reinforcement learning teaches AI through rewards and penalties.",
    "The first neural network concept was created in 1943.",
    "Machine learning is used in Netflix, YouTube, and TikTok recommendations.",
    "Self-driving cars rely heavily on computer vision models."
];

const chatContainer = document.getElementById("chatContainer");
const factBtn = document.getElementById("factBtn");
const themeToggle = document.getElementById("themeToggle");
const clickSound = document.getElementById("clickSound");

// Add message to chat
function addMessage(text) {
    const msg = document.createElement("div");
    msg.classList.add("message", "bot");
    msg.innerText = text;
    chatContainer.appendChild(msg);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

// Random fact generator
function generateFact() {
    clickSound.play();
    const randomIndex = Math.floor(Math.random() * facts.length);
    addMessage(facts[randomIndex]);
}

// Optional: Fetch fact from API
async function fetchFactFromAPI() {
    try {
        const res = await fetch("https://api.api-ninjas.com/v1/facts?limit=1", {
            headers: { "X-Api-Key": "YOUR_API_KEY" }
        });
        const data = await res.json();
        addMessage(data[0].fact);
    } catch {
        addMessage("API unavailable. Showing local fact instead.");
        generateFact();
    }
}

// Theme toggle
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
    themeToggle.textContent = document.body.classList.contains("light") ? "☀️" : "🌙";
});

// Button click
factBtn.addEventListener("click", () => {
    generateFact();
});

