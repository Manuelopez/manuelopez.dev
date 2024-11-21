# 121. Best Time to buy and Sell Stock

[Leetcode](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)

##### Constraints

- 1 <= prices.length <= 10^5
- 0 <= prices[i] <= 10^4
- can only the on one of the days after. selling on a previus day not allowed

##### Ideas

```markdown
Sliding Window T: O(N), S: O(1)

- left pointer = 0
- right pointer = left +1
- maxProfit = 0
- while loop while right < prices.lenth
  - calculate the currentProfit
  - if currentProfit > maxProfit
    - maxProfit = currentProfit
  - prices[right] < prices[left]
    - left = righ
  - righta++
```

##### Test

```markdown
- Example 1
  - input: [7,1,5,3,6,4]
  - Output: 5
  - Explanation: buy on day 2 (price = 1) and seld on day 5 (pirces = 6) profit = 6-1 = 5
```

### Code

```typescrip
function maxProfit(prices: number[]): number {
    let left =0
    let right = left + 1

    let maxProfit = 0;
    while(right < prices.length){
        let currentProfit = prices[right] - prices[left]
        maxProfit = currentProfit > maxProfit ? currentProfit : maxProfit

    if(prices[right] < prices[left]){
        left = right
    }
    right++

    }

    return maxProfit
};

```
