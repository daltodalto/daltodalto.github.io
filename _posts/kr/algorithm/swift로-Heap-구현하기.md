---
id: "tree"
title: "[Swift] 힙(Heap) 자료구조 구현 - 최대힙(MaxHeap), 최소힙(MinHeap), 우선순위 큐"
description: "Heap 자료구조에 대해서 알아보고, Swift로 최대힙(MaxHeap)과 최소힙(MinHeap)을 직접구현해 봅니다."
date: "2023-04-20T10:13:07.322Z"
tags: ["자료구조", "swift", "data struct"]
author: "달토"
img: "tree"
project: "dataStructWithSwift"
readMin: 10
totalCnt: -1
monthlyCnt: 0
weeklyCnt: 0
---

&nbsp;
&nbsp;

# 개요

---

다익스트라 알고리즘(Dijkstra's algorithm)을 정리하고 있는데, 힙 개념을 먼저 정리하지 않으면 다익스트라 알고리즘 글이 매우 장황해지기 때문에 Heap개념에 대해서 먼저 정리하고, Swift 표준 라이브러리에는 heap 자료구조를 구현한 클래스나 구조체가 내장되어 있지 않기 때문에 간단하게 Swift로 Heap을 구현하겠다.

&nbsp;

# Heap 자료구조

---

힙(heap)은 이진 트리(binary tree)의 일종으로, 여러 개의 값들 중에서 최댓값이나 최솟값을 빠르게 찾아내기 위해 만들어진 자료구조이다. 힙은 일반적으로 완전 이진 트리(complete binary tree)의 형태로 구현하며, 부모 노드와 자식 노드 간의 대소 관계를 이용하여 구성된다.

힙은 최대 힙(max heap)과 최소 힙(min heap) 두 가지 종류가 있다. 최대 힙은 부모 노드가 자식 노드보다 큰 값을 가지는 트리를 말하며, 최소 힙은 반대로 부모 노드가 자식 노드보다 작은 값을 가지는 트리를 말한다. 둘 중 하나를 구현하는 방식을 익힌다면, 다른 하나는 부등호의 기호만 바꾸어 주면 되면 된다는 특징이 있다.

&nbsp;

# Heap의 활용 및 시간 복잡도

---

힙의 시간 복잡도는 일반적으로 O(log n)이다다. 따라서, 힙은 대량의 데이터 중에서 최댓값이나 최솟값을 빠르게 찾아내야 하는 경우에 매우 유용하게 된다. 예를 들어, 우선순위 큐(priority queue)를 구현할 때나, 개요에서 설명했듯 다익스트라 알고리즘 등의 그래프 알고리즘에서 최단 경로를 찾을 때 사용됩니다.

&nbsp;

# Swift로 구현하는 최소 / 최대 Heap 구조

---

&nbsp;

## 1. 최소 Heap 구현

```swift
struct MinHeap<Element: Comparable> {
    var elements: [Element] = []

    var isEmpty: Bool {
        return elements.isEmpty
    }

    var count: Int {
        return elements.count
    }

    mutating func insert(_ element: Element) {
        elements.append(element)
        siftUp(from: elements.count - 1)
    }

    mutating func siftUp(from index: Int) {
        var child = index
        var parent = parentIndex(of: child)

        while child > 0 && elements[child] < elements[parent] {
            elements.swapAt(child, parent)
            child = parent
            parent = parentIndex(of: child)
        }
    }

    mutating func pop() -> Element? {
        guard !isEmpty else {
            return nil
        }

        elements.swapAt(0, count - 1)
        let element = elements.removeLast()
        siftDown(from: 0)
        return element
    }

    mutating func siftDown(from index: Int) {
        var parent = index

        while true {
            let leftChild = leftChildIndex(of: parent)
            let rightChild = rightChildIndex(of: parent)
            var candidate = parent

            if leftChild < count && elements[leftChild] < elements[candidate] {
                candidate = leftChild
            }

            if rightChild < count && elements[rightChild] < elements[candidate] {
                candidate = rightChild
            }

            if candidate == parent {
                return
            }

            elements.swapAt(parent, candidate)
            parent = candidate
        }
    }

    func parentIndex(of index: Int) -> Int {
        return (index - 1) / 2
    }

    func leftChildIndex(of index: Int) -> Int {
        return index * 2 + 1
    }

    func rightChildIndex(of index: Int) -> Int {
        return index * 2 + 2
    }
}
```

&nbsp;

## 2. 최대 Heap 구현

```swift
struct MaxHeap<Element: Comparable> {
    var elements: [Element] = []

    var isEmpty: Bool {
        return elements.isEmpty
    }

    var count: Int {
        return elements.count
    }

    mutating func insert(_ element: Element) {
        elements.append(element)
        siftUp(from: elements.count - 1)
    }

    mutating func siftUp(from index: Int) {
        var child = index
        var parent = parentIndex(of: child)

        while child > 0 && elements[child] > elements[parent] {
            elements.swapAt(child, parent)
            child = parent
            parent = parentIndex(of: child)
        }
    }

    mutating func pop() -> Element? {
        guard !isEmpty else {
            return nil
        }

        elements.swapAt(0, count - 1)
        let element = elements.removeLast()
        siftDown(from: 0)
        return element
    }

    mutating func siftDown(from index: Int) {
        var parent = index

        while true {
            let leftChild = leftChildIndex(of: parent)
            let rightChild = rightChildIndex(of: parent)
            var candidate = parent

            if leftChild < count && elements[leftChild] > elements[candidate] {
                candidate = leftChild
            }

            if rightChild < count && elements[rightChild] > elements[candidate] {
                candidate = rightChild
            }

            if candidate == parent {
                return
            }

            elements.swapAt(parent, candidate)
            parent = candidate
        }
    }

    func parentIndex(of index: Int) -> Int {
        return (index - 1) / 2
    }

    func leftChildIndex(of index: Int) -> Int {
        return index * 2 + 1
    }

    func rightChildIndex(of index: Int) -> Int {
        return index * 2 + 2
    }
}


```

&nbsp;
&nbsp;
