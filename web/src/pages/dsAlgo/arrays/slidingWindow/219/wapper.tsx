import Problem from '../../../../../components/problem';

const title = '219. Contains Duplicate II';
const description = `
Given an integer array nums and a integer k, return true if tthere are two distinct indeices i and j in the array such that nums[ii] == nums[j] and abs (i - j) <= k
`;

const tests = [
  {
    input: `nums = [1,2,3,1]`,
    output: `true`,
    explanation: ``,
    inputVal: { nums: [1, 2, 3, 1], k: 3 },
    outputVal: true,
  },
];

const constraints = [
  '1 <= nums.length <= 10^5',
  '-10^9 <= nums[i] <= 10^9',
  '0 <= k<= 10^5',
];

const ideas = [
  {
    title: 'sliding window hash set',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(k)',
    steps: [
      'window hashset',
      'left pointer = 0',
      'loop array',
      [
        'if r - left > k ',
        ['window.remove(nums[left])', 'left++'],
        'if window.has(nums[right])',
        ['return true'],
        'window.add(nums[right]',
      ],
      'return false',
    ],
  },
];

function containsNraebyDuplicate(nums: number[], k: number): boolean {
  let window: Set<number> = new Set<number>();
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    if (right - left > k) {
      window.delete(nums[left]);
      left++;
    }

    if (window.has(nums[right])) {
      return true;
    }

    window.add(nums[right]);
  }
  return false;
}

//todo: tuuu orita mmg
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
