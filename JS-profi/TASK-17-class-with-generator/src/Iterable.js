class Iterable {
    length = 0;
    randomMin = 0;
    randomMax = 0;

    constructor(len, min = 0, max = 2) {
        this.length = len;
        this.randomMin = min;
        this.randomMax = max;
    }

    *[Symbol.iterator]() {
        let index = 0;
        while (index < this.length) {
            index++;
            yield this.randomNumber(this.randomMin, this.randomMax);
        }

    }

    randomNumber(min, max) {
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

