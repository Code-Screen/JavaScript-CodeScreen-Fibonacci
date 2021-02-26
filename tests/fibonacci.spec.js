import { Fibonacci } from '../fibonacci.js'

const fib = new Fibonacci();

describe("Fibonacci Test", () => {

    describe("calculate", () => {

        it("generates 0", () => {
            expect(fib.calculate(0)).toEqual(0)
        });

        it("generates 1", () => {
            expect(fib.calculate(1)).toEqual(1)
        });

        it("generates 6765", () => {
            expect(fib.calculate(20)).toEqual(6765)
        });

        it("generates 75025", () => {
            expect(fib.calculate(25)).toEqual(75025)
        });

    });
    
});
