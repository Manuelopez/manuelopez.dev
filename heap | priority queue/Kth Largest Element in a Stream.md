# 703. Kth Largest Element in a Stream

[Leetcode](LINK)

##### Constraints

- 0 <= nums.length <= 10^4
- 1 <= k <= nums.length + 1
- -10^4 <= nums[i] <= 10^4
- -10^4 <= val <= 10^4

##### Ideas

```markdown
eg T: O(N), S: O(N)

- eg
- eg
  - eg
  - eg
- eg
```

##### Test

```markdown
- Example 1

  - Input:
    ["KthLargest", "add", "add", "add", "add", "add"]
    [[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]

  - Output: [null, 4, 5, 5, 8, 8]

  - Explanation:

    KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);
    kthLargest.add(3); // return 4
    kthLargest.add(5); // return 5
    kthLargest.add(10); // return 5
    kthLargest.add(9); // return 8
    kthLargest.add(4); // return 8
```

### Code

```typescrip
var KthLargest = function(k, nums) {
    this.q = new MinPriorityQueue();
    this.k = k
    for(let x of nums){
        this.q.enqueue(x, x)
    }
    while(this.q.size() > this.k){
        this.q.dequeue()
    }
};

KthLargest.prototype.add = function(val) {
    this.q.enqueue(val, val)
    while(this.q.size()> this.k){
        this.q.dequeue();
    }
    return this.q.front().element;
};

```
