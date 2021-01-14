import { Fibonacci } from '../fibonacci.js'
import pkg from 'chai'
const { expect } = pkg;

const fib = new Fibonacci();

describe("Fibonacci Hidden Test", () => {
    describe("calculate", () => {
        it("generates 377", () => {
            expect(fib.calculate(14)).to.equal(377)
        });

        it("generates 610", () => {
            expect(fib.calculate(15)).to.equal(610)
        });

        it("generates 2584", () => {
            expect(fib.calculate(18)).to.equal(2584)
        });

        it("generates 4181", () => {
            expect(fib.calculate(19)).to.equal(4181)
        });
    });
});