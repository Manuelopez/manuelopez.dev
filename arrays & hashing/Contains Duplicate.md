# The Algorithim Desing Canvas (MD)

### Contains Duplicate

[Leetcode](https://leetcode.com/problems/contains-duplicate/description/)

##### Constraints:

- 1 <= nums.length <= 10^5
- -10^9 <= nums[i] <= 10^9

##### Ideas:

```markdown
Frequency Counter T: O(N), S: O(N)

- Create a hashmap with key nums[i] and boolean key
- Loop though the array
  - if nums[i] does not exist set the value in map to one
  - else if nums[i] exist return true
- loop ends then return false
```

##### Test:

```markdown
- Example 1
  - input: [1,2,3,1]
  - Output: true
  - Explanation: 1 appears 2 times in the array we return true
```

### Code
```typescript
function containsDuplicate(nums: number[]): boolean{
    let found: Map<number, boolean> = new Map<number, boolean>()

    for(let x of nums){
        if(found.has(x)){
            return true
        }else{
            found.set(x, true)
        }
    }
    return false
}
```
