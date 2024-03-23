const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });
});

describe('Empty array test suit', () => {
  it('Should return an empty array if input array is empty', () => {
    expect(sorting.sortByName([])).toEqual([]);
  });
});

describe('Single element array test suit', () => {
  it('Should return the same array if it contains only one element', () => {
    const inputArray = ['Гарри Поттер'];
    expect(sorting.sortByName(inputArray)).toEqual(['Гарри Поттер']);
  });
});