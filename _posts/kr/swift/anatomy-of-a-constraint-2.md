---
id: "auto0308"
title: "[번역] Constraint 톺아보기 (Anatomy of a Constraint) 2/2"
description: "apple 공식 문서인 Auto Layout Guide 중 Anatomy of a Constraint Chapter를 번역한 글입니다."
date: "2023-04-19T19:22:40.322Z"
tags: ["swift", "auth layout", "document", "번역", "UIKit"]
author: "달토"
project: "swift auto layout"
readMin: 21
totalCnt: 0
monthlyCnt: 0
weeklyCnt: 0
---

&nbsp;
&nbsp;

# 개요

---

> 해당 문서는 학습 목적으로 Apple 공식 문서인 [Auto Layout Guide](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/AutolayoutPG/)을 번역한 글입니다. 다소 오역이 있을 수 있어 잘못된 내용이 있을 수 있습니다. 문제가 되거나 오류가 있다면 댓글 부탁드립니다.

&nbsp;

# 제약 조건 부등식

---

지금까지 모든 샘플은 제약 조건을 등식(=)으로 표시했지만 제약 조건은 부등식으로도 나타낼 수 있습니다. 특히 제약 조건의 관계는 같거나 크거(≥)나 같거나 작거나(≤) 같을 수 있습니다.

예를 들어 제약 조건을 사용하여 보기의 최소 또는 최대 크기를 정의할 수 있습니다(목록 3-3).

목록 3-3최소 및 최대 크기 할당

```swift
// Setting the minimum width
View.width >= 0.0 * NotAnAttribute + 40.0

// Setting the maximum width
View.width <= 0.0 * NotAnAttribute + 280.0
```

부등식을 사용하기 시작하면 두 가지 제약 조건이 충돌하게 됩니다? 하나의 등식을 두 개의 부등식으로 대체할 수 있습니다. 목록 3-4에서 하나의 등식과 같은 동작을 하는 두개의 부등식 한 쌍을 설명합니다.

```swift
// A single equal relationship
Blue.leading = 1.0 * Red.trailing + 8.0

// Can be replaced with two inequality relationships
Blue.leading >= 1.0 * Red.trailing + 8.0
Blue.leading <= 1.0 * Red.trailing + 8.0
```

두 개의 부등식이 항상 하나의 등식과 같지는 않기 때문에 역이 항상 참인 것은 아닙니다. 예를 들어 목록 3-3의 부등식은 뷰의 너비에 대해 가능한 값의 범위를 제한하지만 그 자체로는 너비를 정의하지 않습니다. 이 범위 내에서 뷰의 위치와 크기를 정의하려면 여전히 추가적인 horizontal 제약이 필요합니다.

&nbsp;
&nbsp;

# Constraint Priorities(제약 우선순위)

---

기본적으로 모든 제약 조건이 필요합니다. 오토 레이아웃은 모든 제약 조건을 만족하는 레이아웃을 계산해야 합니다. 할 수 없으면 오류가 있는 것입니다. 오토 레이아웃은 만족할 수 없는 제약 조건에 대한 정보를 콘솔에 보여주고 중단할 제약 조건 중 하나를 선택합니다. 그런 다음 깨진 제약 조건 없이 다시 계산합니다. 자세한 내용은 Unsatisfiable Layouts을 참조하십시오.

옵셔널 제약 조건(optional constraints)을 생성할 수도 있습니다. 모든 제약 조건의 우선 순위는 1에서 1000 사이입니다. 우선 순위가 1000인 제약 조건이 필요합니다. 다른 모든 제약 조건은 선택 사항입니다.

솔루션을 계산할 때 오토 레이아웃은 우선순위가 높은 것부터 낮은 것까지 모든 제약 조건을 충족하려고 시도합니다. 옵셔널 제약 조건을 충족할 수 없으면 해당 제약 조건을 건너뛰고 다음 제약 조건으로 계속 진행됩니다. 옵셔널 제약 조건을 충족할 수 없더라도 여전히 레이아웃에 영향을 줄 수 있습니다. 제약 조건을 건너뛴 후 레이아웃에 모호성이 있는 경우 시스템은 제약 조건에 가장 가까운 솔루션을 선택합니다. 이러한 방식으로 충족되지 않은 선택적 제약 조건은 View를 끌어당기는 힘으로 작용합니다.

옵셔널 제약 조건과 부등식은 종종 함께 작동합니다. 예를 들어 목록 3-4에서 두 가지 부등식에 대해 서로 다른 우선 순위를 제공할 수 있습니다. 크거나 같은 관계가 필요할 수 있으며(우선순위 1000) 작거나 같은 관계는 낮은 우선순위(우선순위 250)를 가집니다. 이는 BlueView가 RedView에서 8.0포인트보다 더 가까울 수 없음을 의미합니다. 그러나 다른 제약 조건으로 인해 더 멀어질 수 있습니다. 그래도 선택적 제약 조건은 BlueView를 RedView 쪽으로 끌어당겨 레이아웃의 다른 제약 조건을 고려할 때 가능한 한 8.0포인트 간격에 가깝도록 합니다.

