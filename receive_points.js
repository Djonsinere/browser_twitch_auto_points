console.log("Twitch Auto Claimer start!");

function claimPoints() {
    const rewardButton = document.querySelector('.claimable-bonus__icon');
    if (rewardButton) {
        rewardButton.click(); 
        console.log("Claim points!");
    } else {
        console.log("There are no points to claim...");
    }
}

setInterval(claimPoints, 60000);
claimPoints();
