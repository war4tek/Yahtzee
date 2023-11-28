// Digital score card for Yahtzee

const yahtzeeDiv = document.getElementById('yahtzee');
const upperTotalInput = document.getElementById('upper-total-input');
const upperGrandTotalInput = document.getElementById('upper-grandtotal-input');
const bonusInput = document.getElementById('bonus-input');

const lowerTotalBottomInput = document.getElementById('lower-total-bottom-input');
const upperTotalBottomInput = document.getElementById('upper-total-bottom-input');
const grandTotalBottomInput = document.getElementById('grand-total-bottom-input');
const bonusDivContainer = document.getElementById('bonus-div-container');
const yahtzeeBonusTotalInput = document.getElementById('yahtzee-bonus-bottom-input');

const firstBonusDiv = document.getElementById('first-bonus-div');
const firstBonus = document.getElementById('first-bonus');
const secondBonusDiv = document.getElementById('second-bonus-div');
const secondBonus = document.getElementById('second-bonus');
const thirdBonusDiv = document.getElementById('third-bonus-div');
const thirdBonus = document.getElementById('third-bonus');

const resetCardBtn = document.getElementById('resetCardBtn');
const saveGameBtn = document.getElementById('saveGameBtn');

let upperGrandTotal = 0;
let bonusYahtzee = 0;
let gameOver = false;

function calculateUpperSection(){
    let ones = Number($('#ones-input').val());
    let twos = Number($('#twos-input').val());
    let threes = Number($('#threes-input').val());
    let fours = Number($('#fours-input').val());
    let fives = Number($('#fives-input').val());
    let sixes = Number($('#sixes-input').val());

    let bonus = 35;

    let upperTotal = ones + twos + threes + fours + fives + sixes;
    upperTotalInput.value = upperTotal;

    if (upperTotal >= 63) {
        upperGrandTotal = upperTotal + bonus;
        bonusInput.value = bonus;
    }
    else{
        upperGrandTotal = upperTotal;
    }

    upperGrandTotalInput.value = upperGrandTotal;
}

function calculateLowerSection(){
    let threeKind = Number($('#three-kind-input').val());
    let fourKind = Number($('#four-kind-input').val());
    let fullHouse = Number($('#full-house-input').val());
    let smallStraight = Number($('#small-straight-input').val());
    let largeStraight = Number($('#large-straight-input').val());
    let yahtzee = Number($('#yahtzee-input').val());
    let chance = Number($('#chance-input').val());
    let upperTotal = Number(upperTotalBottomInput.value);

    let lowerTotal = threeKind+fourKind+fullHouse+smallStraight+largeStraight+yahtzee+chance+bonusYahtzee;
    
    let grandTotal = lowerTotal + upperGrandTotal;

    lowerTotalBottomInput.value = lowerTotal;
    upperTotalBottomInput.value = upperGrandTotal;
    yahtzeeBonusTotalInput.value = bonusYahtzee;
    grandTotalBottomInput.value = grandTotal ;
}

function calculateScore(){
    calculateUpperSection();
    calculateLowerSection();
}

$(document).ready(function(){

    $('.calculate').change(function(e){
        calculateScore();
    })

firstBonusDiv.addEventListener('click', ()=> {
    if(firstBonus.classList.contains('hide')){
        firstBonus.classList.remove('hide');
        bonusYahtzee += 100;
    }else{
        firstBonus.classList.add('hide');
        bonusYahtzee -= 100;
    }
    yahtzeeBonusTotalInput.value = bonusYahtzee;
    calculateScore();
});

secondBonusDiv.addEventListener('click', () => {
    if(secondBonus.classList.contains('hide')){
        secondBonus.classList.remove('hide');
        bonusYahtzee += 100;
    }else{
        secondBonus.classList.add('hide');
        bonusYahtzee -= 100;
    }
    yahtzeeBonusTotalInput.value = bonusYahtzee;
    calculateScore();
});

thirdBonusDiv.addEventListener('click', () =>{
    if(thirdBonus.classList.contains('hide')){
        thirdBonus.classList.remove('hide');
        bonusYahtzee += 100;
    }else{
        thirdBonus.classList.add('hide');
        bonusYahtzee -= 100;
    }
    yahtzeeBonusTotalInput.value = bonusYahtzee;
    calculateScore();
});

resetCardBtn.addEventListener('click', ()=> {
    const inputFields = document.getElementsByTagName('input');
    for(inputField of inputFields){
        inputField.value = ``;
    }

    upperTotalInput.value = 0;
    upperGrandTotalInput.value = 0;

    yahtzeeBonusTotalInput.value = 0;
    lowerTotalBottomInput.value = 0;
    upperTotalBottomInput.value = 0;
    grandTotalBottomInput.value = 0;

    firstBonus.classList.add('hide');
    secondBonus.classList.add('hide');
    thirdBonus.classList.add('hide');

    bonusYahtzee = 0;

});

calculateScore();
});


