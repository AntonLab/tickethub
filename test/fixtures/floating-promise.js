// Intentionally broken: used by TC-002-02 to prove no-floating-promises is an error.
// Excluded from the normal lint run; lint it with `npx eslint --no-ignore`.
async function work() {
  await Promise.resolve();
}

work();
