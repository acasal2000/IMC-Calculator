
function calculateIMC(){
    let heightValue = document.getElementById("textarea-height");
    let weightValue = document.getElementById("textarea-weight");

    let result;

    let resultValue = document.createElement("p");
    resultValue.setAttribute("class", "result-value");
    resultValue.setAttribute("id", "result-value");

    let resultMessage = document.createElement("h4");
    resultMessage.setAttribute("class", "result-message");
    resultMessage.setAttribute("id", "result-message");
    resultMessage.innerHTML = "O valor do teu IMC é de: ";

    let resultValueContainer = document.getElementById("result-text-container");
    let resultMessageContainer = document.getElementById("result-subtitle-container");

    let messageLength = document.getElementsByClassName("result-message").length;
    let valueLength = document.getElementsByClassName("result-value").length;

    result = Math.round(((weightValue.value / (Math.pow(heightValue.value, 2)) * 10000) + Number.EPSILON) * 100) / 100;
    resultValue.innerHTML = result;

    if(heightValue.value != "" && weightValue.value != ""){
        console.log("diferente de vazio");
        
        if(document.getElementsByClassName("result-message").length != 0){
            document.getElementById("result-value").remove();
            document.getElementById("result-message").remove();
        }
        resultMessageContainer.appendChild(resultMessage);
        resultValueContainer.appendChild(resultValue);
    }
    else{
        alert("Não podes ter campos vazios!");
    }
}
