document.addEventListener('DOMContentLoaded', function () {
    const ennter = document.getElementById('ennter');
    const again = document.getElementById('again');
    const output = document.getElementById('output');
    const randomNumber = Math.ceil(Math.random() * 1000);
    const quit = document.getElementById('quit');
    const lucky = document.getElementById('lucky');

function generateRandomNumber() {
     return Math.ceil(Math.random() * 1000);
}
    
lucky.addEventListener('click', function () {
    const randomNumber = generateRandomNumber();
    userInput.value = randomNumber;
});

function sjekk() {
    var input = parseInt(document.getElementById('userInput').value);
    if (input === randomNumber) {
        output.innerHTML = "You guessed right! It was indeed " + randomNumber;
            output.style.color = "green";
        }else if (input > randomNumber && input <= 1000) {
            output.innerHTML = "You guessed too high, please try again.";
        }else if (input < randomNumber && input >= 1) {
            output.innerHTML = "You guessed too low, please try again.";
        }else if (input < 1 || input > 1000 || isNaN(input)) {
            output.innerHTML = "NaN";
        }
    }

    ennter.addEventListener('click', sjekk);
    again.addEventListener('click', function () {
        location.reload();
    });
    quit.addEventListener('click', function () {
        window.close();
    });
});

