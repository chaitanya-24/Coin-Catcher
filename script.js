let coins = document.getElementById("coins");
let score = 0;
let scoreItem = document.getElementById("score");
let coinSound = new Audio("./coins.mp3");


setInterval(() => {
    let coin = document.createElement("img");
    coin.src = "./coin.png";
    let alive = true;

    let rh = parseInt((window.innerHeight - 50) * Math.random());
    let rw = parseInt((window.innerWidth - 50) * Math.random());

    coin.style.setProperty("position", "absolute");
    coin.style.setProperty("bottom", `${rh}px`);
    coin.style.setProperty("left", `${rw}px`);

    coin.style.setProperty("width", "50px");
    coin.style.setProperty("height", "50px");
    coins.appendChild(coin);

    coin.onmouseover = function(){
        coinSound.play();
        score += 10;
        scoreItem.innerHTML = `Score: ${score}`;
        coins.removeChild(coin);
        console.log("Collected");
        alive = false;
    }

    setTimeout(() => {
        if (alive) {
            coins.removeChild(coin);
        }
    }, 2000);

}, 500);