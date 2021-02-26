import { Fibonacci } from '../fibonacci.js'

const fib = new Fibonacci();

describe("Fibonacci Hidden Test", () => {

    describe("calculate", () => {

        it("generates 377", () => {
            expect(fib.calculate(14)).toEqual(377)
        });

        it("generates 610", () => {
            expect(fib.calculate(15)).toEqual(610)
        });

        it("generates 2584", () => {
            expect(fib.calculate(18)).toEqual(2584)
        });

        it("generates 4181", () => {
            expect(fib.calculate(19)).toEqual(4181)
        });

    });
    
});
