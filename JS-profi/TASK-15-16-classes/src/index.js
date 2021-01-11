class Father {
    #name = 'Darth';

    constructor(name) {
        this.#name = (name || this.#name).toUpperCase();
    }

    get myName() {
        return this.#name;
    }
}

class Son extends Father {
    sonName = '';

    constructor(sonName) {
        super();
        this.sonName = sonName;
    }

    get myName() {
        return `${this.sonName} ${super.myName}'s son`
    }
}

const father1 = new Father();
console.log(father1.myName);

const son1 = new Son('Luke');
console.log(son1.myName);