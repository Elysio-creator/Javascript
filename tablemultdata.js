"use strict";

var currentTableNumber=2;

function tableNumber(){
    return currentTableNumber;
}

function tableValues(){
    console.log(tableNumber());
    var tab=[];
    for(let i=1 ; i<11 ; ++i){
        tab.push(tableNumber()*i);
    }
    return tab;
}

function changeTableNumber(number){
    currentTableNumber=number;
}

function valuesVerification(values){
    var tab=tableValues();
    var tabVerif=[];
    for(let i=0 ; i<10 ; ++i){
        tabVerif.push(tab[i] == values[i]);
    }
    return tabVerif;
}

function numberOfGoodValues(values){
    var nbjuste=0;
    var tab=valuesVerification(values);
    for(let i=0 ; i<tab.length;++i){
        if(tab[i]){
            nbjuste+=1;
        }
    }
    return nbjuste;
}

function answersValidities(){
    var msgs=[];
    var valide=true;
    let tab=document.getElementsByClassName("result")
    for(let i =0 ; i<tab.length;i++){
        if(tab[i].value==""){
            msgs.push("entrer une valeur");
            valide=false;
        }
        else if(isNaN(tab[i].value)){
            msgs.push("entrer un nombre");
            valide=false;
        }
        else{
            msgs.push("");
        }
    }
    return {msgs:msgs,valide:valide}; 
}

function test1(){
    const values=[2,5,6,8,10,13,14,16,19,21];
    changeTableNumber(2);
    console.log(numberOfGoodValues(values));
}

