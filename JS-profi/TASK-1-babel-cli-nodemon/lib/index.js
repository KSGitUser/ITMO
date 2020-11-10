var _context;

function qv() {
  return this * this;
}

console.log((_context = 8, qv).call(_context));
const x = 19;
const a = x > 18 ? 'разрешено' : 'запрещено';
console.log('a =>', a);