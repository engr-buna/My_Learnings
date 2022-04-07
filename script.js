// project 1
bilang = document.querySelector(".counterCount")

for (i=0;i<3;i++) {
    document.querySelectorAll(".counterButton")[i].addEventListener("click", function(){
        
        clickAudio = new Audio("sounds/button.mp3")
        clickAudio.play()
      counterFunction(this.innerHTML);
    })
}

function counterFunction(counterButton) {

    if (counterButton === "decrease") {
        bilang.innerHTML--}
    else if (counterButton === "reset") {
        bilang.innerHTML = 0}
    else {
        bilang.innerHTML++}

    if (bilang.innerHTML > 0) {
        bilang.style.color = "green"}
    else if (bilang.innerHTML < 0) {
        bilang.style.color = "red"}
    else { 
        bilang.style.color = "white"}
    
}

// project 2

shipCount = 0
shipBilang = document.querySelector(".shipCount")
savePrevious = document.querySelector(".shipEntries")
previousCounts = 0

document.querySelectorAll(".sheepButton")[0].addEventListener("click", function(){
    shipCount++
    shipBilang.innerHTML = shipCount
    randomNumberOneTwo = Math.floor(Math.random()*2) + 1
    randomSheep = "sounds/sheep" + randomNumberOneTwo + ".mp3"
    sheepAudio = new Audio(randomSheep)
    sheepAudio.play()
})

document.querySelectorAll(".sheepButton")[1].addEventListener("click", function(){
    shipCount = 0
    shipBilang.innerHTML = shipCount
})

document.querySelectorAll(".sheepButton")[2].addEventListener("click", function(){
    if (shipBilang.innerHTML != 0) {
        if (previousCounts>3) {
            savePrevious.innerHTML = ""
            previousCounts = 0
        }
        
        savePrevious.innerHTML += shipCount + " - "
        previousCounts++
    }
    shipCount = 0
    shipBilang.innerHTML = shipCount
})

// project 3

// audio
charmanderAudio = new Audio("sounds/charmander.mp3")
squirtleAudio = new Audio("sounds/squirtle.mp3")
bulbasaurAudio = new Audio("sounds/bulbasaur.mp3")
pokeCenterAudio = new Audio("sounds/pokeCenter.mp3")

document.querySelector(".charmanderSpeaker").addEventListener("click", 
    function (){
    charmanderAudio.play()
});

document.querySelector(".squirtleSpeaker").addEventListener("click", 
    function (){
    squirtleAudio.play()
});

document.querySelector(".bulbasaurSpeaker").addEventListener("click", 
    function (){
    bulbasaurAudio.play()
});

// fight
// pokemonBattleAudio = new Audio("sounds/PokemonBattle2.mp3")
pokemonBattleAudio = new Audio("sounds/battleStart2.mp3")

userResult = document.querySelector(".userWinLose")
computerResult = document.querySelector(".computerWinLose")

for (p=0;p<3;p++) {
    document.querySelectorAll(".pokemonButton")[p].addEventListener("click", function(){
        userResult.innerHTML = "User"
        computerResult.innerHTML = "Computer"
        randomNumberOneTwoThree = Math.floor(Math.random()*3) + 1
        computerRandomPokemonImage = "images/pokemonRight" + randomNumberOneTwoThree + ".jpg"

        pokemonBattleAudio.play()
        pokemonWhoWins(this.innerHTML)

        setTimeout(function(){
            if (pokemonBattleResult === "win") {
                userResult.innerHTML = "User 🚩"
                pokemonWin = new Audio("sounds/win.mp3")
                pokemonWin.play()
            }
            else if (pokemonBattleResult === "lose"){
                computerResult.innerHTML = "Computer 🚩"
                pokemonLose = new Audio("sounds/lose.mp3")
                pokemonLose.play()
            }
            else {
                userResult.innerHTML = "User 🎌"
                computerResult.innerHTML = "Computer 🎌"
            }
        },5000)
    })
}

