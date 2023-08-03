const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

const score = document.querySelector(".score--value")
const finalScore = document.querySelector(".final-score > span")
const menu = document.querySelector(".menu-screen")
const buttonPlay = document.querySelector(".btn-play")

const audio = new Audio("../assets/audio.mp3")

const size = 30

const initialPosition = { x: 270, y: 240 }

let snake = [initialPosition]

//Aline
const incrementScore = () => {
    
}

// Stephany
const randomNumber = (min, max) => {
    return Math.round(Math.random() * (max - min) + min)
}

// Stephany
const randomPosition = () => {
    const number = randomNumber(0, canvas.width - size)
    return Math.round(number / 30) * 30
}

// Stephany
const randomColor = () => {
    const red = randomNumber(0, 255)
    const green = randomNumber(0, 255)
    const blue = randomNumber(0, 255)
    const yellow = randomNumber(0, 255)

    return `rgb(${red}, ${green}, ${blue}, ${yellow})`
}

// Stephany
const food = {
    x: randomPosition(),
    y: randomPosition(),
    color: randomColor()
}

let direction, loopId

// Stephany
const drawFood = () => {
    const { x, y, color } = food

    ctx.shadowColor = color
    ctx.shadowBlur = 6
    ctx.fillStyle = color
    ctx.fillRect(x, y, size, size)
    ctx.shadowBlur = 0
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
    const head = snake[snake.length - 1]

    if (head.x == food.x && head.y == food.y) {
        snake.push(head)
        audio.play()

        let x = randomPosition()
        let y = randomPosition()

        while (snake.find((position) => position.x == x && position.y == y)) {
            x = randomPosition()
            y = randomPosition()
        }

        food.x = x
        food.y = y
        food.color = randomColor()
    }
}

// Aline
const checkCollision = () => {
    const head = snake[snake.length - 1]
    const canvasLimit = canvas.width - size
    const headIndex = snake.length - 2

    const wallCollision = 
        head.x < 0 || head.x > canvasLimit || head.y < 0 || head.y > canvasLimit
    
    const selfCollision = snake.find((position, index) => {
        return index <  headIndex && position.x == head.x && position.y == head.y
    })
    
    if(wallCollision || selfCollision) {
        gameOver()
    }
}

// Aline
const gameOver = () => {
    
}

const gameLoop = () => {
    clearInterval(loopId)

    ctx.clearRect(0, 0, 600, 600)
    moveSnake()
    drawSnake()
    drawGrid()
    drawFood()
    checkEat()
    checkCollision()

    loopId = setTimeout(() => {
        gameLoop();
    }, 300)
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

// Stephany
buttonPlay.addEventListener("click", () => {
    
})