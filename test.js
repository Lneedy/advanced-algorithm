// 中序遍历

let treeNode = {
	val: 1,
	left: {
		val: 2,
		left: {
			val: 7,
			left: null,
			right: {
				val: 8,
				left: null,
				right: null
			}
		},
		right: null
	},
	right: {
		val: 3,
		left: null,
		right: {
			val: 4,
			left: {
				val: 5,
				left: null,
				right: null
			},
			right: {
				val: 6,
				left: null,
				right: null
			}
		}
	}
} 

function buildNTree(arr, n) {
	let res = []

	console.log('%cbuildNTree ', 'color: red', res)
}

function buildTree()  {
	let arr = 
	buildNTree(arr) // [1 [2 [7 null 8] null] [3 null [4  5  6]]]
}

function arrFn() {
	let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
	reverse(arr) // [9, 8, 7, 6, 5, 4, 3, 2, 1]
	join(arr) // "1,2,3,4,5,6,7,8,9"
	concat(arr, arr) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9]
	slice(arr, -2) //  [8, 9]
	sort(arr) // [9, 8, 7, 6, 5, 4, 3, 2, 1]
	map(arr) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
	filter(arr) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
	every(arr) // false
	some(arr) // true 
	reduce(arr) // 45
	reduceRight(arr) // 45 

}
function reverse (arr) {
	let res = []
	let endIndex = arr.length - 1
	for (let i = endIndex; i >= 0; i--) {
		res.push(arr[i])
	}
	console.log('%creverse', 'color: #17d2fe', res)
}

function join (arr, str = ',') {
	let res = ''
	for (let i = 0; i < arr.length; i++) {
		res += arr[i]
		if (i !== arr.length - 1) {
			res += str
		}
	}
	console.log('%cjoin', 'color: #17d2fe', `"${res}"`)
}

function concat (arr, arr1) {
	let res = []
	for (let i = 0; i < arr.length; i++) {
		res.push(arr[i])
	}
	for (let i = 0; i < arr.length; i++) {
		res.push(arr1[i])
	}
	console.log('%cconcat', 'color: #17d2fe', res)
}

function slice (arr = [], start = 0, end = arr.length - 1) {
	let res = []
	if (start < 0) {
		start = arr.length + start
	}
	if (end < 0) {
		end = arr.length + end
	}
	for (let i = 0; i < arr.length; i++) {
		if (i >= start && i <= end) {
			res.push(arr[i])
		}
	}
	console.log('%cslice', 'color: #17d2fe', res)
}

function sort (arr = [], fn = (a, b) => a - b ) {
	let res = [].concat(arr)
	for (let i = 0; i < res.length; i++) {
		for (let j = 0; j < res.length; j++) {
			let temp = fn(res[i], res[j])
			let flag = (typeof(temp) === 'number' && temp > 0) ||  typeof(temp) === 'boolean' && temp
			i !== j && flag && swap(res, i, j)
		}
	}

	function swap (arr, o, n) {
		let temp = arr[o]
		arr[o] = arr[n]
		arr[n] = temp
	}
	
	console.log('%csort', 'color: #17d2fe', res)
}

function map (arr, fn = a => a) {
	let res = []
	for (let i = 0; i < arr.length; i++) {
		res.push(fn(arr[i]))
	}
	console.log('%cmap', 'color: #17d2fe', res)
}


function filter (arr, fn = (a, i, arr) => arr.indexOf(a) === i) {
	let res = []
	for (let i = 0; i < arr.length; i++) {
		if (fn(arr[i], i , arr)) res.push(arr[i])
	}
	console.log('%cfilter', 'color: #17d2fe', res)
}

function every (arr, fn = (a) => a > 4) {
	let res = true
	for (let i = 0; i < arr.length; i++) {
		if (!fn(arr[i], i , arr)) res = false
	}
	console.log('%cevery', 'color: #17d2fe', res)
}


function some (arr, fn = (a) => a > 4) {
	let res = false
	for (let i = 0; i < arr.length; i++) {
		if (fn(arr[i], i , arr)) res = true
	}
	console.log('%csome', 'color: #17d2fe', res)
}

