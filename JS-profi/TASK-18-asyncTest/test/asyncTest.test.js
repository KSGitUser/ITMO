import 'should';
import axios from "axios";

const getFirstURL = (number) => `https://kodaktor.ru/api2/there/${number}`;
const getSecondURL = (number) => `https://kodaktor.ru/api2/andba/${number}`;
const headers = {
    'Content-Type': 'application/json'
};
const testsNumber = 10;
const maxNumber = 100;

const cases = (new Array(testsNumber)).fill().map(() => Math.floor(Math.random() * maxNumber));

const getSecondNumber = async (firstNumber) => {
    return (
        await axios.get(
            (getFirstURL(firstNumber)),
            { headers }
        )
    )?.data;
}

const getThirdNumber = async (secondNumber) => {
    return (
        await axios.get(
            (getSecondURL(secondNumber)),
            { headers }
        )
    )?.data;
}


cases.forEach(n => {
    describe('async request test numbers', () => {
        let firstNumber = n;

        it(`equality testing to rundom number ${firstNumber}`, async () => {
            try {
                const secondNumber = await getSecondNumber(firstNumber);
                should(secondNumber).be.Number();

                const thirdNumber = await getThirdNumber(secondNumber);
                should(thirdNumber).be.Number();

                firstNumber.should.equal(thirdNumber);
            } catch (error) {
                console.error(error);
            }
        });
    })
});
