/* global it, describe, expect */

import contributors from "./contributors_reducer";

describe("todos reducer", () => {
  it("should return the initial state", () => {
    expect(contributors(undefined, {})).toEqual({});
  });

  it("should handle GET_CONTRIBUTORS_UNASSIGNED", () => {
    expect(contributors(
      {},
      {
        type: "GET_CONTRIBUTORS_UNASSIGNED",
        payload: { name: "asdf", age: 15 },
      },
    )).toEqual({
      unassigned: { name: "asdf", age: 15 },
    });
  });
});
