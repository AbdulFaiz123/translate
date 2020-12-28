

var button_primary = document.querySelector("#btn-primary")
var txt_input = document.querySelector("#text-input")
var txt_output = document.querySelector("#output")

var serverUrl = "https://api.funtranslations.com/translate/minion.json"
var serverurlGerman ="https://api.funtranslations.com/translate/german-accent.json"

function Translator(text){
    return serverurlGerman + "?"+"text="+text
}
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
button_primary.addEventListener("click",clickEventHandler)

