---
id: "algorith"
title: "[Algorithm] 연속 펄스 부분 수열의 합 풀이 - 프로그래머스 Level3 문제풀이"
description: "프로그래머스 Level3 연속 펄스 부분 수열의 합 문제를 Swift로 어떻게 푸는지 알아봅니다."
date: "2023-04-06T19:50:07.322Z"
tags: ["coding test", "알고리즘", "코딩테스트", "algorithm"]
author: "달토"
project: "coding test"
readMin: 10
totalCnt: -1
monthlyCnt: 0
weeklyCnt: 0
---

# 문제 설명

---

어떤 수열의 연속 부분 수열에 같은 길이의 펄스 수열을 각 원소끼리 곱하여 연속 펄스 부분 수열을 만들려 합니다. 펄스 수열이란 [1, -1, 1, -1 …] 또는 [-1, 1, -1, 1 …] 과 같이 1 또는 -1로 시작하면서 1과 -1이 번갈아 나오는 수열입니다.
예를 들어 수열 [2, 3, -6, 1, 3, -1, 2, 4]의 연속 부분 수열 [3, -6, 1]에 펄스 수열 [1, -1, 1]을 곱하면 연속 펄스 부분수열은 [3, 6, 1]이 됩니다. 또 다른 예시로 연속 부분 수열 [3, -1, 2, 4]에 펄스 수열 [-1, 1, -1, 1]을 곱하면 연속 펄스 부분수열은 [-3, -1, -2, 4]이 됩니다.
정수 수열 sequence가 매개변수로 주어질 때, 연속 펄스 부분 수열의 합 중 가장 큰 것을 return 하도록 solution 함수를 완성해주세요.

# 제한 사항

---

- 1 ≤ sequence의 길이 ≤ 500,000
- -100,000 ≤ sequence의 원소 ≤ 100,000
  - sequence의 원소는 정수입니다.

# 해답

---

```swift
func solution(_ sequence: [Int]) -> Int {
    var sequence = sequence.enumerated().map { $1 * ($0 % 2 == 0 ? 1 : -1) }

    for i in 1..<sequence.count {
        sequence[i] += sequence[i - 1]
    }

    return max(abs(sequence.max()!), abs(sequence.min()!), abs(sequence.max()! - sequence.min()!))
}
```

# 기타 및 참고 자료

---

저작권 등 문제가 되는 부분이 있다면 삭제하겠습니다.

- ["프로그래머스"](https://programmers.co.kr/)
