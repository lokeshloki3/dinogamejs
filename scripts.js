const dino = document.getElementById('dino');
const cactus = document.getElementById("cactus");

function jump() {
    if (!dino.classList.contains("jump")) {
        dino.classList.add("jump");

        setTimeout(function () {
            dino.classList.remove("jump");
        }, 400);  // Increased jump duration for smoother jump
    }
}

// Trigger setInterval at every 10 milliseconds to check for collisions
let isAlive = setInterval(function () {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    // Collision detection: when the cactus is near the dino and the dino is on the ground
    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        // Collision detected, game over
        alert("Game Over!");
    }
}, 10);

// Keyboard event listener (for desktop)
document.addEventListener("keydown", function (event) {
    jump();
});

// Mobile click/tap event listener (log to check if event is triggered)
document.addEventListener("click", function (event) {
    console.log("Click detected!"); // Debugging line to check if the event is triggered
    jump();
});

// Alternatively, use touchstart for more responsive mobile behavior
document.addEventListener("touchstart", function (event) {
    console.log("Touch detected!"); // Debugging line to check if the event is triggered
    jump();
});
