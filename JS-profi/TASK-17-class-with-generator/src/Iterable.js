class Iterable {
    length = 0;

    constructor(len) {
        this.length = len;
    }

    *[Symbol.iterator]() {
        let index = 0;
        while (index < this.length) {
            index++;
            yield this.randomNumber();
        }

    }

    randomNumber(min = 0, max = 2) {
        let ran

        do {
            ran = Math.floor(
                (Math.random() * (max - min) + min) * 100);
        } while (ran % 2 !== 0)

        return (ran / 100).toFixed(2);

    }

}

module.exports = {
    Iterable
}

