
// 字符串最小编辑距离(滚动数组优化)
function minEditDistance (str, target) {

  let res = 0;
  res = calculate(str, target)

  function calculate (str, target) {
    const n = str.length
    const m = target.length
    const dp = []
    let temp = 0
    // base case
    for (let i = 0 ; i < n; i++) dp[i] = i
    for (let i = 1; i < n; i++) {
      temp = dp[0]
      dp[0] = i
      for (let j = 1; j < m; j++) {

        let mid = temp
        temp = dp[j]
        if (str[i - 1] === target[j - 1]) {
          dp[j] = mid
        } else {
          // 删除
          let del = dp[j - 1]
          // 插入
          let insert = dp[j - 1]
          // 替换
          let change = mid
          dp[j] = Math.min(del, insert, change) + 1
        }
      }
    }
    return dp[n]
  }

  console.log('%cdemo.js line:43 res', 'color: #007acc;', res);
  return res
}

function demo1 () {
  let limit = 2
  // let dict = ['active']
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

demo1()
