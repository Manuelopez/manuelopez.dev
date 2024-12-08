import Problem from '../../../../../components/problem';

const title = '1. Two';
const description = `
Given an array of integers nums and an integer target return indices of the two numbers such taht they add up to target.

You may assume that each input would have exactly one soulution, and you may not use the same element twice

you can return the answe in any order.
`;

const tests = [
  {
    input: `nums = [2, 7, 11, 15], target = 9`,
    output: `[0, 1]`,
    explanation: `Because nums[0] nums [1] === 9, we return [0, 1]`,
    inputVal: { nums: [2, 7, 11, 15], target: 9 },
    outputVal: [0, 1],
  },
];

const constraints = [
  '2 <= nums.length <= 10^4',
  '-10^9 <= nums[i] <= 10^9',
  '-10^9 <= target <= 10^9',
];

const ideas = [
  {
    title: 'hash map',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
    steps: [
      'create hash map of remaindersj<number, number',
      'loop array nums',
      [
        'if remainder.has(nums[x])',
        ['return [reaminder.get(target - nums), i]'],
        'else',
        ['reamainder.set(target - nums[i], i)'],
      ],
      'return [] this hsould never happend cause of the constraints',
    ],
  },
];

function twoSum(nums: number[], target: number): number[] {
  let remainder: Map<number, number> = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    if (remainder.has(nums[i])) {
      return [remainder.get(nums[i])!, i];
    } else {
      remainder.set(target - nums[i], i);
    }
  }

  return [];
}

const code = [
  'function isSubsequence(s: string, t: string): boolean {',
  'let j = 0;',
  'for (let i = 0; i < t.length; i++) {',
  'if (t[i] === s[j]) {',
  'j++;',
  '}',
  'if (j === s.length) {',
  'return true;',
  '}',
  '}',
  'return j === s.length;',
  '}',
];

//TODO tester
const variables: any = {};
function* tester() {
  variables.nums = [1, 2, 3, 4, 1];
  yield ['function name, initialize nums', 0];

  variables.found = new Map<number, boolean>();
  yield ['Initialzeed vriable found to a new Map type <number, boolean>', 1];

  yield ['initialze for loop with x variable, x is of the valie nums[i]', 2];
  variables.x = 0;
  variables.i = 0;
  for (let i = 0; i < variables.nums.length; i++) {
    let x = (variables.x = variables.nums[i]);
    variables.i = i;
    yield [`Checking if "found" contains x ${variables.found.has(x)}`, 3];
    if (variables.found.has(x)) {
      yield [`return true`, 4];
    } else {
      yield [`if value of x: ${x} is not found else runs`, 5];
      yield [`set the value of x = ${x} to true in the map called found`, 6];
      variables.found.set(x, true);
    }
  }

  yield ['return false', 9];
}

const testerString = tester.toString();

export default function Wrapper() {
  return (
    <Problem
      title={title}
      description={description}
      constraints={constraints}
      ideas={ideas}
      tests={tests}
      code={code}
      variables={variables}
      tester={tester}
    ></Problem>
  );
}
