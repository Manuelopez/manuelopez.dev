import Problem from '../../../../components/problem';

const title = '35. Search Insert Position ';

const description = `

Given a sorted Array of distinct integeers and a target balue return the index if the target is found. If not, return the infex where it woul be if it were inserted in orfer
you must wite and algorithim with O(log n)

`;

const tests = [
  {
    input: `nums = [1,3,5,6] target = 5`,
    output: `2`,
    explanation: `mann i ain explaing this ro you now`,
    inputVal: { nums: [1, 3, 5, 6], target: 5 },
    outputVal: 2,
  },
];

const constraints = [
  '1 <= operations.length <= 1000',
  'operations[i] is "C", "D", "+" or a string representing an integer in the range [-3,*1-^4, 3*1-^4]',
  'for the opeations "+", there will always be atleast two prevois scores on thre record',
  'For the opeations "C" and "D", there will always be at least one previuous score on the record',
];

const ideas = [
  {
    title: 'binary search',
    timeComplexity: 'O(log(n))',
    spaceComplexity: 'O(1)',
    steps: [
      'let top = nums.length',
      'let bottom = 0',
      'let middle = Math.floor((top+bottom) /2)',
      'loop while top != bottom',
      [
        'middle = Math.floor((top+bottom) /2)',
        'if target > nums[middle] ',
        ['bottom = middle + 1'],
        'if target < nums[middle]',
        ['top = middle'],
        'else',
        ['return middle'],
      ],
      'return top',
    ],
  },
];

function seachInsert(nums: number[], target: number): number {
  let top = nums.length;
  let bottom = 0;
  let middle = Math.floor((top + bottom) / 2);

  while (top > bottom) {
    middle = Math.floor((top + bottom) / 2);
    if (target > nums[middle]) {
      bottom = middle + 1;
    } else if (target < nums[middle]) {
      top = middle;
    } else {
      return middle;
    }
  }
  return top;
}

// TODO: TUUUU cono TUUUUU
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
