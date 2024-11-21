# 94. Binary Tree Inorder Traversal

[Leetcode](https://leetcode.com/problems/binary-tree-inorder-traversal/description/)

##### Constraints

- The number of nodes in the tree is in the range [0,100]
- -100 <= Node.val <= 100

##### Ideas

```markdown
Recursion T: O(N), S: O(N) ("call stack")

- global array
- recursive
  - if node is null return
  - recurse on left child
  - add current node to array
  - recurse on right child
  - return
- return global array
```

##### Test

```markdown
- Example 1
  - input: root [1, null, 2, 3]
  - Output: [1,3,2]
  - Explanation: inorder traversal
```

### Code

```typescrip

function inorderTraversal(root: TreeNode | null): number[]{
    let inorder: number[] = []
    helper(root)
    return inorder

}
function helper(node: TreeNode | null, inorder: number[]){
    if(node === null){
        return
    }

    helper(node.left, inorder)
    inorder.push(node.val)
    helper(node.right, iorder)

}

```
