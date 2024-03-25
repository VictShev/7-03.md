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

it("should return sorted array in ascending order with mixed case letters", () => {
  const inputArray = ["гарри Поттер", "Властелин Колец", "Волшебник изумрудного города"];
  const expectedArray = ["Властелин Колец", "Волшебник изумрудного города", "гарри Поттер"];

  expect(sorting.sortByName(inputArray)).toEqual(expectedArray);
});

it("Numbers should be sorted in ascending order ", () => {
  const inputArray = ["18", "33", "24"];
  const expectedArray = ["18", "24", "33"];

  expect(sorting.sortByName(inputArray)).toEqual(expectedArray);
});

it("should return sorted array with duplicate elements", () => {
  const inputArray = ["Властелин Колец", "Волшебник изумрудного города", "Гарри Поттер", "Волшебник изумрудного города"];
  const expectedArray = ["Властелин Колец", "Волшебник изумрудного города", "Волшебник изумрудного города", "Гарри Поттер"];

  expect(sorting.sortByName(inputArray)).toEqual(expectedArray);
});

it("should return the same array when input is already sorted", () => {
  const inputArray = ["Властелин Колец", "Волшебник изумрудного города", "гарри Поттер"];
  const expectedArray = ["Властелин Колец", "Волшебник изумрудного города", "гарри Поттер"];

  expect(sorting.sortByName(inputArray)).toEqual(expectedArray);
});

it("should return sorted array with English characters", () => {
  const inputArray = ["gold", "pink", "orange", "brown"];
  const expectedArray = ["brown", "gold", "orange", "pink"];

  expect(sorting.sortByName(inputArray)).toEqual(expectedArray);
});