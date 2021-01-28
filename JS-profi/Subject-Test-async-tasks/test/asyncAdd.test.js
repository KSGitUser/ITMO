import axios from 'axios';
import 'should';

const a = 3;
const b = 5;

const headers = { 'Content-Type': 'application/json' };
const cases = [
    { a: 3, b: 6, xs: 9 },
    { a: -4, b: 1, xs: -3 },
    { a: 0.1, b: 0.2, xs: 0.3 }
]

cases.forEach(({ a, b, xs }) => {
    describe('asyncAdd', () => {
        it(`should add ${a}+${b} = ${xs}`, async () => {
            const URL = `https://kodaktor.ru/api/add/${a}/${b}`;
            const { data: { 'Сумма': s } } = await axios.get(URL, { headers });
            s.should.equal(xs);
        })
    })
})
