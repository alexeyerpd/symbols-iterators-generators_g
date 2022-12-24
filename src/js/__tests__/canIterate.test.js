import { canIterate } from "../canIterate";

test.each([
  [new Map(), true],
  [new Set(), true],
  [null, false],
  [10, false],
  ["Netology", true],
])("canIterate - should be correct result", (value, result) => {
  expect(canIterate(value)).toBe(result);
});
