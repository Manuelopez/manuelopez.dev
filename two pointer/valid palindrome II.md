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
    - generate sub string skiping left
    - generate sub string skiping right
    - check if either is a palnidrome if it is return true else return false
- return true
```

##### Test

```markdown
- Example 1
  - input: s = "aba"
  - Output: true
```

### Code

```typescript

function validPalindrome(s: string): boolean{
    let left = 0
    let right = s.length -1

    while(left < right){
        if(s[left] !== s[right]){
             const skipLeft = s.substring(left+1, right +1);
             const skipRight = s.substring(left, right);
             return (skipLeft.split("").reverse().join("") === skipLeft || skipRight.split("").reverse().join("") === skipRight)
        }
        left++
        right--
    }
    return true

}
```
