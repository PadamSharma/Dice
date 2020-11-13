randomNumber1 = Math.floor(Math.random() * 6 + 1);
randomNumber2 = Math.floor(Math.random() * 6 + 1);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "Player1  Wins";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "Player2  Wins";
} else {
    document.querySelector("h1").textContent = "Draw";
}

document
    .querySelector(".img1")
    .setAttribute(
        "src",
        "Dicee Challenge - Starting Files/Dicee Challenge - Starting Files/images/dice" +
            randomNumber1 +
            ".png"
    );

document
    .querySelector(".img2")
    .setAttribute(
        "src",
        "Dicee Challenge - Starting Files/Dicee Challenge - Starting Files/images/dice" +
            randomNumber2 +
            ".png"
    );
