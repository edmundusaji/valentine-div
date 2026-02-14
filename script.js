// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn"); // Note: Make sure class in HTML is .yes-btn

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
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    // Limit movement to inside the screen
    const randomX = Math.random() * (windowWidth * 0.6) - (windowWidth * 0.3);
    const randomY = Math.random() * (windowHeight * 0.6) - (windowHeight * 0.3);

    noBtn.style.position = "fixed"; 
    // We use center of screen as the anchor, then move from there
    noBtn.style.left = "50%"; 
    noBtn.style.top = "50%";
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

// Desktop hover
noBtn.addEventListener("mouseover", moveNoButton);

// Mobile touch
noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault();
    moveNoButton();
});

// Click fallback
noBtn.addEventListener("click", (e) => {
    e.preventDefault();
    moveNoButton();
});


// --- NEW FUNCTION: CREATE FALLING FLOWERS (LOCAL) ---
function createFallingFlowers() {
    const numberOfFlowers = 30; // Number of lilies

    for (let i = 0; i < numberOfFlowers; i++) {
        const flower = document.createElement('img');
        
        // --- CHANGE IS HERE ---
        // Now it uses your local file
        flower.src = "lily.png"; 
        
        flower.classList.add('falling-flower');

        // Randomize Position
        flower.style.left = Math.random() * 100 + 'vw';
        flower.style.top = -50 + 'px';

        // Randomize Size 
        const size = Math.random() * 40 + 30; // Between 30px and 70px
        flower.style.width = size + 'px';
        flower.style.height = 'auto';

        // Randomize Falling Speed 
        const duration = Math.random() * 3 + 2; // Between 2s and 5s
        
        // Randomize Delay 
        const delay = Math.random() * 2;
        
        // Apply the animation defined in CSS
        flower.style.animation = `fall ${duration}s linear ${delay}s forwards`;

        document.body.appendChild(flower);

        // Cleanup after animation
        setTimeout(() => {
            flower.remove();
        }, (duration + delay) * 1000 + 100);
    }
}


// --- YES BUTTON LOGIC ---

yesBtn.addEventListener("click", () => {
    title.textContent = "Yippeeee!";
    
    // Change Cat Image
    catImg.src = "cat_dance.gif"; 

    document.querySelector(".letter-window").classList.add("final");

    // Hide Buttons
    buttons.style.display = "none";

    // Show Final Text
    finalTextView.style.display = "block";

    // TRIGGER THE FALLING LILIES!
    createFallingFlowers();
});