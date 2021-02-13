
// 字符串最小编辑距离
function minEditDistance (str, target) {

  let res = 0;
  res = calculate(str, target)

  function createArray (n, m) {
    return new Array(n).fill('').map(d => new Array(m).fill(0))
  }

  function calculate (str, target) {
    const n = str.length
    const m = target.length
    let dp = createArray(n, m)
    console.log('%cdemo.js line:46 dp', 'color: #007acc;', dp);
    // base case
    for (let i = 0 ; i < n; i++) {
      dp[i][0] = i
    }

    for (let j = 1 ; j < m; j++) {
      dp[0][j] = j
    }

    for (let i = 1;i < n; i++) {
      for (let j = 1; j < m; j++) {
        if (str[i] === target[j]) {
          dp[i][j] = dp[i - 1][j - 1]
        } else {
          // 删除
          let del = dp[i - 1][j]
          // 插入
          let insert = dp[i][j - 1]
          // 替换
          let change = dp[i - 1][j - 1]
          dp[i][j] = Math.min(del, insert, change) + 1
        }
      }
    }

    return dp[n - 1][m - 1]
  }

  console.log('%cdemo.js line:43 res', 'color: #007acc;', res);
  return res

}
function demo () {
  let limit = 2
let dict = ['active', 'alive', 'dative', 'native', 'actives', 'act', 'math', 'mouth', 'aboundon']
let input = 'ative'
let arr = []
for (let i = 0; i < dict.length; i++) {
  let distance = minEditDistance(input, dict[i])
  if (distance <= limit) {
    arr.push(dict[i])
  }
}
// ["active", "alive", "dative", "native", "actives"]
console.log('%cdemo.js line:60 arr', 'color: #007acc;', arr);
}


demo()