function reduce (arr, fn = (a, b) => a + b) {
	let res = null
	for (let i = 0; i < arr.length; i++) {
		res = fn(res, arr[i])
	}
	console.log('%creduce', 'color: #17d2fe', res)
}

function reduceRight (arr, fn = (a, b) => a + b) {
	let res = null
	for (let i = arr.length - 1; i >= 0; i--) {
		res = fn(res, arr[i])
	}
	console.log('%creduceRight', 'color: #17d2fe', res)
}



// 中序 left > root > right
function inOrder (treeNode) {
	let res = []
	let arr = traverse(treeNode);
	function traverse (node) {
		if (!node) return 

		traverse(node.left)
		
		if (node.val) {
			res.push(node.val);
		}

		traverse(node.right)

		return res
	}
	console.log('%cinOrder:', 'color: #15a2fd' , arr)

}

levelOrder(treeNode) // [1, 2, 3, 7, 4, 8, 5, 6]
invertLevelOrder(treeNode) // [8, 5, 6, 7, 4, 2, 3, 1] 

preOrder(treeNode)  // 【1, 2, 7, 8, 3, 4, 5, 6】
inOrder(treeNode) // 【7, 8, 2, 1, 3, 5, 4, 6】
postOrder(treeNode) // 【8, 7, 2, 5, 6, 4, 3, 1】
arrFn()
buildTree()



// 倒层序 left > right
function invertLevelOrder(treeNode) {
	let arr = []
	let res = []
	let size = 0
	traverse(treeNode, size)
	function traverse (node, index) {
		if (!node) return
		if (node.val) {
			if (index > size) size = index
			if (!res[index]) {
				res[index] = []
			}
			res[index].push(node.val)
		}
		traverse(node.left, index + 1)
		traverse(node.right, index + 1)
	}

	for (let i = size; i >= 0; i--) {
		arr = arr.concat(res[i])
	}
	console.log('%cinvertLevelOrder:', 'color: #16a4fd' , arr)
}

// 层序 left > right
function levelOrder (treeNode) {
	let arr = []
	let res = []
	let size = 0;
	traverse(treeNode, size)
	function traverse (node, index) {
		if (!node) return
		if (node.val) {
			if (index > size) size = index
			if (!res[index]) {
				res[index] = []
			}
			res[index].push(node.val)
		}
		traverse(node.left, index + 1)
		traverse(node.right, index + 1)
	}
	for (let i = 0; i <= size; i++) {
		arr = arr.concat(res[i])
	}
	console.log('%clevelOrder:', 'color: #15a4fd' , arr)
}

// 前序 root > left > right
function preOrder (treeNode) {
	let res = []
	let arr = traverse(treeNode);
	function traverse (node) {
		if (!node) return 
		if (node.val) {
			res.push(node.val);
		}

		traverse(node.left)
		traverse(node.right)
		return res
	}
	console.log('%cpreOrder:', 'color: #15a4fd' , arr)
}

// 后序 left > right > root
function postOrder (treeNode) {
	let res = []
	let arr = traverse(treeNode);
	function traverse (node) {
		if (!node) return 
		
		traverse(node.left)
		traverse(node.right)
		if (node.val) {
			res.push(node.val);
		}
		return res
	}
	console.log('%cpostOrder:', 'color: #15a6fd' , arr)
}

function inOrder (treeNode) {
	let res = []
	let arr = traverse(treeNode)
	
	function traverse (node) {
		if (!node) return []
		traverse(node.left)
		
		if (node.val) {
			res.push(node.val);
		}
		traverse(node.right)
		return res

	}

	console.log('%cinOrder:', 'color: #15a8fd' , arr)
}


// 全排列
// let res = []
// let track = []

// const permute = (nums) => {
// 	backtrack (nums, track)
// 	return res
// }


// function backtrack (nums, track) {
// 	if (track.length === nums.length) {
// 		console.log(track)
// 		res.push([].concat(track))
// 		return
// 	}

// 	for (let i = 0; i < nums.length; i++) {
// 		if (track.indexOf(nums[i]) > -1) {
// 			continue
// 		}

// 		track.push(nums[i])

// 		backtrack(nums, track)

// 		track.pop()
// 	}
// }

// let arr = permute([1, 2, 3])
// console.log(arr)
