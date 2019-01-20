const Fibonacci = require("../fibonacci").Fibonacci;

var expect = require("chai").expect;

describe("Fibonacci Test", () => {
    describe("calculate", () => {
        it("generates 0", () => {
            const fib = new Fibonacci();
            expect(fib.calculate(0)).to.equal(0)

        });

        it("generates 1", () => {
            const fib = new Fibonacci();
            expect(fib.calculate(1)).to.equal(1)
        });

        it("generates 6765", () => {
            const fib = new Fibonacci();
            expect(fib.calculate(20)).to.equal(6765)
        });

        it("generates 75025", () => {
            const fib = new Fibonacci();
            expect(fib.calculate(25)).to.equal(75025)
        });
    });
});