---
id: "swiftBigO"
title: "Swift 코드에서 시간복잡도 공간복잡도 측정하기"
description: "Swift로 코딩테스트 준비시 고려해야할 시간 복잡도, 공간 복잡도의 개념과 측정 방법에 대해 알아봅니다."
date: "2023-03-30T10:13:07.322Z"
tags:
  [
    "coding test",
    "swift",
    "알고리즘",
    "공간복잡도",
    "시간복잡도",
    "코딩테스트",
    "algorithm",
  ]
author: "달토"
project: "coding test"
readMin: 10
totalCnt: 19
monthlyCnt: 0
weeklyCnt: 0
---

# 개요

---

알고리즘 문제를 풀거나 프로그램을 개발할 때, 알고리즘의 효율성을 평가하는 두 가지 지표가 있습니다. 바로 시간복잡도와 공간복잡도입니다. 이번 글에서는 Swift를 사용하여 시간복잡도와 공간복잡도를 계산하는 방법을 알아보겠습니다.

# 시간복잡도 📚

시간복잡도는 알고리즘이 얼마나 빠르게 동작하는지를 평가하는 지표입니다. 알고리즘의 시간복잡도는 입력 크기에 대한 연산 횟수의 증가율로 표현됩니다. 일반적으로는 "Big O 표기법"을 사용하여 시간복잡도를 나타냅니다.
예를 들어, 다음은 O(n) 시간복잡도를 가지는 배열의 합을 구하는 함수입니다.

```swift
func sumArray(_ arr: [Int]) -> Int {
    var sum = 0
    for num in arr {
        sum += num
    }
    return sum
}
```

위의 함수는 배열의 크기에 비례하여 합을 계산하기 때문에 O(n)의 시간복잡도를 가집니다.

# 공간복잡도 📚

공간복잡도는 알고리즘이 얼마나 많은 메모리를 사용하는지를 평가하는 지표입니다. 알고리즘의 공간복잡도는 입력 크기에 대한 추가적인 메모리 사용량의 증가율로 표현됩니다. 일반적으로는 "Big O 표기법"을 사용하여 공간복잡도를 나타냅니다.

예를 들어, 다음은 O(1) 공간복잡도를 가지는 배열의 최대값을 구하는 함수입니다.

```swift
func maxArray(_ arr: [Int]) -> Int {
    var max = Int.min
    for num in arr {
        if num > max {
            max = num
        }
    }
    return max
}
```

위의 함수는 배열의 크기에 관계없이 상수 크기의 메모리만 사용하기 때문에 O(1)의 공간복잡도를 가집니다.

# 시간복잡도 계산하기

Swift에서는 DispatchTime을 사용하여 코드 블록의 실행 시간을 계산할 수 있습니다.

```swift
let start = DispatchTime.now()
// 코드 실행
let end = DispatchTime.now()
let timeElapsed = end.uptimeNanoseconds - start.uptimeNanoseconds
```

# 공간복잡도 계산하기

일반적으로 계산하기 위해서는 알고리즘에서 사용하는 메모리의 크기를 계산해야 합니다. 알고리즘이 사용하는 메모리는 크게 두 가지로 나뉩니다.

1. 고정 메모리: 고정적으로 할당되는 메모리로, 알고리즘이 실행되는 동안 항상 필요한 메모리입니다. 예를 들어, 함수의 인자, 지역 변수, 전역 변수 등이 이에 해당합니다.

2. 가변 메모리: 알고리즘이 실행되는 동안 필요한 메모리로, 실행되는 상황에 따라 필요한 메모리의 크기가 달라집니다. 예를 들어, 배열, 동적으로 할당되는 변수, 객체 등이 이에 해당합니다.

알고리즘이 사용하는 메모리의 크기를 계산할 때는, 데이터 구조의 크기와 변수의 크기 등을 고려해야 합니다. 예를 들어, 정수형 변수는 일반적으로 4바이트, 더블형 변수는 8바이트의 크기를 가집니다. 또한, Swift에서는 데이터 구조의 크기를 계산할 때 MemoryLayout을 사용할 수 있습니다.

```swift
// Int형 변수의 크기 계산
let intSize = MemoryLayout<Int>.size // 4

// Double형 변수의 크기 계산
let doubleSize = MemoryLayout<Double>.size // 8

// 배열의 크기 계산
let array = [1, 2, 3, 4, 5]
let arraySize = MemoryLayout.size(ofValue: array) // 20
```

공간복잡도를 계산하는 또 다른 방법은, 알고리즘이 사용하는 메모리를 추적하면서 프로그램을 실행하는 것입니다. 이를 위해서는 디버깅 도구를 사용해야 하며, 이 방법은 일반적으로 시간이 많이 걸리고 복잡합니다. 따라서, 일반적으로는 MemoryLayout을 사용하여 알고리즘의 공간복잡도를 계산합니다.

메모리를 추적하면서 프로그램을 실행하는 방법은 디버깅 도구를 사용하여 가능합니다. 디버깅 도구를 사용하면, 프로그램이 실행되는 동안 메모리의 상태를 실시간으로 확인할 수 있으며, 이를 통해 알고리즘이 사용하는 메모리의 크기를 추적할 수 있습니다.

다음은 Xcode의 디버깅 도구를 사용하여 메모리를 추적하는 방법입니다.

1. Xcode에서 디버깅 모드로 프로그램을 실행합니다.
2. 디버깅 도구에서 "Debug Memory Graph"를 선택합니다.
3. "Debug Memory Graph"에서 프로그램에서 사용하는 객체들의 메모리 사용 상태를 확인할 수 있습니다.

위의 방법은 객체의 메모리 사용 상태를 추적하는 것이므로, 객체를 사용하는 알고리즘의 공간복잡도를 추적하는 데에 유용합니다.

또한, 메모리를 추적하면서 프로그램을 실행하는 것은 일반적으로 프로그램의 실행 속도를 느리게 만들 수 있으므로, 테스트나 디버깅 목적으로만 사용하는 것이 좋습니다.
