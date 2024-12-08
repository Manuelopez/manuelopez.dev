import Problem from '../../../../components/problem';
import { Stack } from '../implementation';

const title = '682';

const description = `
You are keeping the scores for a baseball game with strage rules. At the beginning of the game, you start with an empty record.

You are given a list of strings operations, where operations[i] is the ith operation you must applu to the record and is one of the following

- an integer x
    - Record a new score of x.

- '+'
    - record a ew score that is the sum of precius two scores

- 'D'
    - record a new score that is the double of the previous score

- 'C'
    - incalidate the previous score, removing it form the record


return the sum of all scores on the record after applayin all the operations
the test cases are generated such that the answe and all intermidiate calculations fit in a 32 bit integer and that all opertions are valid

`;

const tests = [
  {
    input: `ops = ["5", "2", "C", "D", "+"]`,
    output: `30`,
    explanation: `do the ops my g`,
    inputVal: { ops: ['5', '2', 'C', 'D', '+'] },
    outputVal: 30,
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
    title: 'Use a Stack',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
    steps: [
      'create a stack that called scores',
      'loop operations',
      [
        'if ops[i] === "C"',
        ['scores.pop()'],
        'if ops[i] === "D"',
        ['scores.push(scores.top() * 2)'],
        'if ops[i] === "+"',
        [
          'let t = score.pop()',
          'let newScore = score.top() + t',
          'scores.push(t)',
          'scores.push(newScore)',
        ],
      ],
      'let sum',
      'loop scores until empty',
      ['sum += scores.pop()'],

      ' return sum',
    ],
  },
];

function calPoints(operations: string[]): number {
  let sum = 0;

  const scores: number[] = [];

  for (let i = 0; i < operations.length; i++) {
    if (operations[i] === 'C') {
      scores.pop();
    } else if (operations[i] === 'D') {
      scores.push(scores[scores.length - 1] * 2);
    } else if (operations[i] === '+') {
      scores.push(scores[scores.length - 1] + scores[scores.length - 2]);
    } else {
      scores.push(parseInt(operations[i]));
    }
  }

  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }

  return sum;
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
