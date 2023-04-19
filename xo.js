
let title = document.querySelector('.title')
let squares = document.querySelectorAll('.square')
let countPlayer1 = document.getElementById('count1')
let restart = document.getElementById('restart')
let countPlayer2 = document.getElementById('count2')
let Maingame = document.getElementById('game')
let start = document.getElementById('start')
let startTurn = document.getElementById('turn')
let startGame = document.getElementById('startGame')
let startTurnX = document.getElementById('X')
let startTurnO = document.getElementById('O')
if(localStorage.product == null && localStorage.product2 == null){
    Maingame.classList.add('hide')
    startTurn.classList.add('hide')
}else{
    startGame.classList.add('hide')
    startTurn.classList.add('hide')
}
// start game
start.onclick = function(){
    startTurn.classList.remove('hide')
    startGame.classList.add('hide')
}

// start turn
let turn;
startTurnX.onclick = function(){
    turn = 'x'
    startTurn.classList.add('hide')
    Maingame.classList.remove('hide')
}
startTurnO.onclick = function(){
    turn = 'o'
    startTurn.classList.add('hide')
    Maingame.classList.remove('hide')
}


// local storage
let counter2;
if (localStorage.product2 != null) {
    counter2 = JSON.parse(localStorage.product2)
} else {
    counter2 = 0;
}
let counter;
if (localStorage.product != null) {
    counter = JSON.parse(localStorage.product)
} else {
    counter = 0;
}

// restart button
restart.onclick = function(){
    localStorage.clear()
    counter = 0
    counter2 = 0
    countPlayer1.innerHTML = 0
    countPlayer2.innerHTML = 0
    window.location.reload()
    startTurn.classList.add('hide')
    Maingame.classList.remove('hide')
}

// end of game 
function end(num1,num2,num3){
    if(squares[num1].innerHTML == 'x'){
        counter += 1
        countPlayer1.innerHTML = counter
    }
    if(squares[num1].innerHTML == 'o'){
        counter2 += 1
        countPlayer2.innerHTML = counter2
    }
    localStorage.setItem('product2' , JSON.stringify(counter2))
    localStorage.setItem('product' , JSON.stringify(counter))
    title.innerHTML = `${squares[num1].innerHTML} winner`
    document.getElementById('item' + num1).style.background = '#222'
    document.getElementById('item' + num2).style.background = '#222'
    document.getElementById('item' + num3).style.background = '#222'
    setInterval(function(){title.innerHTML += '.'},500)
    setTimeout(function(){location.reload()},2000)
    startTurn.classList.add('hide')
    Maingame.classList.remove('hide')
}


// winner
function winner(){
    if(squares[0].innerHTML == squares[1].innerHTML && squares[1].innerHTML == squares[2].innerHTML && squares[0].innerHTML != ''){
        end(0,1,2)   
    }else if(squares[3].innerHTML == squares[4].innerHTML && squares[4].innerHTML == squares[5].innerHTML && squares[3].innerHTML != ''){
        end(3,4,5)
    }else if(squares[6].innerHTML == squares[7].innerHTML && squares[7].innerHTML == squares[8].innerHTML && squares[6].innerHTML != ''){
        end(6,7,8)
    }else if(squares[0].innerHTML === squares[3].innerHTML && squares[3].innerHTML == squares[6].innerHTML &&  squares[0].innerHTML != ''){
        end(0,3,6)
    }else if(squares[1].innerHTML == squares[4].innerHTML && squares[4].innerHTML == squares[7].innerHTML && squares[1].innerHTML != ''){
        end(1,4,7)
    }else if(squares[2].innerHTML == squares[5].innerHTML && squares[5].innerHTML == squares[8].innerHTML && squares[2].innerHTML != ''){
        end(2,5,8)
    }else if(squares[0].innerHTML == squares[4].innerHTML && squares[4].innerHTML == squares[8].innerHTML && squares[0].innerHTML != ''){
        end(0,4,8)
    }else if(squares[2].innerHTML == squares[4].innerHTML && squares[4].innerHTML == squares[6].innerHTML && squares[2].innerHTML != ''){
        end(2,4,6)
    }
}

//switch turn
function game(id){
    let element = document.getElementById(id)
    if(turn === 'x' &&  element.innerHTML == ''){

        element.innerHTML = 'x'
        turn = 'o'
        title.innerHTML = 'Turn O'
    }if(turn === 'o' && element.innerHTML == ''){
        element.innerHTML = 'o'
        turn = 'x'
        title.innerHTML = 'Turn X'
    }
    winner()
    nowinner()
}
// reading data on the players
countPlayer2.innerHTML = counter2
countPlayer1.innerHTML = counter

// text of end if no winner
function endtoe(num1,num2,num3,num4,num5,num6,num7,num8,num9){
    title.innerHTML = 'No Winner'
    setInterval(function(){title.innerHTML += '.'},500)
    setTimeout(function(){location.reload()},2000)
    document.getElementById('item' + num1).style.background = '#222'
    document.getElementById('item' + num2).style.background = '#222'
    document.getElementById('item' + num3).style.background = '#222'
    document.getElementById('item' + num4).style.background = '#222'
    document.getElementById('item' + num5).style.background = '#222'
    document.getElementById('item' + num6).style.background = '#222'
    document.getElementById('item' + num7).style.background = '#222'
    document.getElementById('item' + num8).style.background = '#222'
    document.getElementById('item' + num9).style.background = '#222'
}

// no winner
function nowinner(){
    if(squares[0].innerHTML != squares[1].innerHTML | squares[1].innerHTML != squares[2].innerHTML |  squares[0].innerHTML !=  squares[2].innerHTML && squares[0].innerHTML != ''  && squares[1].innerHTML != ''  && squares[2].innerHTML != '' &&
    squares[3].innerHTML != squares[4].innerHTML | squares[4].innerHTML != squares[5].innerHTML | squares[3].innerHTML != squares[5].innerHTML && squares[3].innerHTML != '' && squares[4].innerHTML != '' && squares[5].innerHTML != '' &&
    squares[6].innerHTML != squares[7].innerHTML | squares[7].innerHTML != squares[8].innerHTML | squares[6].innerHTML != squares[8].innerHTML && squares[6].innerHTML != '' && squares[7].innerHTML != '' && squares[8].innerHTML != ''  && 
    squares[1].innerHTML != squares[4].innerHTML | squares[4].innerHTML != squares[7].innerHTML | squares[1].innerHTML != squares[7].innerHTML  && squares[1].innerHTML != '' && squares[4].innerHTML != '' && squares[7].innerHTML != '' &&
    squares[2].innerHTML != squares[5].innerHTML | squares[5].innerHTML != squares[8].innerHTML | squares[2].innerHTML != squares[8].innerHTML && squares[2].innerHTML != '' && squares[5].innerHTML != '' && squares[8].innerHTML != '' &&
    squares[0].innerHTML != squares[4].innerHTML | squares[4].innerHTML != squares[8].innerHTML | squares[0].innerHTML != squares[8].innerHTML && squares[0].innerHTML != '' && squares[4].innerHTML != '' && squares[8].innerHTML != '' &&
    squares[2].innerHTML != squares[4].innerHTML | squares[4].innerHTML != squares[6].innerHTML | squares[2].innerHTML != squares[6].innerHTML && squares[2].innerHTML != '' && squares[4].innerHTML != '' && squares[6].innerHTML != ''){
        endtoe(0,1,2,3,4,5,6,7,8)
    }
}