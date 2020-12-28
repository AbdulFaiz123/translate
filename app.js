

var button_primary_german = document.querySelector("#btn-primary-german")
// var button_primary_minion = document.querySelector("#btn-primary-minion")
var txt_input = document.querySelector("#translate-input")
var txt_output = document.querySelector("#translate-output")

// var serverUrlMinion = "https://api.funtranslations.com/translate/minion.json"
var serverurlGerman ="https://api.funtranslations.com/translate/german-accent.json"

function Translator(text){
    return serverurlGerman + "?"+"text="+text
}

    // button_primary_german
    //     return serverurlGerman + "?"+"text="+text
    // }
//     else if(button_primary_minion){
//         return serverUrlMinion + "?"+"text="+text

//     }
function errorHandler(error){
    console.log("error occured",error)
    alert("Something Went Wrong with server! Trey again after some time")
}

function clickEventHandler(){
    var Input_Text = txt_input.value

    fetch(Translator(Input_Text))
    .then(response => response.json())
    
    .then(json =>{
        var TranslateTextOutput = json.contents.translated
        txt_output.innerText = TranslateTextOutput;
    })
    .catch(errorHandler)
}
button_primary_german.addEventListener("click",clickEventHandler)
// button_primary_minion.addEventListener("click",clickEventHandler)
