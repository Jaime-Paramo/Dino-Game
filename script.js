const map = document.querySelector('.map')
const dino = doncument.querySselctor('.dino')
const cactus = document.querySelector('.cactus')
const bird = document.querySelector('.bird')
const scoreText = document.querySelector('.score')
const startButton = document.querySelector('.start_button')

let gameInterval; 
let isJumping = false;
let position = 50; // dino position 
let score = 0;
let speed = 10; 