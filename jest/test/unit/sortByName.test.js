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
    expect(sorting.sortByName(['Гарри Поттер'])).toEqual(['Гарри Поттер']);
  });
});

it("should return sorted array in ascending order with mixed case letters", () => {
  expect(sorting.sortByName(["гарри Поттер", "Властелин Колец", "Волшебник изумрудного города"])).toEqual(["Властелин Колец", "Волшебник изумрудного города", "гарри Поттер"]);
});

it("Numbers should be sorted in ascending order ", () => {
 expect(sorting.sortByName(["18", "33", "24"])).toEqual(["18", "24", "33"]);
});

it("should return sorted array with duplicate elements", () => {
 expect(sorting.sortByName(["Властелин Колец", "Волшебник изумрудного города", "Гарри Поттер", "Волшебник изумрудного города"])).toEqual(["Властелин Колец", "Волшебник изумрудного города", "Волшебник изумрудного города", "Гарри Поттер"]);
});

it("should return the same array when input is already sorted", () => {
 expect(sorting.sortByName(["Властелин Колец", "Волшебник изумрудного города", "гарри Поттер"])).toEqual(["Властелин Колец", "Волшебник изумрудного города", "гарри Поттер"]);
});

it("should return sorted array with English characters", () => {
  expect(sorting.sortByName(["gold", "pink", "orange", "brown"])).toEqual(["brown", "gold", "orange", "pink"]);
});


it("should handle empty strings", () => {
  expect(sorting.sortByName(["gold", "pink", "orange", "", "brown"])).toEqual(["", "brown", "gold", "orange", "pink"]);
});

it("Russian letters should be sorted in ascending order", () => {
  expect(sorting.sortByName(["Е", "С", "Р",])).toEqual(["Е","Р","С",]);
});

it("English letters should be sorted in ascending order", () => {
  expect(sorting.sortByName(["W", "Q", "J",])).toEqual(["J","Q","W",]);
});

it("should handle punctuation marks in strings", () => {
  expect(sorting.sortByName(["gold", "pink", "orange", "brown!"])).toEqual(["brown!", "gold", "orange", "pink"]);
});