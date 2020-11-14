import { parse } from "../lib";

function getParser(code) {
  return () => parse(code, { sourceType: "module" });
}

describe("logical default assignment syntax", function () {
  it("should parse", function () {
    expect(getParser(`function foo(arg ||= 0) {}`)()).toMatchSnapshot();
  });
});
