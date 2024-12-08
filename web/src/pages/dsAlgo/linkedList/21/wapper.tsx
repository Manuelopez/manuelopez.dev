import Problem from '../../../../components/problem';

const title = '21. Merge Two Sorted Lists ';

const description = `
You are given the heads of two sorted linked lists list1  and list 2 

Merge thw two lists into one sorted list. The list shou be made by splicing togeter the nodes of the first two lists.

return thehead of the merged liked list
`;

// TODO: mirraa no son array hazmele tu real implementation al jodio Linked list pa que se haga una vaina bacana
const tests = [
  {
    input: `list1 = [1,3,5,6], list2 = [1,3,4]`,
    output: `[1,1,2,3,4,4]`,
    explanation: `mann i ain explaing this ro you now`,
    inputVal: { nums: [1, 3, 5, 6], target: 5 }, // TODO oite TODO queeeee TODO
    outputVal: 2, // TMB TU REAL TODO
  },
];

const constraints = [
  'The number of nodes in borth lists is in the range  [0, 50]',
  '-100 <= Node.val <= 100',
  'Both lists1 and list2 are soreted in non-decreasing order',
];

const ideas = [
  {
    title: 'Merging',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
    steps: [
      'new head pointer',
      'if one is null return the other',
      'if list1.val < list2.val;',
      ['head = list1'],
      'else',
      ['head = list2'],
      'pointer current = head',
      'loop while(true)',
      [
        'if list1 === null',
        ['current.next =list2', 'break out of loop'],
        'if list2 === null',
        ['current.next =list1', 'break out of loop'],

        'if list1.val < list2.val',
        ['current.next =list1', 'list1 = list1.next'],
        'else',
        ['current.next =list2', 'list2 = list2.next'],
      ],
      'return head',
    ],
  },
];

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null {
  let head: ListNode | null = null;

  if (list1 === null) {
    return list2;
  }

  if (list2 === null) {
    return list1;
  }

  if (list1.val < list2.val) {
    head = list1;
    list1 = list1.next;
  } else {
    head = list2;
    list2 = list2.next;
  }

  let curr = head;
  while (true) {
    if (list1 === null) {
      curr.next = list2;
      break;
    }

    if (list2 === null) {
      curr.next = list1;
      break;
    }

    if (list1.val < list2.val) {
      curr.next = list1;
      list1 = list1.next;
    } else {
      curr.next = list2;
      list2 = list2.next;
    }

    curr = curr.next;
  }

  return head;
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
