// helpers.js
export function increment(current: number, max: number = 10) {
  if (current < max) {
    return current + 1;
  }
  return current;
}
