// TODO: Declare any global variables we need
let scoreboardHeads = document.querySelector("#heads");
let scoreboardHeadsPercentage = document.querySelector("#heads-percent");
let scoreboardTails = document.querySelector("#tails");
let scoreboardTailsPercentage = document.querySelector("#tails-percent");
let pennyImage = document.querySelector("#penny-image");
let flipButton = document.querySelector("#flip");
let clearButton = document.querySelector("#clear");
let statusMessage = document.querySelector(".message-container");

let numTails = 0
let numHeads = 0

//document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
  //  console.log('Hi')


    // TODO: Add event listener and handler for flip and clear buttons
    flipButton.addEventListener("click", function () {
        let flip = Math.round(Math.random());
        console.log(flip);
    // Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM
        if (flip === 0) {
            let imgSource = "assets/images/penny-heads.jpg";
            pennyImage.setAttribute("src", imgSource);
            statusMessage.textContent = "You Flipped Heads!"
            numHeads++;
            let headsPercentage = Math.round((numHeads / (numHeads + numTails)) * 100);
            scoreboardHeads.textContent = numHeads;
            scoreboardHeadsPercentage.textContent = `${headsPercentage}%`;

        } else if (flip ===1) {
            let imgSource = "assets/images/penny-tails.jpg";
            pennyImage.setAttribute("src", imgSource);
            statusMessage.textContent = "You Flipped Tails!"
            numTails++;
            let tailsPercentage = Math.round((numTails / (numHeads + numTails)) * 100);
            scoreboardTails.textContent = numTails;
            scoreboardTailsPercentage.textContent = `${tailsPercentage}%`;
        }

        
        // Update the scoreboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell
    })

    clearButton.addEventListener('click', function() {
        numTails = 0;
        numHeads = 0;

        statusMessage.textContent = '';
        scoreboardHeads.textContent = 0;
        scoreboardHeadsPercentage.textContent = "0%"
        scoreboardTails.textContent = 0
        scoreboardTailsPercentage.textContent = "0%"
    })
    
    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)