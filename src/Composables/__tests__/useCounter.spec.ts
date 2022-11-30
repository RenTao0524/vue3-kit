import { useCounter } from "../useCounter";
import { expect, test } from "vitest";

test("useCounter", () => {
  const { count, increment } = useCounter();
  expect(count.value).toBe(0);

  increment();
  expect(count.value).toBe(1);
});
