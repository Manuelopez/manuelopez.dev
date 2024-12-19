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
            inputVal: { nums: [1, 2, 3, 1] },
            outputVal: true,
          },
        ],

        codeStarter: `function (nums: number[]): boolean {
// We asume every variables exist in the variables object
  let variables: any = {}
  variables.nums = nums

}`,

        constraints: ['1 <= nums.length <= 10^5', '-10^9 <= nums[i] <= 10^9'],
      },
      //next
    },
  },
  // next Ds
};
