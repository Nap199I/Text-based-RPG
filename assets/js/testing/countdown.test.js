/* jshint esversion: 11 */
/**
 * @jest-environment jsdom
 */

const { setInterval } = require("../countdown");
jest.useFakeTimers();

beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("confirmation.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("dom tests", () => {
    test("span content should start at 10", () => {
        expect(document.getElementById("countdown").innerHTML).toEqual("10");
    });
    // this test fails i am unable to advance the countdown timer but this is what i had
    test("span content should end at 0", () => {
        setInterval();
        jest.advanceTimersByTime(10000);
        expect(document.getElementById("countdown").innerHTML).toEqual("0");
    });
});
