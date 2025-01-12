let userSeq = [];
let gameSeq = [];
let color = ["yellow","green","red","purple"];

let level = 0;
let started = false;
let h4 = document.querySelector('h4');
let h3 = document.querySelector('h3');
let highestScore = 0;

document.addEventListener('keypress',function(){
    if(started == false){
        console.log("game started");
        started = true;
        levelUp();
    }
  
})

function flash(randombtn){
    randombtn.classList.add("flash");
    setTimeout(function(){
        randombtn.classList.remove("flash");
    },300);
}
function userFlash(randombtn){
    randombtn.classList.add("userFlash");
    setTimeout(function(){
        randombtn.classList.remove("userFlash");
    },300);
}


function levelUp(){
    userSeq = [];
    level++;
    h4.innerText = `level ${level}`;
    let random = Math.floor(Math.random()*3);
    let randomclr = color[random];
    let randombtn = document.querySelector(`.${randomclr}`);
    gameSeq.push(randomclr);
    flash(randombtn);
}

function checkAns(idx){
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
           setTimeout(levelUp,1000); 
        }
    }
    else {
        h4.innerHTML = `Game over! <b>your score was ${level}</b> <br> press any key to restart`;
        if(level>highestScore){
            highestScore = level;
        }
        h3.innerText = `your highest score is ${highestScore}`;
        reset();
    }
}

function btnpress(){
    let btn = this;
    userFlash(btn);
    let color = btn.getAttribute("id");
    userSeq.push(color);
    checkAns(userSeq.length-1);
}

let allbtn = document.querySelectorAll('.box');
for(let btn of allbtn){
    btn.addEventListener('click',btnpress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}