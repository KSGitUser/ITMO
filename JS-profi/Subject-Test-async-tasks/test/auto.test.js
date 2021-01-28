import Zombie from 'zombie';
import should from 'should';
const page = new Zombie();

const cases = [
    { s: 'abc', xs: 'CBA' },
    { s: 'xyz', xs: 'ZYX' },
    { s: '123', xs: '321' }
];

const URL = `https://kodaktor.ru/g/autocase`;

cases.forEach(({ s, xs }) => {
    describe(`${xs} autoTest`, () => {
        it('should response with reverted Cap.String', async () => {
            await page.visit(URL);
            page.fill('#inp', s);
            page.pressButton('#button_do');
            page.document.querySelector('#ans').value.should.equal(xs);
        });
    });

})