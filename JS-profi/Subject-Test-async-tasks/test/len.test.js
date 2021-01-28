import should from "should";
import { Iterable } from "../../TASK-17-class-with-generator/src/Iterable.js";
import len from "../src/len.js";

['e', 'λ', 'Œ', 'Ã', 'ē', '😂',].forEach(string => {
    describe(`&{string} length function`, () => {
        it('should be a number!', () => {
            len(string).should.be.a.Number();
        });

        it('should be one length!', () => {
            len(string).should.equal(1);
        });

    })
})


