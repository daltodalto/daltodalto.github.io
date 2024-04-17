---
id: "algorithmImg"
title: "[Swift + Algorithm] 인사고과 - 프로그래머스 Level3 문제풀이"
description: "프로그래머스 Level3 인사고과 문제 풀이입니다."
date: "2023-04-07T02:09:07.322Z"
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

완호네 회사는 연말마다 1년 간의 인사고과에 따라 인센티브를 지급합니다. 각 사원마다 근무 태도 점수와 동료 평가 점수가 기록되어 있는데 만약 어떤 사원이 다른 임의의 사원보다 두 점수가 모두 낮은 경우가 한 번이라도 있다면 그 사원은 인센티브를 받지 못합니다. 그렇지 않은 사원들에 대해서는 두 점수의 합이 높은 순으로 석차를 내어 석차에 따라 인센티브가 차등 지급됩니다. 이때, 두 점수의 합이 동일한 사원들은 동석차이며, 동석차의 수만큼 다음 석차는 건너 뜁니다. 예를 들어 점수의 합이 가장 큰 사원이 2명이라면 1등이 2명이고 2등 없이 다음 석차는 3등부터입니다.

각 사원의 근무 태도 점수와 동료 평가 점수 목록 scores이 주어졌을 때, 완호의 석차를 return 하도록 solution 함수를 완성해주세요.

# 제한 사항

---

- 1 ≤ scores의 길이 ≤ 100,000
- scores의 각 행은 한 사원의 근무 태도 점수와 동료 평가 점수를 나타내며 [a, b] 형태입니다.
  - scores[0]은 완호의 점수입니다.
  - 0 ≤ a, b ≤ 100,000
- 완호가 인센티브를 받지 못하는 경우 -1을 return 합니다.

# 입출력 예시

---

- scores
  - [[2,2],[1,4],[3,2],[3,2],[2,1]]
- result
  - 4

# 해답

---

```swift
func solution(_ scores: [[Int]]) -> Int {
    var rank = 1
    let wanho = scores[0]
    let wanhoTotalScore = wanho.reduce(0, +)
    let sortedTotalScores = scores.sorted(by: { $0[0] > $1[0] || ($0[0] == $1[0] && $0[1] < $1[1]) })
    var yMaximum = 0

    for score in sortedTotalScores {
        if wanho[0] < score[0] && wanho[1] < score[1] {
            return -1
        }
        if yMaximum <= score[1] {
            let totalScore = score.reduce(0, +)
            if wanhoTotalScore < totalScore {
                rank += 1
            }
            yMaximum = score[1]
        }
    }

    return rank
}
```

# 기타 및 참고 자료

---

저작권 등 문제가 되는 부분이 있다면 삭제하겠습니다.

- ["프로그래머스"](https://programmers.co.kr/)
