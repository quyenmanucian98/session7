let arr = [];
let number = prompt("Enter Number Neet To Check");
addValue();
playGame();

function addValue() {
    for (let i = 0; i < 5; i++) {
        arr[i] = Math.floor(Math.random() * 100);
    }
}

function playGame() {
    if (number === arr) {
        alert('Nổ');
    } else {
        alert("Tạch");
    }
}


