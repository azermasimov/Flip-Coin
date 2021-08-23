let heads = document.querySelector(".heads"),
    tails = document.querySelector(".tails"),
    forImage = document.querySelector(".for-image"),
    youGuessed = document.querySelector(".you-guessed"),
    winsSpan = document.querySelector(".wins"),
    lossesSpan = document.querySelector(".losses"),
    chosenHeads = document.querySelector(".chosen-heads"),
    chosenTails = document.querySelector(".chosen-tails");

let arr = [
    '<img src="us-quarter-front.jpg" class="img-fluid rounded-start" alt="us-quarter-front">',
    '<img src="us-quarter-back.jpg" class="img-fluid rounded-start" alt="us-quarter-front">'
];

let tailsCount = 0;
let headsCount = 0;
let wins = 0;
let losses = 0;

function flipCoin(index) {
    let randomCoinFaceIndex = Math.floor(Math.random() * arr.length);

    if(randomCoinFaceIndex == 0) {
        forImage.innerHTML = arr[index];
    }

    if(index == randomCoinFaceIndex) {
        wins++;
        winsSpan.innerHTML =  `<h3> ${wins} </h3>`;
    }
    else {
        losses++;
        lossesSpan.innerHTML =  `<h3> ${losses} </h3>`;
    }
} 

heads.addEventListener("click", () => {
    headsCount++
    chosenHeads.textContent = headsCount;
    flipCoin(0);
});

tails.addEventListener("click", () => {
    tailsCount++;
    chosenTails.textContent = tailsCount;
    flipCoin(1);
});