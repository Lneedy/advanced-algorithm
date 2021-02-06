

// 全排列
function permute (nums) {
  let res = []
  let track = []
  backtrack (nums, track)
  function backtrack (nums, track) {
    if (track.length === nums.length) {
      res.push([].concat(track))
      return
    }
  
    for (let i = 0; i < nums.length; i++) {
      if (track.indexOf(nums[i]) > -1) {
        continue
      }
      track.push(nums[i])
  
      backtrack(nums, track)
  
      track.pop()
    }
  }
  console.log('%cpermute:', 'color: #16a4fd' , res)
	return res
}




permute([1, 2, 3])

