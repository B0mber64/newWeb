"use strict";

const $ = selector => document.querySelector(selector);

const getError = (lbl, error) => {
    alert(`${lbl} must be a number greater than 0 and less than or equal to ${error}`);
}
//focus and select an element
const focusAndSelect = selector => {
    const elem = $(selector);
    elem.focus();
    elem.select();
   };

const calculateFV = (investment, rate, years) => {
    let futureValue = investment;
    for (let i = 1; i <= years; i++){
        futureValue += futureValue * rate / 100;
    }
    $("#future").value = futureValue.toFixed(2);
}

const processEntries = () => {
    const investment = parseFloat($("#investment").value);
    const rate = parseFloat($("#rate").value);
    const years = parseFloat($("#years").value);
    if(isNaN(investment) || investment <= 0 || investment > 100000){
        getError("Total Investment", "100,000");
        focusAndSelect("#investment");
    }
    else if(isNaN(rate) || rate <= 0 || rate > 15){
        getError("Annual Interest Rate", "15");
        focusAndSelect("#rate");
    }
    else if(isNaN(investment) || investment <= 0 || investment > 50){
        getError("Number of Years", "50");
        focusAndSelect("#rate");
    }
    else{

    }
    calculateFV(investment, rate, years);
}


document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener(
    "click", processEntries);
   });