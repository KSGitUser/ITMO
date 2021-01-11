System.register(['myModule'], () => {
    let myModule

    return {
        setters: [
            v => myModule = { o3 }
        ],
        execute() {
            console.log('myModule =>', myModule);

            const prototypeArray = []
            const getPrototype = (module) => {
                if (typeof module === "object") {
                    const prototype = Reflect.getPrototypeOf(module);
                    prototypeArray.push(prototype?.name || null);
                    if (prototype) {
                        getPrototype(prototype);
                    }
                }
            }

            getPrototype(o3);
            console.log('prototypeArray =>', prototypeArray); // ["JavaScript", "LiveScript", "Mocha", null]
        }
    }

})





