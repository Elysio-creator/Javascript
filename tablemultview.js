"use strict";

function writeTableNumber(num){
    let numbers = document.getElementsByClassName("num");
    for(let i=0 ; i<numbers.length;++i){
        numbers[i].textContent=num;
    }
}

function  selectedTableNumber(){
    let number=document.getElementById("selectnum");
    return parseInt(number.value);
}

function displayResults(results){
    let outpout=document.getElementsByClassName("result");
    for(let i = 0; i<outpout.length;i++){
        console.log(results[i]);
        outpout[i].value=results[i];
        outpout[i].readOnly=true;
    }
}
function eraseResults(){
    let outpout=document.getElementsByClassName("result");
    for(let i = 0; i<outpout.length;i++){
        outpout[i].value="";
        outpout[i].readOnly=false;
    }
}

function displayMessage(msg){
    let outpout=document.getElementById("resultmsg");
    outpout.textContent=msg;
}

function displayChecks(msg){
    let tab=document.getElementsByClassName("check");
    for(let i =0; i<tab.length;i++){
        tab[i].classList.remove("good");
        tab[i].classList.remove("bad")
        tab[i].textContent=msg[i];
        if(tab[i].textContent==="bonne réponse"){
            tab[i].classList.add("good");
        }
        else{
            tab[i].classList.add("bad");
        }
    }

}
function eraseCheck(){
    let tab=document.getElementsByClassName("check");
    for(let i =0; i<tab.length;i++){
        tab[i].textContent="";
    }
}

function displayAnswerValidities(validities){
    var tab=document.getElementsByClassName("check"); 
    for(let i=0; i<tab.length;i++){
        tab[i].textContent=validities.msgs[i];
    }
    if(validities.valide==false){
        displayMessage("données incorrectes");
    }
}

function displayAnswersCorrectnesses(results){
    var tab=[];
    var goodValues=0;
    for(let i=0; i<results.length;i++){
        if(results[i]){
            tab.push("bonne réponse");
            goodValues++;
        }
        else{
            tab.push("réponse erronée");            
        }
    }
    if(goodValues==tab.length){
        displayMessage("Bravo tu as trouvé toutes les bonnes réponses")
    }
    else{
        displayMessage(`vous avez ${goodValues} bonne reponses`)
    }
    displayChecks(tab);  
}

function userAnswers(){
    var tab=document.getElementsByClassName("result")
    var resultat=[]
    for(let i=0 ; i<tab.length;i++){
        resultat.push(parseInt(tab[i].value));
    }
    return resultat;
}


function testValidities(){
    displayAnswerValidities(answersValidities());
}


function test2(){
    changeTableNumber(selectedTableNumber());
    var tab=tableValues();
    for(let i=0;i<tab.length;++i){
        console.log(tab[i]);
    }
    displayResults(tab);
}

function testErase(){
    eraseResults();
}

function testCheck(){
    const msg=["ok","NOK","N","NOK","ok","N","NOK","N","ok","ok"];
    displayChecks(msg);
}