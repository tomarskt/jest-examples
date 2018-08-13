import getMyOpportunities from "./myOpportunities.selector";

let mockXXX = [{ id: 0, name: "initial" }];
jest.mock("./dependency", () => ({
  dependencyFunction: () => mockXXX
}));

describe("myOpportunities selector", () => {
  it("should sort ", () => {
    mockXXX = [
      {
        id: 1,
        name: "a"
      },
      {
        id: 2,
        name: "z"
      },
      {
        id: 3,
        name: "b"
      }
    ];
    const ids = getMyOpportunities().map(o => o.id);
    expect(ids).toEqual([1, 3, 2]);
  });

  it("should sort ", () => {
    mockXXX = [
      {
        id: 1,
        name: "aa"
      },
      {
        id: 2,
        name: "zz"
      },
      {
        id: 3,
        name: "bb"
      }
    ];
    const ids = getMyOpportunities().map(o => o.id);
    expect(ids).toEqual([1, 3, 2]);
  });
});
