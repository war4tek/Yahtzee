//Logic for a set of yahtzee dice. 

const rollDiceBtn = document.getElementById('rollDiceBtn');
const diceOne = document.getElementById('dice-one');
const diceTwo = document.getElementById('dice-two');
const diceThree = document.getElementById('dice-three');
const diceFour = document.getElementById('dice-four');
const diceFive  = document.getElementById('dice-five');
const diceSix = document.getElementById('dice-six');
const rollCount = document.getElementById('rollCount');
const resetDiceBtn = document.getElementById('resetDiceBtn');

let numberOfRolls = 0;

const diceInfo = {
    'first-face': '<span class="dot"></span>',
    'second-face': `<span class="dot"></span>
                    <span class="dot"></span>`,
    'third-face': `<span class="dot"></span> 
                   <span class="dot"></span>
                   <span class="dot"></span>`,
    'fourth-face': `<div class="column">
                        <span class="dot"></span>
                        <span class="dot"></span>
                    </div>
                    <div class="column" >
                        <span class="dot"></span>
                        <span class="dot"></span>
                    </div>`,
     'fifth-face': `<div class="column">
                        <span class="dot"></span>
                        <span class="dot"></span>
                    </div>

                    <div class="column">
                     <span class="dot"></span>
                    </div>

                    <div class="column">
                     <span class="dot"></span>
                    <span class="dot"></span>
                   </div>`,
    'sixth-face': `<div class="column">
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                  </div>

                  <div class="column">
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                 </div>` 
};

function getRandomNumber(max){
    return Math.floor(Math.random() * max) + 1;
}

function getFace(number){
    if(number === 1) return 'first-face';
    else if (number === 2) return 'second-face';
    else if (number === 3) return 'third-face';
    else if (number === 4) return 'fourth-face';
    else if (number === 5) return 'fifth-face';
    else if (number === 6) return 'sixth-face';
}

function animateDice(){
    const divs = document.getElementsByClassName('dice');
    for(div of divs){
        if(div.className.includes('selected')){
            div.classList.remove('play');
        }else{
            div.classList.add('play');
        }
    }
}

function resetAnimation(){  
    const divs = document.getElementsByClassName('dice');
    for(div of divs){
        console.log(div.classList);
        if(!div.className.includes('selected')){
            div.style.animation = 'none';
            div.offsetHeight;
            div.style.animation = null;           
            div.className = '';
            div.style.backgroundColor = 'red';
            div.classList.add('dice');
            div.innerHTML = ``;
        }

        if(div.id.includes('six')){
            div.classList.add('hide');
            div.classList.add('smaller-dice');
        }        
    }
}
 
function displayDice(){
    const divs = document.getElementsByClassName('dice');

    for (div of divs){
        let number = getRandomNumber(6);
        let face = getFace(number);
        
        if(!div.className.includes('selected')){
            if(face.includes("first")){
                div.classList.add('first-face');
                div.innerHTML = diceInfo["first-face"];
            } 
            else if(face.includes("second")){
                div.classList.add('second-face');
                div.innerHTML = diceInfo["second-face"];
            }
            else if(face.includes("third")){
                div.classList.add('third-face');
                div.innerHTML = diceInfo["third-face"];
            }
            else if(face.includes("fourth")){
                div.classList.add('fourth-face');
                div.innerHTML = diceInfo["fourth-face"];
            }
            else if(face.includes("fifth")){
                div.classList.add('fifth-face');
                div.innerHTML = diceInfo["fifth-face"];
            }  
            else if(face.includes("sixth")){
                div.classList.add('sixth-face');
                div.innerHTML = diceInfo["sixth-face"];
            }  
        }
    }
}

function displayCount(){
    rollCount.innerHTML = `Roll ${numberOfRolls}`;
}

function rollDice(){  
    resetAnimation();
    animateDice();
    numberOfRolls++; 
} 

function toggleFirstDice(){
    if(diceOne.style.backgroundColor === 'red'){
        diceOne.style.backgroundColor = 'green';
        diceOne.classList.add('selected');
    }
    else{
        diceOne.style.backgroundColor = 'red';
        diceOne.classList.remove('selected');
    } 
}

function toggleSecondDice(){
    if(diceTwo.style.backgroundColor === 'red'){
        diceTwo.style.backgroundColor = 'green';
        diceTwo.classList.add('selected');  
    }
    else{
        diceTwo.style.backgroundColor = 'red';
        diceTwo.classList.remove('selected');
    } 
}

function toggleThirdDice(){
    if(diceThree.style.backgroundColor === 'red'){
        diceThree.style.backgroundColor = 'green'; 
        diceThree.classList.add('selected'); 
    }
    else{
        diceThree.style.backgroundColor = 'red';
        diceThree.classList.remove('selected');
    } 
}

function toggleFourthDice(){
    if(diceFour.style.backgroundColor === 'red'){
        diceFour.style.backgroundColor = 'green'; 
        diceFour.classList.add('selected'); 
    }
    else{
        diceFour.style.backgroundColor = 'red';
        diceFour.classList.remove('selected');
    } 
}

function toggleFifthDice(){
    if(diceFive.style.backgroundColor === 'red'){
        diceFive.style.backgroundColor = 'green';
        diceFive.classList.add('selected');  
    }
    else{
        diceFive.style.backgroundColor = 'red';
        diceFive.classList.remove('selected');
    } 
}

function resetHand(){
    const divs = document.getElementsByClassName('dice');
    for(div of divs){
        div.style.animation = 'none';
        div.offsetHeight;
        div.style.animation = null;           
        div.className = '';
        div.style.backgroundColor = 'red';
        div.classList.add('dice');
        div.innerHTML = ``;
    }

    if(div.id.includes('six')){
        div.classList.add('hide');
        div.classList.add('smaller-dice');
    }
}

rollDiceBtn.addEventListener('click', rollDice);

diceOne.addEventListener('click', toggleFirstDice);
diceTwo.addEventListener('click', toggleSecondDice);
diceThree.addEventListener('click', toggleThirdDice);
diceFour.addEventListener('click', toggleFourthDice);
diceFive.addEventListener('click', toggleFifthDice);

diceSix.addEventListener("animationend", ()=> {
    displayDice();
    displayCount();
});

resetDiceBtn.addEventListener('click', ()=> {
    resetHand();
    numberOfRolls = 0; 
    rollCount.innerHTML = ``;
});

rollDiceBtn.focus();