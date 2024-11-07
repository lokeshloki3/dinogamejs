const dino = document.getElementById('dino');
const cactus = document.getElementById("cactus");

function jump() {
    if (!dino.classList.contains("jump")) {
        dino.classList.add("jump");

        setTimeout(function () {
            dino.classList.remove("jump");
        }, 400);
    }
}

// Trigger setInterval at every 10 milliseconds to check for collisions
let isAlive = setInterval(function () {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        alert("Game Over!");
    }
}, 10);

// Keyboard event listener (for desktop)
document.addEventListener("keydown", function (event) {
    jump();
});

// Mobile click/tap event listener
document.addEventListener("click", function (event) {
    jump();
});

// Alternatively, use touchstart for more responsive mobile behavior
document.addEventListener("touchstart", function (event) {
    jump();
});
