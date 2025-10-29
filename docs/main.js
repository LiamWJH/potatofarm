const potatobtn = document.getElementById("potatoseed");
const sweetpotatobtn = document.getElementById("sweetpotatoseed");
const goldenpotatobtn = document.getElementById("goldenpotatoseed");
const workerbtn = document.getElementById("potatoworker");
const lotterybtn = document.getElementById("lottery");
const landbtn = document.getElementById("land");

const landdiv = document.getElementById("landplots");


const score = document.getElementById("score");

let idx = 0;


let plots = {"potato":null, "sweetpotato":null, "goldenpotato":null}
let plotgrowth = {"potato":0, "sweetpotato":0, "goldenpotato":0}
let inventory = {"potato":0, "sweetpotato":0, "goldenpotato":0, "worker":1, "land":3, "money":200}

console.log(plots, plotgrowth);

potatobtn.addEventListener("click", () => {
    if (inventory.money >= 30) {
        inventory.money -= 30;
        inventory.potato += 1;

        score.textContent = inventory.money + "$";
        console.log(inventory);
    }
});

sweetpotatobtn.addEventListener("click", () => {
    if (inventory.money >= 45) {
        inventory.money -= 45;
        inventory.sweetpotato += 1;

        score.textContent = inventory.money + "$";
        console.log(inventory);
    }
});

goldenpotatobtn.addEventListener("click", () => {
    if (inventory.money >= 70) {
        inventory.money -= 70;
        inventory.goldenpotato += 1;

        score.textContent = inventory.money + "$";
        console.log(inventory);
    }
});

workerbtn.addEventListener("click", () => {
    if (inventory.money >= 140) {
        inventory.money -= 140;
        inventory.worker += 1;

        score.textContent = inventory.money + "$";
        console.log(inventory);
    }
});

lotterybtn.addEventListener("click", () => {
    if (inventory.money >= 100) {
        inventory.money -= 100;
        let usernum = prompt("number between 1 ~ 15: ")
        if (usernum == Math.floor(Math.random() * (20 - 1 + 1)) + 1) {
            alert("CONGRATULATIONS");
            if (inventory.money == "0") {
                inventory.money == 250
            } else {
                inventory.money *= 2.5
            }

            score.textContent = inventory.money + "$";
        } else {
            alert("YOU ARE A FAILURE");
            score.textContent = inventory.money + "$";
        }
    }
});

