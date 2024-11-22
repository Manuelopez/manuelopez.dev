# 680 Valid Palindrome II

[Leetcode](https://leetcode.com/problems/valid-palindrome-ii/description/)

##### Constraints

- 1 <= s.length <= 10^5
- s consists of lowecase english letters

##### Ideas

```markdown
two pointer T: O(N), S: O(1)

- left and right pointers 
- left = 0
- right = s.length
- while left < right
  - if s[left] != s[right]
    - check which one we move the left one or right one
    - if none of them work return false
    - else update one of the pointers and continue
- return true
```

##### Test

```markdown
- Example 1
  - input: [1,2,3,1]
  - Output: true
  - Explanation: 1 appears 2 times in the array we return true
```

### Code

```typescript

function validPalindrome(s: string): boolean{
    let left = 0
    let right = s.length -1

    while(left < right){
        if(s[left] !== s[right]){
             const skipLeft = s.substring(left+1);
             const skipRight = s.substring(left, right);
             return (skipLeft.split("").reverse().join() === skipLeft || skipRight.split("").reverse().join() === skipRight)
        }
        left++
        right--
    }
    return true

}
```
