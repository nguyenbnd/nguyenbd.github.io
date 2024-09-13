const canvas = document.getElementById('pongCanvas');
const ctx = canvas.getContext('2d');

// Create the pong paddle
const paddleWidth = 10, paddleHeight = 100;
const player = { x: 0, y: canvas.height / 2 - paddleHeight / 2, width: paddleWidth, height: paddleHeight, color: '#fff', dy: 0 };
const ai = { x: canvas.width - paddleWidth, y: canvas.height / 2 - paddleHeight / 2, width: paddleWidth, height: paddleHeight, color: '#fff', dy: 0 };

// Create the pong ball
const ball = { x: canvas.width / 2, y: canvas.height / 2, size: 10, speed: 5, dx: 5, dy: 3, color: '#fff' };

// Draw the paddle and ball
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw player paddle
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.width, player.height);
    
    // Draw AI paddle
    ctx.fillStyle = ai.color;
    ctx.fillRect(ai.x, ai.y, ai.width, ai.height);
    
    // Draw ball
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2);
    ctx.fillStyle = ball.color;
    ctx.fill();
    ctx.closePath();
}

// Update the ball's position
function update() {
    ball.x += ball.dx;
    ball.y += ball.dy;

    // Ball collision with top/bottom walls
    if (ball.y + ball.size > canvas.height || ball.y - ball.size < 0) {
        ball.dy *= -1;
    }

    // Ball collision with paddles
    if (ball.x - ball.size < player.x + player.width && ball.y > player.y && ball.y < player.y + player.height) {
        ball.dx *= -1;
    }
    if (ball.x + ball.size > ai.x && ball.y > ai.y && ball.y < ai.y + ai.height) {
        ball.dx *= -1;
    }

    // Move AI paddle
    ai.y += (ball.y - (ai.y + ai.height / 2)) * 0.1;

    // Reset ball if it goes out of bounds
    if (ball.x - ball.size < 0 || ball.x + ball.size > canvas.width) {
        ball.x = canvas.width / 2;
        ball.y = canvas.height / 2;
        ball.dx *= -1;
        ball.dy = 3;
    }
}

// Control the player paddle
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') player.dy = -5;
    if (event.key === 'ArrowDown') player.dy = 5;
});
document.addEventListener('keyup', (event) => {
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') player.dy = 0;
});

function gameLoop() {
    draw();
    update();
    player.y += player.dy;

    // Keep player paddle within canvas
    if (player.y < 0) player.y = 0;
    if (player.y + player.height > canvas.height) player.y = canvas.height - player.height;

    requestAnimationFrame(gameLoop);
}
gameLoop();
