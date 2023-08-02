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
    { x: 200, y: 200 },
    { x: 230, y: 200 },
    { x: 260, y: 200 },
    { x: 290, y: 200 }
]


//Aline
const incrementScore = () => {
    
}

// Stephany
const randomNumber = (min, max) => {
    
}

// Stephany
const randomPosition = () => {
    
}

// Stephany
const randomColor = () => {
    
}

// Stephany
const food = {
    
}

let direction, loopId

// Stephany
const drawFood = () => {
    
}

// Stephany
const drawSnake = () => {
    ctx.fillStyle = "#ddd"

    snake.forEach((position, index) => {
        if(index == snake.length - 1) {
            ctx.fillStyle = "#ffb6c0"
        }
        ctx.fillRect(position.x, position.y, size, size)
    })
    
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
const drawGrid = () => {
    ctx.lineWidth = 1
    ctx.strokeStyle = "#191919"

    for (let i = 30; i < canvas.width; i += 30) {
        ctx.beginPath()
        ctx.lineTo(i, 0)
        ctx.lineTo(i, 600)
        ctx.stroke()

        ctx.beginPath()
        
        ctx.lineTo(0, i)
        ctx.lineTo(600, i)

        ctx.stroke()
    }
}

// Stephany
const checkEat = () => {
    
}

// Aline
const checkCollision = () => {
    
}

// Aline
const gameOver = () => {
    
}

const gameLoop = () => {
    
}

gameLoop()

// Aline
document.addEventListener("keydown", ({ key }) => {
    if (key == "ArrowRight" && direction != "left") {
        direction = "right"
    }

    if (key == "ArrowLeft" && direction != "right") {
        direction = "left"
    }

    if (key == "ArrowDown" && direction != "up") {
        direction = "down"
    }

    if (key == "ArrowUp" && direction != "down") {
        direction = "up"
    }
})

// Aline
buttonPlay.addEventListener() => {
    
}