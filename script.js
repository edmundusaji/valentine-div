// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalTextView = document.getElementById("final-text");

// Click Envelope
envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout(() => {
        document.querySelector(".letter-window").classList.add("open");
    }, 50);
});

// --- LOGIC TO MOVE THE NO BUTTON (MOBILE COMPATIBLE) ---

function moveNoButton() {
    // 1. Get the window width/height to know boundaries
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    // 2. Define a safe area so it doesn't go off screen
    // We limit movement to 80% of the screen size
    const randomX = Math.random() * (windowWidth * 0.6) - (windowWidth * 0.3);
    const randomY = Math.random() * (windowHeight * 0.6) - (windowHeight * 0.3);

    // 3. Apply the move
    // We switch to 'fixed' position so it breaks out of the layout and moves freely
    noBtn.style.position = "fixed"; 
    noBtn.style.left = "50%"; // Reset to center relative
    noBtn.style.top = "50%";
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

// Add 'mouseover' for Desktop (PC)
noBtn.addEventListener("mouseover", moveNoButton);

// Add 'touchstart' for Mobile (Phones)
// 'touchstart' happens the moment a finger touches the screen
noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault(); // Prevents the button from actually being clicked
    moveNoButton();
});

// Add 'click' just in case
noBtn.addEventListener("click", (e) => {
    e.preventDefault();
    moveNoButton();
});

// --- YES BUTTON LOGIC ---

yesBtn.addEventListener("click", () => {
    title.textContent = "Yippeeee!";
    
    // Change Cat Image
    catImg.src = "cat_dance.gif"; 

    // Add class for styling
    document.querySelector(".letter-window").classList.add("final");

    // Hide Buttons
    buttons.style.display = "none";

    // Show Final Text
    finalTextView.style.display = "block";
});