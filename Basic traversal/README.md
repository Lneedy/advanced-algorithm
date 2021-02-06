# Basic traversal(基础遍历)

```
  A
 B  C
D E F G

```
## 前序遍历 (preOrder)

- 顺序： root > left > right

```
["A", "B", "D", "E", "C", "F", "G"]
```


## 中序遍历 (inOrder)

- 顺序： left > root > right

```
["D", "B", "E", "A", "F", "C", "G"]
```

## 后序遍历 (postOrder)

- 顺序： left > right > root

```
["D", "E", "B", "F", "G", "C", "A"]
```


## 层序遍历 (levelOrder)

- 顺序： 层级 0 > 1 , left > right

```
["A", "B", "C", "D", "E", "F", "G"]
```


## 倒层序遍历 (invertLevelOrder)

- 顺序： 层级 1 > 0 ,left > right

```
["D", "E", "F", "G", "B", "C", "A"]
```
