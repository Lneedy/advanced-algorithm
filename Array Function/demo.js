arrFn()
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

