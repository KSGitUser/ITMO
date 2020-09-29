'use strict';

(async () => {

    const Users = class {
        users = new Map();
        constructor() {

        }

        async init() {
            this.users = new Map();
            let data = await this.fetchData();
            this.creatMap(data);
        }

        async fetchData() {
            try {
                const data = await fetch('http://kodaktor.ru/j/users');
                const res = await data.json();
                this.creatMap(res?.users);
            } catch(error) {
                console.error('Error in fetching data', error);
            }
        }
        
        creatMap(data = []) {
            data.forEach(value => this.users.set(value.login, value.password))
        }

        removeRecord(name) {
            if (name) {
                this.users.delete(name);
            }
        }

        printUsers() {
            this.users.forEach((value, key) =>  console.log(`name: ${key}, pasword: ${value}`))
        }
 
    };

    const users = new Users();
    await users.fetchData();
    users.printUsers();
    users.removeRecord('student@mail.com');
    users.printUsers();
})();
