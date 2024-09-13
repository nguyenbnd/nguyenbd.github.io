---
layout: project
type: project
image: img/Pong Image.jfif
title: "Pong Game"
date: 2022
published: true
labels:
  - Javascript
  - GitHub
  - HTML
summary: "A classic Pong game implemented with JavaScript, demonstrating fundamental game mechanics and coding practices."
---

<img class="img-fluid" src="../img/Pong Image.jfif" alt="Pong Game">

Pong Game is a classic arcade game that I developed as an individual project in 2022. This project provided an opportunity to explore game development and enhance my JavaScript skills.

The game is implemented using plain JavaScript, handling all aspects of the game logic, rendering, and user interaction. Through this project, I gained a deeper understanding of game mechanics and real-time interaction.

### Sample Code

Here is some sample code for the Pong game:

#### HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pong Game</title>
    <style>
        body { margin: 0; }
        canvas { background: #000; display: block; margin: auto; }
    </style>
</head>
<body>
    <canvas id="pongCanvas" width="800" height="400"></canvas>
    <script src="pong.js"></script>
</body>
</html>
