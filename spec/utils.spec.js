const { expect } = require("chai");
const { formatDates } = require("../db/utils/utils");

describe("formatDates", () => {
  it("returns an empty array when passed an empty array", () => {
    expect(formatDates([])).to.eql([]);
  });
  it("returns an empty array when passed an empty array", () => {
    const input = [
      {
        body: "Invisible man was terrible avoid at all cost, thank me later",
        film_id: 1,
        author: "KLM94",
        votes: 16,
        created_at: 1511354163389
      }
    ];
    const actual = formatDates(input);
    const expected = [
      {
        body: "Invisible man was terrible avoid at all cost, thank me later",
        film_id: 1,
        author: "KLM94",
        votes: 16,
        created_at: new Date(1511354163389)
      }
    ];
    expect(actual).to.eql(expected);
  });
});
