---
layout: project
type: project
image: img/Snake.jfif
title: "Snake Game"
date: 2024
published: true
labels:
  - JavaScript
  - GitHub
  - HTML
summary: "A classic Snake game implemented with JavaScript, showcasing fundamental game mechanics and interactive coding techniques."
---

<img class="img-fluid" src="../img/Snake.jfif" alt="Snake Game">

The Snake Game is a well-known arcade game that I developed as a personal project in 2024. This project provided a valuable opportunity to dive into game development and sharpen my JavaScript and HTML skills.

The game is implemented using plain JavaScript, which handles the core game logic, rendering, and user interactions. This project helped me understand the principles of game mechanics, including collision detection, game state management, and real-time user input handling.

### Sample Code

Here is some sample code for the Snake game:

#### HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Snake Game</title>
    <style>
        body { margin: 0; }
        canvas { background: #000; display: block; margin: auto; }
    </style>
</head>
<body>
    <canvas id="snakeCanvas" width="600" height="600"></canvas>
    <script src="snake.js"></script>
</body>
</html>
