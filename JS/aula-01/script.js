//função simples
function showMessage(){
    document.write("<p>Esta mensagem é exibida usando uma função simples</p>");
}

showMessage();

//função com parâmetros
function showMessageInput(text){
    document.write("<p>O parâmetro usado na função é: " + text + "</p>");
}

showMessageInput("Olá, mundo!");