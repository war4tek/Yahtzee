/**
 * Julian Apodaca
 * 11-09-2022
 * Digital score card for Yahtzee
 */

const yahtzeeDiv = document.getElementById('yahtzee');
const onesInput = document.getElementById('ones-input');
const twosInput = document.getElementById('twos-input');
const threesInput = document.getElementById('threes-input');
const foursInput = document.getElementById('fours-input');
const fivesInput = document.getElementById('fives-input');
const sixesInput = document.getElementById('sixes-input');

const upperTotalInput = document.getElementById('upper-total-input');
const upperGrandTotalInput = document.getElementById('upper-grandtotal-input');
const bonusInput = document.getElementById('bonus-input');

const threeKindInput = document.getElementById('three-kind-input');
const fourKindInput = document.getElementById('four-kind-input');
const fullHouseInput = document.getElementById('full-house-input');
const smallInput = document.getElementById('small-straight-input');
const largeInput = document.getElementById('large-straight-input');
const yahtzeeInput = document.getElementById('yahtzee-input');
const chanceInput = document.getElementById('chance-input');

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
    let ones = Number(onesInput.value);
    let twos = Number(twosInput.value);
    let threes = Number(threesInput.value);
    let fours = Number(foursInput.value);
    let fives = Number(fivesInput.value);
    let sixes = Number(sixesInput.value);

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
    let threeKind = Number(threeKindInput.value);
    let fourKind = Number(fourKindInput.value);
    let fullHouse = Number(fullHouseInput.value);
    let smallStraight = Number(smallInput.value);
    let largeStraight = Number(largeInput.value);
    let yahtzee = Number(yahtzeeInput.value);
    let chance = Number(chanceInput.value);
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

onesInput.addEventListener('input', calculateScore);
twosInput.addEventListener('input', calculateScore);
threesInput.addEventListener('input', calculateScore);
foursInput.addEventListener('input', calculateScore);
fivesInput.addEventListener('input', calculateScore);
sixesInput.addEventListener('input', calculateScore);

threeKindInput.addEventListener('input', calculateScore);
fourKindInput.addEventListener('input', calculateScore);
fullHouseInput.addEventListener('input', calculateScore);
smallInput.addEventListener('input', calculateScore);
largeInput.addEventListener('input', calculateScore);
yahtzeeInput.addEventListener('input', calculateScore);
chanceInput.addEventListener('input', calculateScore);

lowerTotalBottomInput.addEventListener('input', calculateScore);
upperTotalBottomInput.addEventListener('input', calculateScore);
grandTotalBottomInput.addEventListener('input', calculateScore);

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
