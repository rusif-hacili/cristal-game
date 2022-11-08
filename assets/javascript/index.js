class CrycstalsGame {
    #red = Math.floor(Math.random() * 12 + 1);
    #blue = Math.floor(Math.random() * 12 + 1);
    #yellow = Math.floor(Math.random() * 12 + 1);
    #green = Math.floor(Math.random() * 12 + 1);
    #wins = 0;
    #losses = 0;
    #totalScore = 0;

    getRandomNumber() {
        const randomNumber = Math.floor(Math.random() * 150);
        $('#random').html(randomNumber);
        return randomNumber;
    }

    getCrycstalButtons(dataName) {

        if (dataName === 'red') {
            this.#totalScore += this.#red;
        } else if (dataName === 'blue') {
            this.#totalScore += this.#blue;
        } else if (dataName === 'yellow') {
            this.#totalScore += this.#yellow;
        } else if (dataName === 'green') {
            this.#totalScore += this.#green;
        }

        $('#total-score').html(this.#totalScore);

    }

    upDate() {
        this.#totalScore = 0;
        this.#red = Math.floor(Math.random() * 12 + 1);
        this.#blue = Math.floor(Math.random() * 12 + 1);
        this.#yellow = Math.floor(Math.random() * 12 + 1);
        this.#green = Math.floor(Math.random() * 12 + 1);
    }

    isGameEnded() {
        var netice = false
        if (this.#totalScore === randomNumber) {
            this.#wins++;
            $('#wins').html(this.#wins);
            netice = true;
        } else if (this.#totalScore > randomNumber) {
            this.#losses++
            $('#losses').html(this.#losses);
            netice = true;
        }
        return netice
    }
}

var game = new CrycstalsGame();
var randomNumber = game.getRandomNumber();

$('.crystals-button').on('click', function () {
    if (game.isGameEnded()) {
        randomNumber = game.getRandomNumber();
        game.upDate()
        return;

    }

    const dataName = $(this).attr("data-name");
    game.getCrycstalButtons(dataName);

})


