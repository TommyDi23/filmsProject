const { expect } = require("chai");
const { formatDates } = require("../db/utils/utils");

describe("formatDates", () => {
  it("returns an empty array when passed an empty array", () => {
    expect(formatDates([])).to.eql([]);
  });

  it("returns an array with one object with created_at time adjusted", () => {
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
  it("returns an array of multiple objects with created_at time adjusted in each object", () => {
    const input = [
      {
        body: "Invisible man was terrible avoid at all cost, thank me later",
        film_id: 1,
        author: "KLM94",
        votes: 16,
        created_at: 1511354163389
      },
      {
        body: "great movie would watch over and over again",
        film_id: 2,
        author: "KLM94",
        votes: 14,
        created_at: 1479818163389
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
      },
      {
        body: "great movie would watch over and over again",
        film_id: 2,
        author: "KLM94",
        votes: 14,
        created_at: new Date(1479818163389)
      }
    ];
    expect(actual).to.eql(expected);
  });
  it("check for mutation to original array", () => {
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
    expect(input).to.not.eql(expected);
  });
});
