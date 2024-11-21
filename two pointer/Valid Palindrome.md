# 125. Valid Palindrome

[Leetcode](https://leetcode.com/problems/valid-palindrome/description/)

##### Constraints

- 1<= **s.length** <= 2 \_ 10^5
- **s** consists only of printable ACII carcters
- must remove all non alphanumerica caracters
- sastify palindrome definition

##### Ideas

```markdown
Two Pointer T: O(N), S: O(1)

- left pointer at 0
- right pointer ar s.length - 1
- while loop
  - if s[left] charcode non alphanumeric
    - left += 1
    - continue
  - if s[right] charcode non alphanumeric
    - right -= 1
    - continue
  - if s[left].toLowercase !== s[right].toLowercase
    - retrun false
```

##### Test

```markdown
Example 1

- input: s = "A man, a plan, a canal: Panama
- Output: true
- Explanation: "amanaplanaacanalpanama" is palindromr
```

### Code

```typescript
function isPalindrome(s: string): boolean {
  let left = 0;
  let right = s.length - 1;
  s = s.toLowerCase();
  while (left < right) {
    let leftCode = s[left].charCodeAt(0);
    if (
      !(
        (leftCode >= 48 && leftCode <= 57) ||
        (leftCode >= 97 && leftCode <= 122)
      )
    ) {
      left++;
      continue;
    }

    let rightCode = s[right].charCodeAt(0);

    if (
      !(
        (rightCode >= 48 && rightCode <= 57) ||
        (rightCode >= 97 && rightCode <= 122)
      )
    ) {
      right--;
      continue;
    }

    if (leftCode !== rightCode) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}
```
