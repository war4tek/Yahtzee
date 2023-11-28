// Digital score card for Yahtzee

const yahtzeeDiv = document.getElementById('yahtzee');
const bonusInput = document.getElementById('bonus-input');

const bonusDivContainer = document.getElementById('bonus-div-container');
const firstBonus = document.getElementById('first-bonus');
const secondBonus = document.getElementById('second-bonus');
const thirdBonus = document.getElementById('third-bonus');

const upperTotalInput = document.getElementById('upper-total-input');
const upperGrandTotalInput = document.getElementById('upper-grandtotal-input');
const lowerTotalBottomInput = document.getElementById('lower-total-bottom-input');
const upperTotalBottomInput = document.getElementById('upper-total-bottom-input');
const grandTotalBottomInput = document.getElementById('grand-total-bottom-input');
const yahtzeeBonusTotalInput = document.getElementById('yahtzee-bonus-bottom-input');

const resetCardBtn = document.getElementById('resetCardBtn');
const saveGameBtn = document.getElementById('saveGameBtn');

let upperGrandTotal = 0;
let bonusYahtzee = 0;

function calculateUpperSection(){
    let ones = Number($('#ones-input').val());
    let twos = Number($('#twos-input').val());
    let threes = Number($('#threes-input').val());
    let fours = Number($('#fours-input').val());
    let fives = Number($('#fives-input').val());
    let sixes = Number($('#sixes-input').val());

    const bonus = 35;
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
    //$('#upper-grandtotal-input').value = upperGrandTotal;
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

    $('.calculate').change(function( ){
        calculateScore();
    });

    $('#first-bonus-div').click(function () {
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

    $('#second-bonus-div').click(function () {    
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

    $('#third-bonus-div').click(function () { 
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

    
    $('#resetCardBtn').click(function () {       
        $(".calculate").val(``);  //clear all input fields
        $(".total").val(0);       //clear all total input fields
    
        firstBonus.classList.add('hide');
        secondBonus.classList.add('hide');
        thirdBonus.classList.add('hide');
    
        bonusYahtzee = 0;
    });

    calculateScore();
});


