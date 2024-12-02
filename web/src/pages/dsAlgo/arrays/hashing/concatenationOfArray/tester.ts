export const variables: any = {};
export  function* tester() {
  variables.nums = [1, 2, 3, 4, 1];
  yield 'function name, initialize nums';
  variables.found = new Map<number, boolean>();
  yield 'Initialzeed vriable found to a new Map type <number, boolean>';

  yield 'initialze for loop with x variable, x is of the valie nums[i]';
  variables.x = 0;
  for (let x of variables.nums) {
    variables.x = x;
    yield `Checking if "found" contains x ${variables.found.has(x)}`;
    if (variables.found.has(x)) {
      yield `return true`;
    } else {
      yield `set the value of x = ${x} to true in the map called found`;
      variables.found.set(x, true);
    }
  }

  yield 'return false';
  return false;
}
