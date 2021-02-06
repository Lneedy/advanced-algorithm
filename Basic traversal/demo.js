const treeNode = {
	val: 'A',
	left: {
		val: 'B',
		left: {
			val: 'D',
			left: null,
			right: null
		},
		right: {
      val: 'E',
      left: null,
      right: null
    }
	},
	right: {
		val: 'C',
		left: {
      val: 'F',
      left: null,
      right: null
    },
		right: {
			val: 'G',
			left: null,
			right: null
		}
	}
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

levelOrder(treeNode) //  ["A", "B", "C", "D", "E", "F", "G"]
invertLevelOrder(treeNode) // ["D", "E", "F", "G", "B", "C", "A"]

preOrder(treeNode) // ["A", "B", "D", "E", "C", "F", "G"]
inOrder(treeNode) // ["D", "B", "E", "A", "F", "C", "G"]
postOrder(treeNode) // ["D", "E", "B", "F", "G", "C", "A"]

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