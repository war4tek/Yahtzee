// Digital score card for Yahtzee

const yahtzeeDiv = document.getElementById('yahtzee');
const bonusInput = document.getElementById('bonus-input');

const bonusDivContainer = document.getElementById('bonus-div-container');
const firstBonus = document.getElementById('first-bonus');
const secondBonus = document.getElementById('second-bonus');
const thirdBonus = document.getElementById('third-bonus');

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
    $('#upper-total-input').val(upperTotal);
    
    if (upperTotal >= 63) {
        upperGrandTotal = upperTotal + bonus;
        $('#bonus-input').val(bonus);
    }
    else{
        upperGrandTotal = upperTotal;
    }

    $('#upper-grandtotal-input').val(upperGrandTotal);
}

function calculateLowerSection(){
    let threeKind = Number($('#three-kind-input').val());
    let fourKind = Number($('#four-kind-input').val());
    let fullHouse = Number($('#full-house-input').val());
    let smallStraight = Number($('#small-straight-input').val());
    let largeStraight = Number($('#large-straight-input').val());
    let yahtzee = Number($('#yahtzee-input').val());
    let chance = Number($('#chance-input').val());
    
    let upperTotal = Number($('#upper-total-bottom-input').val());
    let lowerTotal = threeKind+fourKind+fullHouse+smallStraight+largeStraight+yahtzee+chance+bonusYahtzee;
    let grandTotal = lowerTotal + upperGrandTotal;

    $('#lower-total-bottom-input').val(lowerTotal);
    $('#upper-total-bottom-input').val(upperGrandTotal);
    $('#yahtzee-bonus-bottom-input').val(bonusYahtzee);
    $('#grand-total-bottom-input').val(grandTotal);  
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
        $(".calculate").val(``);  //clear all score input fields
        $(".total").val(0);       //clear all total input fields
    
        firstBonus.classList.add('hide');
        secondBonus.classList.add('hide');
        thirdBonus.classList.add('hide');
    
        bonusYahtzee = 0;
    });

    calculateScore();
});


