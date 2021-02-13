// 自下向上
function fib2 (n) {
  if (n === 2 || n === 1) {
    return 1
  }

  let prev = 1
  let curr = 1

  for (let i = 3; i <= n; i++) {
    let sum = prev + curr
    prev = curr
    curr = sum
  }
  return curr
}

// dp数组优化自上往下
function fib1 (n) {
  let dp = []
  dp[1] = dp[2]= 1
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
}

function fib (n) {
  if (n === 1 || n === 2) return 1
  return fib(n - 1) + fib(n - 2)
}

function demo2 () {
  console.log('fib2: ', fib2(10))
  console.log('fib2: ', fib2(1))
  console.log('fib1: ', fib1(10))
  console.log('fib1: ', fib1(1))
  console.log('fib: ', fib(10))
  console.log('fib: ', fib(1))
}
demo2()