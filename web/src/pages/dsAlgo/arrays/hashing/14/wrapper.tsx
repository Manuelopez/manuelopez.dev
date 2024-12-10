import Problem from '../../../../../components/problem';

const title = '14. Longest Common Prefix';
const description = `
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".
`;

const tests = [
  {
    input: `strs = ["flower","flow","flight"]`,
    output: `"fl"`,
    explanation: `Because nums[0] nums [1] === 9, we return [0, 1]`,
    inputVal: { strs: ['flower', 'flow', 'flight'] },
    outputVal: 'fl',
  },
];

const constraints = [
  '1 <= strs.length <= 200',
  '0 <= strs[i].length <= 200',
  'strs[i] consists of only lowercase English letters',
];

const ideas = [
  {
    title: 'loop with shortes length',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
    steps: [
      'lcp variable ',
      'loop array strs[0]',
      [
        'lop strs.length',
        [
          'if i > strs[j] length',
          ['return lcp'],

          ['if strs[j][i]!== strs[0][i]', ['return lcp']],
        ],
        'add cracter to lcp',
      ],
      'return lcp',
    ],
  },
];

function longestCommonPrefix(strs: string[]): string {
  let lcp = '';

  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 0; j < strs.length; j++) {
      if (i > strs[j].length) {
        return lcp;
      }
      if (strs[j][i] !== strs[0][i]) {
        return lcp;
      }
    }

    lcp += strs[0][i];
  }

  return lcp;
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
