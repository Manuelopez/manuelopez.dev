export let dsAlgoData = {
  // :array
  array: {
    info: ['continguos in memory', 'Constant time access'],
    problems: {
      '217': {
        title: 'Contains Duplicate',
        leetcodeLink:
          'https://leetcode.com/problems/contains-duplicate/description/',
        description: `
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
`,
        tests: [
          {
            input: `[1,2,3,1]`,
            output: `true`,
            explanation: `1 appears 2 times in the array we return true`,
            inputVal: {nums: [1, 2, 3, 1]},
            outputVal: true,
          },
        ],

        constraints: ['1 <= nums.length <= 10^5', '-10^9 <= nums[i] <= 10^9'],

        ideas: [
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
        ],

        code: function (nums: number[]): boolean {
          const found: Map<number, boolean> = new Map<number, boolean>();
          for (let i = 0; i < nums.length; i++) {
            if (found.has(nums[i])) {
              return true;
            } else {
              found.set(nums[i], true);
            }
          }

          return false;
        },

        tester: {
          generaator: function* (initial: { nums: number[] }) {
            let variables: any = { nums: initial.nums };
            variables.nums = [1, 2, 3, 4, 1];
            yield ['function name, initialize nums', 0];

            variables.found = new Map<number, boolean>();
            yield [
              'Initialzeed vriable found to a new Map type <number, boolean>',
              1,
            ];

            yield [
              'initialze for loop with x variable, x is of the valie nums[i]',
              2,
            ];
            variables.x = 0;
            variables.i = 0;
            for (let i = 0; i < variables.nums.length; i++) {
              let x = (variables.x = variables.nums[i]);
              variables.i = i;
              yield [
                `Checking if "found" contains x ${variables.found.has(x)}`,
                3,
              ];
              if (variables.found.has(x)) {
                yield [`return true`, 4];
              } else {
                yield [`if value of x: ${x} is not found else runs`, 5];
                yield [
                  `set the value of x = ${x} to true in the map called found`,
                  6,
                ];
                variables.found.set(x, true);
              }
            }

            yield ['return false', 9];
          },
        },
      },
      //next
    },
  },
  // next Ds
};