> NOTE
>
> 우선순위 1000 을 반드시 사용해야 하는 것은 아닙니다. 실제로 우선 순위는 일반적으로 시스템에서 정의한 낮음(250), 중간(500), 높음(750) 및 필수(1000) 우선 순위 주위에 모여 있어야 합니다. 동률을 방지하기 위해 이러한 값보다 1~2포인트 높거나 낮은 제약 조건을 만들어야 할 수도 있습니다. 그 이상으로 나아가고 있다면 아마도 레이아웃의 논리를 재검토하고 싶을 것입니다. iOS의 미리 정의된 제약 조건 상수 목록은 UILayoutPriority 열거형을 참조하세요. OS X의 경우 레이아웃 우선순위 상수를 참조하십시오.

&nbsp;
&nbsp;

# 고유 콘텐츠 크기(**Intrinsic Content Size)**

---

지금까지 모든 예제에서는 뷰의 위치와 크기를 모두 정의하기 위해 제약 조건을 사용했습니다. 그러나 일부 뷰는 현재 콘텐츠에 따라 자연스러운 크기를 갖습니다. 이를 고유 콘텐츠 크기라고 합니다. 예를 들어 버튼의 고유 콘텐츠 크기는 제목 크기에 작은 여백을 더한 크기입니다.

모든 보기에 고유 콘텐츠 크기 있는 것은 아닙니다. 뷰의 경우 고유 콘텐츠 크기가 View의 height, width 또는 둘 다를 정의할 수 있습니다. 몇 가지 예가 표 3-1에 나열되어 있습니다.

&nbsp;
![image01](auto0307)
&nbsp;

고유 콘텐츠 크기는 View의 현재 콘텐츠를 기반으로 합니다. Label 또는 Button의 고유 콘텐츠 크기는 표시되는 텍스트의 양과 사용된 글꼴을 기반으로 합니다. 다른 View의 경우 고유 콘텐츠 크기는 훨씬 더 복잡합니다. 예를 들어 빈 이미지 보기에는 고유 콘텐츠 크기가 없습니다. 그러나 이미지를 추가하자마자 고유 콘텐츠 크기가 이미지 크기로 설정됩니다.

텍스트 뷰의 고유 콘텐츠 크기는 콘텐츠, 스크롤이 활성화되었는지 여부, View에 적용되는 다른 제약 조건에 따라 다릅니다. 예를 들어 스크롤이 활성화된 경우 View에는 고유 콘텐츠 크기가 없습니다. 스크롤이 비활성화되면 기본적으로 보기의 고유 콘텐츠 크기는 줄 바꿈 없이 텍스트 크기를 기준으로 계산됩니다. 예를 들어 텍스트에 줄바꿈이 없으면 내용을 한 줄의 텍스트로 레이아웃하는 데 필요한 높이와 너비를 계산합니다. 보기의 너비를 지정하기 위해 제약 조건을 추가하는 경우 고유 콘텐츠 크기는 해당 너비가 지정된 텍스트를 표시하는 데 필요한 높이를 정의합니다.

오토 레이아웃은 각 차원에 대한 한 쌍의 제약 조건을 사용하여 View의 고유 콘텐츠 크기를 나타냅니다. 콘텐츠 허깅(hugging)은 View를 안쪽으로 당겨서 콘텐츠에 꼭 맞도록 합니다. compression resistance은 콘텐츠를 자르지 않도록 뷰를 바깥쪽으로 밀어냅니다.

&nbsp;
![image02](auto0308)
&nbsp;

이러한 제약 조건은 목록 3-5에 표시된 부등식을 사용하여 정의됩니다. 여기서 IntrinsicHeight 및 IntrinsicWidth 상수는 뷰의 고유 콘텐츠 크기에서 높이 및 너비 값을 나타냅니다.

목록 3-5 Compression-Resistance 및 Content-Hugging 방정식

```swift
// Compression Resistance
View.height >= 0.0 * NotAnAttribute + IntrinsicHeight
View.width >= 0.0 * NotAnAttribute + IntrinsicWidth

// Content Hugging
View.height <= 0.0 * NotAnAttribute + IntrinsicHeight
View.width <= 0.0 * NotAnAttribute + IntrinsicWidth
```

