function darkMode() {
    document.querySelector(".container").style.backgroundColor = "#030712";
    document.querySelector(".container").style.color = "#f8fafc";
    document.querySelector(".simbol").style.animation = "none";
    document.querySelector(".simbol").offsetHeight;
    document.querySelector(".simbol").style.animation = "change 2s";
    document.querySelector(".simbol").style.width = "200px";
    document.querySelector(".simbol").style.height = "200px";
    document.querySelector(".simbol").style.backgroundColor = "#f8fafc";
    document.querySelector(".simbol").style.width = "100px";
    document.querySelector(".simbol").style.height = "100px";
    document.querySelector(".simbol").style.backgroundColor = "white";
}

function lightMode() {
    document.querySelector(".container").style.backgroundColor = "#f8fafc";
    document.querySelector(".container").style.color = "#161c22";
    document.querySelector(".simbol").style.animation = "none";
    document.querySelector(".simbol").offsetHeight;
    document.querySelector(".simbol").style.animation = "change 2s";
    document.querySelector(".simbol").style.width = "200px";
    document.querySelector(".simbol").style.height = "200px";
    document.querySelector(".simbol").style.backgroundColor = "#ffb900";
}