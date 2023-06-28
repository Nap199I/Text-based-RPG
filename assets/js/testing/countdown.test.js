/**
 * @jest-environment jsdom
 */

const { test, expect } = require("@jest/globals");
const { function1, function2, function3 } = require("../countdown");
const { describe } = require("yargs");

beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("confirmation.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("dom tests", () => {
    test("span content should countdown");
    expect(document.getElementById("countdown").innerHTML).toEqual("0");
});