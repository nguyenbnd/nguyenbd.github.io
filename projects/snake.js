const canvas = document.getElementById('snakeCanvas');
const ctx = canvas.getContext('2d');

const scale = 20;
const rows = canvas.height / scale;
const columns = canvas.width / scale;

let snake;
let fruit;

document.addEventListener('keydown', changeDirection);

function setup() {
    snake = new Snake();
    fruit = new Fruit();
    fruit.pickLocation();
    update();
}

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    snake.update();
    snake.show();
    fruit.show();
    if (snake.eat(fruit)) {
        fruit.pickLocation();
    }
    if (snake.isDead()) {
        alert("Game Over!");
        snake = new Snake();
        fruit = new Fruit();
        fruit.pickLocation();
    }
    setTimeout(update, 1000 / 10); // Update every 100 ms
}

function changeDirection(event) {
    const direction = event.key.replace('Arrow', '');
    snake.setDirection(direction);
}

setup();

class Snake {
    constructor() {
        this.body = [];
        this.body[0] = { x: Math.floor(columns / 2) * scale, y: Math.floor(rows / 2) * scale };
        this.xdir = 0;
        this.ydir = 0;
    }

    update() {
        const head = { x: this.body[0].x + this.xdir * scale, y: this.body[0].y + this.ydir * scale };
        this.body.unshift(head);
        this.body.pop();
    }

    setDirection(direction) {
        switch (direction) {
            case 'Up':
                if (this.ydir === 0) {
                    this.xdir = 0;
                    this.ydir = -1;
                }
                break;
            case 'Down':
                if (this.ydir === 0) {
                    this.xdir = 0;
                    this.ydir = 1;
                }
                break;
            case 'Left':
                if (this.xdir === 0) {
                    this.xdir = -1;
                    this.ydir = 0;
                }
                break;
            case 'Right':
                if (this.xdir === 0) {
                    this.xdir = 1;
                    this.ydir = 0;
                }
                break;
        }
    }

    eat(fruit) {
        const head = this.body[0];
        if (head.x === fruit.x && head.y === fruit.y) {
            this.body.push({});
            return true;
        }
        return false;
    }

    isDead() {
        const head = this.body[0];
        // Check if the snake collides with itself or the edges
        for (let i = 1; i < this.body.length; i++) {
            if (head.x === this.body[i].x && head.y === this.body[i].y) {
                return true;
            }
        }
        if (head.x < 0 || head.x >= canvas.width || head.y < 0 || head.y >= canvas.height) {
            return true;
        }
        return false;
    }

    show() {
        ctx.fillStyle = 'green';
        for (let i = 0; i < this.body.length; i++) {
            ctx.fillRect(this.body[i].x, this.body[i].y, scale, scale);
        }
    }
}

class Fruit {
    constructor() {
        this.x;
        this.y;
    }

    pickLocation() {
        this.x = Math.floor(Math.random() * columns) * scale;
        this.y = Math.floor(Math.random() * rows) * scale;
    }

    show() {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, scale, scale);
    }
}
