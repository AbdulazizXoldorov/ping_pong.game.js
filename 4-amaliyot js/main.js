let player1 = document.querySelector('.player-1')
let player2 = document.querySelector('.player-2')
let changes = document.querySelector('#changes')
let player1Btn = document.querySelector('.player-1_btn')
let player2Btn = document.querySelector('.player-2_btn')
let resBtn = document.querySelector('.reset-btn')
let playerScore1 = 0
let playerScore2 = 0
let gameOver = false
let gameLavel = 3

player1Btn.addEventListener('click' , ()=>{
    if(!gameOver){
        playerScore1++
        player1.textContent = playerScore1
        if(playerScore1 >= gameLavel){
            gameOver = true
            player1.style.color = 'green'
            player2.style.color = 'red'
        }
    }
})

player2Btn.addEventListener('click' , ()=>{
    if(!gameOver){
        playerScore2++
        player2.textContent = playerScore2
        if(playerScore2 >= gameLavel){
            gameOver = true
            player1.style.color = 'red'
            player2.style.color = 'green'
        }
    }
})

changes.addEventListener('change' , ()=>{
    gameLavel = changes.value
    playerScore1 = 0
    playerScore2 = 0
    player1.textContent = playerScore1    
    player2.textContent = playerScore2    
    player1.style.color = 'black'
    player2.style.color = 'black'
    gameOver = false
})

resBtn.addEventListener('click' , ()=>{
    gameLavel = changes.value
    playerScore1 = 0
    playerScore2 = 0
    player1.textContent = playerScore1    
    player2.textContent = playerScore2    
    player1.style.color = 'black'
    player2.style.color = 'black'
    gameOver = false
})

