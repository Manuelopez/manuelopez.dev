import Problem from '../../../../../components/problem';

const title = '217. Contains Duplicate';
const description = `
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
`;
const code = [
  'function containsDuplicate(nums: number[]): boolean{',
  'let found: Map<number, boolean> = new Map<number, boolean>()',
  ' ',
  'for(let x of nums){',
  'if(found.has(x)){',
  'return true',
  '}else{',
  'found.set(x, true)',
  '}',
  '}',
  'return false',
  '}',
];

const variables: any = {};
function* tester() {
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

const testerString = tester.toString();

const constraints = ['1 <= nums.length <= 10^5', '-10^9 <= nums[i] <= 10^9'];

const ideas = [
  {
    title: 'Frequency Counter',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
    steps: [
      'Create a hashmap with key nums[i] and boolean value',

      'Loop through the array',
      [
        'if nums[i] does not exist set value in map to true',
        'else return true',
      ],
      'loop ends then return false',
    ],
  },
];

const tests = [
  {
    input: `[1,2,3,1]`,
    output: `true`,
    explanation: `1 appears 2 times in the array we return true`,
    inputVal: [1, 2, 3, 1],
    outputVal: true,
  },
];

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
