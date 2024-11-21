# 20. Valid Parentheses

[Leetcode](https://leetcode.com/problems/valid-parentheses/description/)

##### Constraints

- 1 <= s.length <= 10^4
- s consists of parentheses only '()[]{}'

##### Ideas

```markdown
Stack T: O(N), S: O(N)

- using a array for a Stack st = []
- loop by every carchter in s
  - if s is equal to one of the open parentheses push that parentheses
  - else if is equal to one of the closed parentheses
    - pop the first element from the stack
    - if poped element not equal to the open version of parentheses then return false
- return true
- eg
```

##### Test

```markdown
- Example 1
  - input: "()"
  - Output: true
  - Explanation: the string is a valid parentheses string
```

### Code

```typescrip
function isValid(s: string): boolean {
    let st: string[] = []
    for(let c of s){
        if(c === '(' || c === '[' || c === '{'){
            st.push(c)
            continue;
        }
        let poped = st.pop()
        if(c === ')' && poped !== '('){
            return false
        }else if(c === ']' && poped !== '['){
            return false
        }else if(c === '}' && poped !== '{'){
            return false
        }

    }
    return st.length === 0
}
```
