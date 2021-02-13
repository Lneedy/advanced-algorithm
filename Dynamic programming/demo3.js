// 凑硬币 （最小硬币数 不限制单个数量）

function coinChange (coins, amount) {

  // dp 定义
  function dp (n) {
    // base case
    if (n < 0) return -1
    if (n === 0) return 0
    let res = -1
    // 状态转移方程
    for (let i = 0; i < coins.length; i++) {
      // 状态变量 amount
      let temp = dp(n - coins[i])
      if (temp === -1) continue
      if (res === -1) res = temp + 1
      else {
        // 选择
        res = Math.min(res, 1 + temp)
      }
    }
    return res
  }
  return dp(amount)
}

// dp数组迭代
function coinChange2 (coins, amount) {
  // 存放结果
  let dp = []
  dp[0] = 0
  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (i - coins[j] < 0 ) continue
      if (dp[i] === undefined) {
        dp[i] = dp[i - coins[j]] + 1
      } else {
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
      }
    }
  }
  return dp[amount] === undefined ? -1 : dp[amount]
}

function demo3 () {
  // 人民币面值
  let coins = [1, 2, 5, 10, 100]
  console.log(coinChange(coins, 39))
  console.log(coinChange2(coins, 109))
}
demo3()