const form = document.getElementById('form')
const statusTitle = document.getElementById('status')
const attempt = document.getElementById('attempt')
const result = document.getElementById('result')
const inputValue = document.getElementById('kick')
const btnRestart = document.getElementById('btnRestart')
const GuessNumber = {
    max:10,
    attemptsNumber: 0,
    numberDraw: function() {
        return Math.round(Math.random() * this.max)
    },
    showBtnRestart: function() {
        btnRestart.style.display = 'flex'
    },
    clearInput: function() {
        inputValue.value = ''
    },
    updateAttempt: function(value) {
        attempt.innerHTML = value 
    },
    correctAnswear: function() {
        this.showBtnRestart();

        statusTitle.innerHTML = 'Parabéns, você acertou!'
        statusTitle.classList.remove('incorrect-answear');
        statusTitle.classList.add('status-correct')

        result.classList.remove('result-box-default')
        result.classList.add('result-correct-answear')
        this.clearInput();
    },
    incorrectAnswear: function(message) {
        statusTitle.innerHTML = message
        statusTitle.classList.add('incorrect-answear')
        this.clearInput();
    }

}

const numberDraw = GuessNumber.numberDraw();

form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
    e.preventDefault();

    const kick = inputValue.value;

    if(!kick) {
        alert('Digite um número')
        return;
    }

    GuessNumber.updateAttempt(++GuessNumber.attemptsNumber);

    if(numberDraw == kick) {
        GuessNumber.correctAnswear('Você acertou!')
    } else if(numberDraw > kick) {
        GuessNumber.incorrectAnswear('O número é maior!')
    } else if (numberDraw < kick) {
        GuessNumber.incorrectAnswear('O número é menor!')
    }
}

    function newGame() {
        document.location.reload(true)
    }