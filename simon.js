let gameSeq=[];
let userInput=[];
let started = false;
let level=0;

let btns =["maroon","blue","yellow","lavender"];

let h2= document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started==false){
        console.log("game start");
        started=true;

        levelUp();
    }
});


function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },150);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },550);
}



function levelUp(){
    level++;
    h2.innerHTML=`Level ${level}`;
    userInput=[];
    let random= Math.floor(Math.random()*4);
    
    let randColor= btns[random];
    
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randBtn+" btn");
    // console.log(random +" num");
    // console.log(randColor +"color");

    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);

}

function checkAnswer(idx){

    if(userInput[idx]===gameSeq[idx]){
        if(userInput.length==gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }else{
        h2.innerHTML =`Game Over! Your Score:<b>  ${level} </b><br> Press any Key to start`;
        
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor=" rgb(223, 162, 174)";
        },150);


        reset();
    }
}



function btnPress(){
    
    let btn= this;
    userInput.push(btn.getAttribute("id"));
    userFlash(btn);
    checkAnswer(userInput.length-1);
    // levelUp();
}


let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userInput=[];
    level=0;
}