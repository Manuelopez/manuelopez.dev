import Problem from '../../../../../components/problem';

const title = '392. IsSubsequence';
const description = `
Given two strings s and t return true if s is a suvsequence of t or false otherwise

A sybsequence of a string isa new string that is formed from the original string by deleting some (can be none) of the caracters without disturbing the relative positions remaning characters(ie. "ace" is a suvsequece of "abcde" while "aec" is not)
`;

const constraints = [
  '0 <= s.length <= 100',
  '- <= t.length <= 10^4',
  's and t consist only of lowecase english letters',
];

const ideas = [
  {
    title: 'two pointers',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    steps: [
      'pointer i for t',
      'pointer j for s',
      'loop the string t',
      ['if t[i] === t[j]', ['j++']],
      'return j === s.length',
    ],
  },
];

const tests = [
  {
    input: `s = "abc", t= "ahbgdc"`,
    output: `true`,
    explanation: `s is a substring`,
    inputVal: { s: 'abc', t: 'ahbgdc' },
    outputVal: true,
  },
];

function isSubsequence(s: string, t: string): boolean {
  let j = 0;
  for (let i = 0; i < t.length; i++) {
    if (t[i] === s[j]) {
      j++;
    }
    if (j === s.length) {
      return true;
    }
  }

  return j === s.length;
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
