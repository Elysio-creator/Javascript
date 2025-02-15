

function OnLoad(){
    let num=selectedTableNumber();
    changeTableNumber(num);
    writeTableNumber(num);
}


function newTable(){   
    let num=selectedTableNumber();
    writeTableNumber(num);
    changeTableNumber(num);
    eraseResults();
    eraseCheck();
    displayMessage("Rentrez les valeurs des multiplication")
}

function displayResult(){
    var result=tableValues();
    displayResults(result);
    displayMessage("Apprenez bien ces valeurs");
}

function OnunLoad(){
    console.log("j'ai decharger la page");
}

function onChangeNumber(event){
    newTable();
}

function verifyAnswers(){
    let valider=answersValidities();
    displayAnswerValidities(valider);
    if(valider.valide){
        var resultVerifier=valuesVerification(userAnswers());
        displayAnswersCorrectnesses(resultVerifier);
    }

}

function onClick(event){
    if(event.target.id==="bresult"){
        displayResult();
    }
    else if(event.target.id==="bverify"){
        verifyAnswers()
    }
}


window.addEventListener("onload", OnLoad());
window.addEventListener("onunload", OnunLoad());
document.getElementById("selectnum").addEventListener("change", onChangeNumber);
document.body.addEventListener("click",onClick);