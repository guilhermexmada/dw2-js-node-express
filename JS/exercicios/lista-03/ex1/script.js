function darkMode(){
    document.querySelector(".container").style.backgroundColor = "#030712";
    document.querySelector(".container").style.color = "#f8fafc";
}

function lightMode(){
    document.querySelector(".container").style.backgroundColor = "#f8fafc";
    document.querySelector(".container").style.color = "#161c22";
    document.querySelector(".simbol").style.backgroundColor = "blue";
    document.querySelector(".simbol").style.animation = "night 2s";
}