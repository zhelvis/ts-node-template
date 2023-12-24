import { run } from "node:test";
import { spec } from "node:test/reporters";
import { glob } from "glob";

const testPattern = "**/*.spec.ts";

glob(testPattern).then((files) => {
  const reporter = new spec();
  run({ files }).compose(reporter).pipe(process.stdout);
});
