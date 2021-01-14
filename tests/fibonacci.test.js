import { Fibonacci } from '../fibonacci.js'
import pkg from 'chai'
const { expect } = pkg;

const fib = new Fibonacci();

describe("Fibonacci Test", () => {
    describe("calculate", () => {
        it("generates 0", () => {
            expect(fib.calculate(0)).to.equal(0)
        });

        it("generates 1", () => {
            expect(fib.calculate(1)).to.equal(1)
        });

        it("generates 6765", () => {
            expect(fib.calculate(20)).to.equal(6765)
        });

        it("generates 75025", () => {
            expect(fib.calculate(25)).to.equal(75025)
        });
    });
});