function pokemonWhoWins(pickedPokemon) {
    
    if (pickedPokemon === "charmander"){
        userPokemonImage = "images/pokemonLeft1.jpg"
        if (randomNumberOneTwoThree === 1) {
            pokemonBattleResult = "draw"
        }
        else if (randomNumberOneTwoThree === 2) {
            pokemonBattleResult = "lose"
        }
        else {
            pokemonBattleResult = "win"
        }
    }

    if (pickedPokemon === "squirtle"){
        userPokemonImage = "images/pokemonLeft2.jpg"
        if (randomNumberOneTwoThree === 1) {
            pokemonBattleResult = "win"
        }
        else if (randomNumberOneTwoThree === 2) {
            pokemonBattleResult = "draw"
        }
        else {
            pokemonBattleResult = "lose"
        }
    }

    if (pickedPokemon === "bulbasaur"){
        userPokemonImage = "images/pokemonLeft3.jpg"
        if (randomNumberOneTwoThree === 1) {
            pokemonBattleResult = "lose"
        }
        else if (randomNumberOneTwoThree === 2) {
            pokemonBattleResult = "win"
        }
        else {
            pokemonBattleResult = "draw"
        }
    }

    document.querySelector(".userPokemon").setAttribute("src", userPokemonImage)
    document.querySelector(".computerPokemon").setAttribute("src", computerRandomPokemonImage)

}

// pokemon center

document.querySelector(".pokemonBattleText").addEventListener("click", function(){
    pokeCenterAudio.play()
    document.querySelector(".pokemonBattleText").style.animationName = "pokemonCenter"
    document.querySelector(".pokemonBattleText").style.animationDuration = "2.5s"
})

// project 4
linkCount = 0
inputLink = document.querySelector(".inputLink")
saveLink = document.querySelector(".saveLink")
saveList = document.querySelector(".saveList")

saveLink.addEventListener("click", function(){
    if (inputLink.value != "") {
        if (linkCount > 4) {
            saveList.innerHTML = ""
            linkCount = 0
        }

        saveList.innerHTML += `
            <li>
                <a target="_blank" href="${inputLink.value}">${inputLink.value}</a>
            </li>
            `
        inputLink.value = ""
        linkCount++
    }
})

// project 5

buttonColours = ["red", "blue", "green", "yellow"]
gamePattern = []
userClickedPattern = []
blue = new Audio("sounds/blue.mp3")
red = new Audio("sounds/red.mp3")
green = new Audio("sounds/green.mp3")
yellow = new Audio("sounds/yellow.mp3")
wrong = new Audio("sounds/wrong.mp3")
level = 0
onGame = false


function nextSequence() {
    level++
    $("#level-title").html(`Level ${level}`)
    randomNumber = Math.floor(Math.random()*4)
    randomChosenColour = buttonColours[randomNumber]
    gamePattern.push(randomChosenColour)
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
    colorSound(randomChosenColour)
    console.log(gamePattern)
    sequenceLoaded = true
}


function colorSound(color) {
    if (color === "red") {
        red.play()
    }
    if (color === "blue") {
        blue.play()
    }
    if (color === "green") {
        green.play()
    }
    if (color === "yellow") {
        yellow.play()
    }
}

$(".btnColor").click(function(){
    if (onGame) {
        if (sequenceLoaded) {
            userChosenColour = $(this).attr("id")
            userClickedPattern.push(userChosenColour)
            colorSound(userChosenColour)
            animatePress(userChosenColour)
            checkAnswer()
        }
    }
})

function animatePress(currentColour){
    $("." + currentColour).addClass("pressed")
    setTimeout(function(){
        $("." + currentColour).removeClass("pressed")
    },100)
}

$(document).keydown(function(){
    if (!onGame) {
        onGame = true
        nextSequence()
    }
})

function checkAnswer() {
    for(m=0;m<userClickedPattern.length;m++) {
        if (userClickedPattern[m] !== gamePattern[m]) {
        onGame = false
        wrong.play()
        $("#level-title").html("Game Over, Press A Key to Start")
        gamePattern = []
        userClickedPattern = []
        level = 0
        $("#project5 .container-fluid").addClass("game-over")
        setTimeout(function(){$("#project5 .container-fluid").removeClass("game-over")},100)
        }
    }

    if (userClickedPattern.length === gamePattern.length) {
        if (onGame){
            sequenceLoaded = false
            userClickedPattern = []
            setTimeout(function(){nextSequence()},1000)
        }
    }

}

// project 6
headPositionX = 7
headPositionY = 7
changeinX = 0
changeinY = 0
tileCount = 15
tileSize = 18
gameSpeed = 7
appleX = Math.floor(Math.random()*15)
appleY = Math.floor(Math.random()*15)
tailLength = 2
snakeParts = []
scoreSnake = 0
gameOver = false
eatSound = new Audio("sounds/eatSound.mp3")
gameBoySound = new Audio("sounds/gameBoy.mp3")

class SnakePart{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
}

