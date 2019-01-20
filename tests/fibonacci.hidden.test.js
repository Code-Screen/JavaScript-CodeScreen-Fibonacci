const Fibonacci = require("../fibonacci").Fibonacci;

var expect = require("chai").expect;

describe("Fibonacci Hidden Test", () => {
    describe("calculate", () => {
        it("generates 377", () => {
            const fib = new Fibonacci();
            expect(fib.calculate(14)).to.equal(377)

        });

        it("generates 610", () => {
            const fib = new Fibonacci();
            expect(fib.calculate(15)).to.equal(610)
        });

        it("generates 2584", () => {
            const fib = new Fibonacci();
            expect(fib.calculate(18)).to.equal(2584)
        });

        it("generates 4181", () => {
            const fib = new Fibonacci();
            expect(fib.calculate(19)).to.equal(4181)
        });
    });
});