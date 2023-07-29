const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

const score = document.querySelector(".score--value")
const finalScore = document.querySelector(".final-score > span")
const menu = document.querySelector(".menu-screen")
const buttonPlay = document.querySelector(".btn-play")

const audio = new Audio("../assets/audio.mp3")

const size = 30

// Stephany
const snake = [
    
]

let direction

// Stephany
const drawSnake = () => {
    
}

// Aline
const moveSnake = () => {
    if (!direction) return

    const head = snake[snake.length - 1]

    if(direction == "right") {
        snake.push({ x: head.x + size, y: head.y })
    }

    if(direction == "left") {
        snake.push({ x: head.x - size, y: head.y })
    }

    if(direction == "down") {
        snake.push({ x: head.x, y: head.y + size })
    }

    if(direction == "up") {
        snake.push({ x: head.x, y: head.y - size })
    }

    snake.shift() // remove o último elemento do array 
}

// Aline
setInterval(() => {
    ctx.clearRect(0, 0, 600, 600)

    moveSnake()
    drawSnake()
}, 300)