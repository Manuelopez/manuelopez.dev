import Problem from '../../../../components/problem';

const title = '144. Binrary tree Preorder';

const description = `
Given the root of a binary tree, return the preorder of its nodes values
`;

// TODO: mirraa no son array hazmele tu real implementation al jodio TREEE pa que se haga una vaina bacana
const tests = [
  {
    input: `[1,null,2,3]`,
    output: `[1,2,3]`,
    explanation: `mann i ain explaing this ro you now`,
    inputVal: { nums: [1, 3, 5, 6], target: 5 }, // TODO oite TODO queeeee TODO
    outputVal: 2, // TMB TU REAL TODO
  },
];

const constraints = [
  'The number of nodes in the tree is in the range [0,100]',
  '-100 <= Node.val <= 100',
];

// TODO solo esta bez que ya casi terminio
const ideas = [
  {
    title: 'Recursion',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
    steps: [],
  },
];

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function preorderTrabersal(root: TreeNode | null): number[]) {
  let trabersal: number[] = []
  return []
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
