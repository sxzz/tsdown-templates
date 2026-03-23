import { expect, test } from "vite-plus/test";
import { fn } from "../src/index.js";

test("fn", () => {
  expect(fn()).toBe("Hello, tsdown!");
});
