import test from "node:test";
import { strict as assert } from "node:assert";

import { greet } from "./index";

test("greeting", () => {
  assert.strictEqual(greet("Foo"), "Hello Foo");
});
