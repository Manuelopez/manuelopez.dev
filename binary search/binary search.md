# 704. Binary Search

[Leetcode](https://leetcode.com/problems/binary-search/description/)

##### Constraints

- 1 <= nums.length <= 10^4
- -10^4 < nums[i], target < 10^4
- All the integers in nums are unique
- nums is sorted in ascending order

##### Ideas

```markdown
Binary search T: O(log(N)), S: O(1)

- min = 0
- max = nums.length - 1
- loop(min < max)
  - mid = math.floor((min + max)/2)
  - if(nums[mid] === target)
    - return mid
  - if target > nums[mid]
    - min = mid+1
  - else
    - max = mid
- return -1
```

##### Test

```markdown
- Example 1
  - input: nums = [-1, 0, 3, 5, 9, 12] , target 9
  - Output: 4
  - Explanation: 9 exists in nums and its index is 4
```

### Code

```typescrip
function search(nums: number[], target: number): number{
    let min = 0
    let max = nums.length - 1
    while(min <= max){
        const mid = Math.floor((min + max)/2)
        if(nums[mid] === target){
            return mid
        }else if(target > nums[mid]){
            min = mid + 1
        }else {
            max = mid
        }
        if(min === max){
            return nums[min] === target ? min : -1
        }
    }
    return -1
}

```
