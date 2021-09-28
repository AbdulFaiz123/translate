

var button_primary_german = document.querySelector("#btn-primary-german")

var txt_input = document.querySelector("#translate-input")
var txt_output = document.querySelector("#translate-output")


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
button_primary_german.addEventListener("click",clickEventHandler)

