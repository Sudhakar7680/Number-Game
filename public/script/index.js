
function numberGenerationGame(remainingScore) {
    const num1 = Math.floor(Math.random() * 9) + 1;
    const num2 = Math.floor(Math.random() * 9) + 1;
    const num3 = Math.floor(Math.random() * 9) + 1;

    document.getElementById("number1").textContent = num1;
    document.getElementById("number2").textContent = num2;
    document.getElementById("number3").textContent = num3;

    let comment = '';

    // Game conditions
    if (num1 === num2 && num2 === num3) {
        remainingScore += 1000;
        comment = "You were lucky this time, you got 1000 INR as all the numbers are the same.";
    } else if ((num1 % 2 === 0 && num2 % 2 === 0 && num3 % 2 === 0) || 
               (num1 % 2 !== 0 && num2 % 2 !== 0 && num3 % 2 !== 0)) {
        remainingScore += 300;
        comment = (num1 % 2 === 0) 
          ? "You were lucky this time, you got 300 INR as all the numbers are even." 
          : "You were lucky this time, you got 300 INR as all the numbers are odd.";
    } else if (Math.abs(num1 - num2) === 1 && Math.abs(num2 - num3) === 1) {
        remainingScore += 800;
        comment = "You were lucky this time, you got 800 INR as all the numbers have a difference of 1.";
    } else {
        comment = "You were not lucky this time.";
    }

    remainingScore -= 100;
    if (remainingScore <= 0) {
        remainingScore = 0;
        comment = "Game Over";
    }

    // Return result
    return {
        remainingScore: remainingScore,
        gameComment: comment
    };
}
let remainingScore = 1000;

// Play button event listener
document.getElementById("playButton").addEventListener('mouseover',function(e){
    e.target.textContent = " Click to  Play";
})
document.getElementById("playButton").addEventListener('mouseout',function(e){
    e.target.textContent = " Start Now";
})
document.getElementById("playButton").addEventListener("click", function(e) {

    const result = numberGenerationGame(remainingScore);
    remainingScore = result.remainingScore;
    document.getElementById("score").textContent = remainingScore;
    document.getElementById("comment").textContent = result.gameComment;

    if (remainingScore <= 0) {
        document.getElementById("playButton").disabled = true;
    }
});


document.getElementById("playButton").style.boxShadow = "2px 3px 2px pink"








