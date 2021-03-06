const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const title = document.getElementById("text_game_over")
const cloud = document.getElementById('cloud');
let counter = 0

title.innerHTML = "Press any botton to start"

function jump() {
    if (dino.classList != 'jump') {
        dino.classList.add('jump')
        setTimeout(() => {
            dino.classList.remove('jump')
        }, 300);
    }
}

let isAlive
function launch() {
    isAlive = setInterval(() => {
        counter++
        title.innerHTML = counter

        let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
        let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));

        //dectect collision
        if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
            console.log('Collision')
            cactus.classList.remove('move_left')
            cactus.style.left = 50 + 'px'
            title.innerHTML = 'Game Over!\nYour score is: ' + counter
            clearInterval(isAlive)
            return
        }

    }, 10);
}

document.addEventListener('keydown', function (event) {
    clearInterval(isAlive)
    jump()
    cactus.classList.add('move_left')
    cloud.classList.add('move_left')

    launch()
})