import Problem from '../../../../../components/problem';

const title = '58. Lngth of last Word';
const description = `
Given a string s consisting of words and spaces return the length of the last word in the string

A word is a maximal substring consisting of non-space caracters
`;

const constraints = [
  '1 <= s.lenth <= 10^4',
  's consists of only english letters and spaces',
  'There will be atleast one word in s',
];

const ideas = [
  {
    title: 'split function',
    timeComplexity: 'O(n) + O(split function)',
    spaceComplexity: 'O(n)',
    steps: [`let split = s.split(' ')`, 'return split[split.length-1].length'],
  },

  /* { */
  /*   title: 'loop', */
  /*   timeComplexity: 'O(n)', */
  /*   spaceComplexity: 'O(1)', */
  /*   steps: [ */
  /*     ``, */
  /*     'return split[split.length-1].length' */
  /*   ], */
  /* }, */
];

const tests = [
  {
    input: `s = "hello world"`,
    output: `5`,
    explanation: `The last word is "world" with length 5`,
    inputVal: { s: 'hello world' },
    outputVal: 5,
  },
];

function lengthOfLastWord(s: string): number {
  let words = s.split(' ');
  words = words.filter((w) => w !== '');
  return words[words.length - 1].length;
}

const code = [
  `function lengthOfLastWord(s: string): number {`,
  `let words = s.split(' ');`,
  `words = words.filter((w) => w !== '')`,
  `return words[words.length - 1].length;`,
  `}`,
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
