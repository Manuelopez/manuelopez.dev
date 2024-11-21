# 206. Reverse Linked List

[Leetcode](https://leetcode.com/problems/reverse-linked-list/description/)

##### Constraints

- the number of nodes in the list is the range [0, 5000]
- -5000 <= Node.val <= 5000

##### Ideas

```markdown
eg T: O(N), S: O(1)

- handle edge cases where the list length is less than or equal 3
  - change pointers manually for each case
- prev = head
- curr = prev.next
- next = curr.next
  - loop while(next != null)
  - curr.
- eg
```

##### Test

```markdown
- Example 1
  - input: head = [1,2,3,4,5]
  - Output: [5,4,3,2,1]
  - Explanation: reverse the list
```

### Code

```typescrip
function reverseList(head: ListNode | null): ListNode | null{
    if(head === null || head.next === null){
        return head
    }else if(head.next.next === null){
        let prev = head
        let curr = head.next
        curr.next = prev
        prev.next = null
        return curr
    }

    let prev = head
    let curr = prev.next
    let next = curr.next
    prev.next = null
    while(next != null){
        curr.next = prev
        prev = curr
        curr = next
        next = next.next
    }

    curr.next = prev
    return curr

}

```
