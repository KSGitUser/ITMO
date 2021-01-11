function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

var _name = new WeakMap();

class Father {
  constructor(name) {
    _name.set(this, {
      writable: true,
      value: 'Darth'
    });

    _classPrivateFieldSet(this, _name, (name || _classPrivateFieldGet(this, _name)).toUpperCase());
  }

  get myName() {
    return _classPrivateFieldGet(this, _name);
  }

}

class Son extends Father {
  constructor(sonName) {
    super();

    _defineProperty(this, "sonName", '');

    this.sonName = sonName;
  }

  get myName() {
    return `${this.sonName} ${super.myName}'s son`;
  }

}

const father1 = new Father();
console.log(father1.myName);
const son1 = new Son('Luke');
console.log(son1.myName);