document.addEventListener("DOMContentLoaded", function(){
    canvasSnake = document.querySelector("#snakeGame")
    ctx = canvasSnake.getContext('2d')
    ctx.fillStyle = "black"
    ctx.fillRect(0,0,300,300)
})

$(document).keydown(function(event){
    snakeArrow = event.keyCode
    // up
    if (snakeArrow == 87){
        if (changeinY == 1){
            return
        }
        changeinX = 0
        changeinY = -1
    }
    // down
    if (snakeArrow == 83){
        if (changeinY == -1){
            return
        }
        changeinX = 0
        changeinY = 1
    }
    // right
    if (snakeArrow == 68){
        if (changeinX == -1){
            return
        }
        changeinX = 1
        changeinY = 0
    }
    // left
    if (snakeArrow == 65){
        if (changeinX == 1){
            return
        }
        changeinX = -1
        changeinY = 0
    }
})


function drawSnakeGame() {
    if (!isSnakeRunning){return}
    changeSnakePosition()
    checkGameOver()
    if (gameOver){return}
    clearScreen()
    checkApplePosition()
    drawScore()
    drawApple()
    drawSnake()
    setTimeout(drawSnakeGame, 1000/gameSpeed)
}

function checkGameOver() {
    if (headPositionX < 0 || headPositionY < 0 || headPositionX > 14 || headPositionY > 14) {
        gameOver = true
    }

    for (t=2;t<snakeParts.length;t++){
        part = snakeParts[t]
        if (part.x === headPositionX && part.y === headPositionY){
            gameOver = true
            break
        }
    }

    if (gameOver) {
        ctx.fillStyle = "red"
        ctx.font = "35px impact"
        ctx.fillText("Game Over", 75, 80)
    }
}

function clearScreen() {
    ctx.fillStyle = "black"
    ctx.fillRect(0,0,300,300)
}

function checkApplePosition(){
    if (headPositionX == appleX && headPositionY==appleY) {
        eatSound.play()
        appleX = Math.floor(Math.random()*15)
        appleY = Math.floor(Math.random()*15)
        tailLength++
        scoreSnake++
    }
}

function drawScore() {
    ctx.fillStyle = "white"
    ctx.font = "9px arial"
    ctx.fillText("Score: " + scoreSnake, 250,10)
}

function drawApple() {
    // ctx.fillStyle = "gold"
    // ctx.fillRect(appleX*20, appleY*10, 18, 9)
    ctx.beginPath()
    ctx.arc(appleX*20+10, (appleY*20+10)/2,4,5,0,Math.PI * 2)
    ctx.closePath()
    ctx.fillStyle = "white"
    ctx.fill()
}

function changeSnakePosition() {
    headPositionX += changeinX
    headPositionY += changeinY
}

function drawSnake(){
    ctx.fillStyle = "yellowGreen"
    for (s=0;s<snakeParts.length;s++) {
    part = snakeParts[s]
    ctx.fillRect(part.x * 20,part.y * 10,18,9)
    }

    snakeParts.push(new SnakePart(headPositionX,headPositionY))
    if (snakeParts.length > tailLength){
    snakeParts.shift()
    }

    ctx.fillStyle = "darkGreen"
    ctx.fillRect(headPositionX*20, headPositionY*10,18,9)
}

$(".switchToggle").click(function() {
    if (this.id == "off"){
        isSnakeRunning = true
        drawSnakeGame()
        gameBoySound.play()
        document.querySelector(".switchToggle").setAttribute("src","images/onButton.png")
        $(".switchToggle").attr("id", "on")
    }
    else {
        document.querySelector(".switchToggle").setAttribute("src","images/offButton.png")
        $(".switchToggle").attr("id", "off")
        clearScreen()
        headPositionX = 7
        headPositionY = 7
        changeinX = 0
        changeinY = 0
        appleX = Math.floor(Math.random()*15)
        appleY = Math.floor(Math.random()*15)
        tailLength = 2
        snakeParts = []
        scoreSnake = 0
        gameOver = false
        isSnakeRunning = false
    }
})

$(".resetButton").click(function(){
    clearScreen()
    headPositionX = 7
    headPositionY = 7
    changeinX = 0
    changeinY = 0
    appleX = Math.floor(Math.random()*15)
    appleY = Math.floor(Math.random()*15)
    tailLength = 2
    snakeParts = []
    scoreSnake = 0
    gameOver = false
    drawSnakeGame()
})



    




















    
  






