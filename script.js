const flame = document.getElementById("flame");
const smoke = document.getElementById("smoke");

const message = document.getElementById("message");
const instruction = document.getElementById("instruction");
const result = document.getElementById("result");

const music = document.getElementById("birthdayMusic");

const musicButton = document.getElementById("musicButton");
const blowButton = document.getElementById("blowButton");
const restartButton = document.getElementById("restartButton");

let candleReady = false;
let isBlown = false;


// CAKE CREATION

setTimeout(() => {

    candleReady = true;

    message.textContent = "Your birthday cake is ready! 🎂";

    instruction.textContent =
        "Press SPACEBAR or tap the button to blow out your candle!";

    blowButton.hidden = false;

}, 4700);


// BACKGROUND MUSIC

musicButton.addEventListener("click", async () => {

    try {

        if (music.paused) {

            await music.play();

            musicButton.textContent = "⏸ Pause Music";

        } else {

            music.pause();

            musicButton.textContent = "🎵 Play Birthday Music";

        }

    } catch (error) {

        instruction.textContent =
            "Unable to play music. Please check your audio file.";

    }

});


// SPACEBAR TO BLOW THE CANDLE

document.addEventListener("keydown", (event) => {

    if (event.code === "Space") {

        event.preventDefault();

        if (candleReady && !isBlown) {

            blowCandle();

        }

    }

});


// TOUCH OR CLICK TO BLOW THE CANDLE

blowButton.addEventListener("click", () => {

    if (candleReady && !isBlown) {

        blowCandle();

    }

});


// EXTINGUISH THE CANDLE

function blowCandle() {

    if (isBlown) return;

    isBlown = true;

    // Turn off flame
    flame.classList.add("off");

    // Show smoke animation
    smoke.classList.add("show");

    // Birthday message
    message.textContent = "Make a wish! ✨";

    instruction.textContent =
        "Your wish has been sent to the universe!";

    result.textContent = "HAPPY BIRTHDAY! 🎉";

    // Stop music
    music.pause();

    // Hide buttons
    musicButton.hidden = true;
    blowButton.hidden = true;

    // Show restart button
    restartButton.hidden = false;

    // Start celebration
    createConfetti();

}


// CONFETTI CELEBRATION

function createConfetti() {

    const colors = [
        "#ff4d6d",
        "#ffd166",
        "#06d6a0",
        "#4cc9f0",
        "#c77dff"
    ];

    for (let i = 0; i < 100; i++) {

        const piece = document.createElement("div");

        piece.classList.add("confetti");

        piece.style.left = Math.random() * 100 + "vw";

        piece.style.backgroundColor =
            colors[Math.floor(Math.random() * colors.length)];

        piece.style.animationDelay =
            Math.random() * 2 + "s";

        document.body.appendChild(piece);

        // Remove confetti after animation
        setTimeout(() => {

            piece.remove();

        }, 5000);

    }

}


// RESTART CELEBRATION

restartButton.addEventListener("click", () => {

    location.reload();

});
```
