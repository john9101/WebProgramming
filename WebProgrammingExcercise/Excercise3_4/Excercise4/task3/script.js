var listWelcome = ["Xin chào!","Hello!","Bonjour!","Hola!"];
function getRandomWelcome(){
    var randomIndex = Math.floor(Math.random() * listWelcome.length);
    return listWelcome[randomIndex];
}

window.onload = function (){
    document.getElementById("random-welcome").textContent = getRandomWelcome();
}