# TITLE

[Leetcode](LINK)

##### Constraints

- 1 <= s.lenth, t.length <= 5*10^4
- s and t consist of lowecase english letters

##### Ideas

```markdown
Array Frequency counter T: O(N), S: O(1)

- edge case if length of string is different
- create one array with the charcter code being index and the arr[i] being the frequency
- loop through caracters
  - arr[s[i].charCodeAt(0) - 'a'.charCodeAt(0)]++
  - arr[s[i].charCodeAt(0) - 'a'.charCodeAt(0)]--
-  loop through freq array 
  - if a value is not eaul to 0 return false
- return true
```

##### Test

```markdown
- Example 1
  - input: s = "anagram", t= "nagaram"
  - Output: true
  - Explanation: they are anagrams 
```

### Code

```typescript
function isAnagaram(s: string, t: string): boolean{
    if(s.length !== t.length){
        return false;
    }

    let freq: number[] = Array(26).fill(0)
    for(let i = 0; i < s.length; i++){
        freq[s[i].charCodeAt(0) - 'a'.charCodeAt(0)]++
        freq[t[i].charCodeAt(0) - 'a'.charCodeAt(0)]--
    }

    for(let x of freq){
        if(x !== 0){
            return false
        }
    }

    return true
}


```
