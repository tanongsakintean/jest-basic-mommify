import { describe, test, expect } from "@jest/globals";
import { mommify } from "../mommify";

describe("momnify ", () => {
  it("should be return empty string when input is empty", () => {
    const actual = mommify("");
    expect(actual).toBe("");
  });

  it("shoulds be return the same string when input does not contains vowel", () => {
    const actual = mommify("str");

    expect(actual).toBe("str");
  });

  it("should be return string if string is vowel", () => {
    const actual = mommify("a");
    expect(actual).toBe("mommy");
  });

  it("should be return string contains vowel ", () => {
    const actual = mommify("bla");
    expect(actual).toBe("blmommy");
  });

  it("should be return string if vowel is less than 30% of total string length", () => {
    const actual = mommify("blah");
    expect(actual).toBe("blah");
  });
});