이러한 제약 조건은 각각 고유한 우선 순위를 가질 수 있습니다. 기본적으로 뷰는 **Content-Hugging**에 250 우선 순위를 사용하고 **Compression-Resistance에** 750 우선 순위를 사용합니다. 따라서 View를 축소하는 것보다 늘리는 것이 더 쉽습니다. 대부분의 controls에서 이는 바람직한 동작입니다. 예를 들어 기본 콘텐츠 크기 보다 크게 늘리는 것은 안정적이지만 축소를 하면 콘텐츠는 잘릴 수 있습니다. Interface Builder는 동률을 방지하기 위해 때때로 이러한 우선 순위를 수정할 수 있습니다. 자세한 내용은 [Setting Content-Hugging and Compression-Resistance Priorities](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/AutolayoutPG/WorkingwithConstraintsinInterfaceBuidler.html#//apple_ref/doc/uid/TP40010853-CH10-SW2)을 참조하십시오.

가능하면 레이아웃에서 View의 고유 콘텐츠 크기를 사용하세요. 뷰의 콘텐츠가 변경될 때 레이아웃을 동적으로 조정할 수 있습니다. 또한 모호하지 않고 충돌하지 않는 레이아웃을 생성하는 데 필요한 제약 조건의 수를 줄여주지만 View의 CHCR(content-hugging and compression-resistance) 우선 순위를 관리해야 합니다. 고유 콘텐츠 크기를 처리하기 위한 몇 가지 지침은 다음과 같습니다.

- 일련의 View를 확장하여 공간을 채울 때 모든 View가 동일한 content-hugging 우선 순위를 가지면 레이아웃이 모호해집니다. 오토레이아웃은 어떤 뷰를 늘려야 하는지 모릅니다.
- 일반적인 예는 Label 및 Text Field 쌍입니다. 일반적으로 Label이 고유 콘텐츠 크기를 유지하면서 추가 공간을 채우기 위해 Text Field가 늘어나기를 원합니다. 이를 보장하려면 Text Field의 가로 content-hugging 우선순위가 Label보다 낮은지 확인하세요.
- 실제로 이 예제는 매우 일반적이어서 Interface Builder가 자동으로 처리하여 모든 레이블에 대한 내용 포함 우선 순위를 251로 설정합니다. 프로그래밍 방식으로 레이아웃을 생성하는 경우 내용 포함 우선 순위를 직접 수정해야 합니다.
- 버튼이나 레이블과 같은 보이지 않는 배경이 있는 View가 실수로 고유 콘텐츠 크기를 초과하여 늘어나는 경우 이상하고 예상치 못한 레이아웃이 자주 발생합니다. 텍스트가 단순히 잘못된 위치에 나타나기 때문에 실제 문제는 명확하지 않을 수 있습니다. 원치 않는 스트레칭을 방지하려면 content-hugging우선 순위를 높이십시오.
- 기본 제약 조건은 고유 콘텐츠 높이에 있는 View에서만 작동합니다. 보기가 세로로 늘어나거나 축소되면 기준선 제약 조건이 더 이상 제대로 정렬되지 않습니다.
- Switch와 같은 일부 보기는 항상 고유 콘텐츠 크기로 표시되어야 합니다. 스트레칭이나 축소를 방지하기 위해 필요에 따라 CHCR 우선 순위를 높입니다.
- View에 필요한 CHCR 우선 순위를 제공하지 마십시오. 일반적으로 View가 실수로 충돌을 일으키는 것보다 크기가 잘못된 것이 더 낫습니다. View가 항상 고유한 콘텐츠 크기여야 하는 경우 대신 매우 높은 우선 순위(999)를 사용하는 것이 좋습니다. 이 접근 방식은 일반적으로 View가 늘어나거나 압축되지 않도록 유지하지만 예상보다 크거나 작은 환경에서 보기가 표시되는 경우를 대비하여 여전히 emergency pressure valve를 제공합니다.

&nbsp;
&nbsp;

# Intrinsic Content Size Versus Fitting Size

---

고유 콘텐츠 크기는 오토 레이아웃에 대한 입력 역할을 합니다. View에 고유 콘텐츠 크기가 있는 경우 시스템은 해당 크기를 나타내는 제약 조건을 생성하고 제약 조건은 레이아웃을 계산하는 데 사용됩니다.

반면 Fitting Size는 Auto Layout engine의 출력값입니다. View의 제약 조건을 기반으로 뷰에 대해 계산된 크기입니다. 뷰가 오토 레이아웃을 사용하여 하위 뷰를 배치하는 경우 시스템은 콘텐츠를 기반으로 뷰에 맞는 크기를 계산할 수 있습니다.

StackView가 좋은 예입니다. 다른 제약 조건을 제외하고 시스템은 내용과 속성을 기반으로 스택 보기의 크기를 계산합니다. 여러 가지 면에서 StackView는 고유 콘텐츠 크기가 있는 것처럼 작동합니다. 위치를 정의하기 위해 단일 vertical 및 단일 horizontal 제약 조건만 사용하여 유효한 레이아웃을 생성할 수 있습니다. 그러나 크기는 오토 레이아웃에 의해 계산되며 오토 레이아웃에 대한 입력이 아닙니다. StackView의 CHCR 우선 순위를 설정해도 아무런 효과가 없습니다. StackView에는 고유한 콘텐츠 크기가 없기 때문입니다.

StackView 외부의 항목과 관련하여 StackView의 Fitting Size를 조정해야 하는 경우 이러한 관계를 캡처하는 명시적 제약 조건을 생성하거나 스택 외부 항목과 관련된 스택 콘텐츠의 CHCR 우선 순위를 수정합니다.

&nbsp;
&nbsp;

# Interpreting Values

오토 레이아웃의 값은 항상 포인트 단위입니다. 그러나 이러한 측정의 정확한 의미는 관련된 속성과 View의 레이아웃 방향에 따라 달라질 수 있습니다.

&nbsp;
![image02](auto0309)
&nbsp;

&nbsp;
&nbsp;
