function qv() {
  return this * this;
}
console.log(8::qv());

const x = 19;

const a = do {
  if (x > 18) {
    ('разрешено');
  } else {
    ('запрещено');
  }
};

console.log('a =>', a);
