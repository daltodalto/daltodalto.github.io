---
id: "redirect2"
title: "kkk"
description: "뭐야 이게"
date: "2023-12-19T18:11:40.322Z"
tags: ["nextjs", "redirect"]
author: "달토"
project:
totalCnt: 0
monthlyCnt: 0
weeklyCnt: 0
---

[[GA 심는 방법]]

- 상속을 통해 확장 가능하다.
- 탭을 선택하면 해당 뷰 컨트롤러의 루트 뷰를 표시한다.
- 각 탭은 서로 비슷한 형태일 필요가 없다.
- 탭 바 뷰에는 직접 접근해서는 안된다.
  - 탭바 뷰가 뭐지?
  - 탭바에는 뷰 프로퍼티가 없는데?

```swift
	UITabBarController().tabBar.view??

```

- viewControllers에 뷰컨트롤러를 할당해야함.
- selectedViewController 속성에 할당

## viewController 할당하기

- viewControllers에 할당

## 선택된 탭 변경하기

- selectedViewController

### 탭 바 아이템

- 탭바가 따로 관리된다기 보단 탭바에 들어가는 각 아이템들은 해당 ViewController가 관리한다.
- viewController에 tabBar 속성이 있는 이유...
- 탭바의 정보(viewControllers)에 viewController가 들어가고 해당 배열에서 각 TabBarItem을 꺼내서 보여주는 방식으로 보여짐.

```swift

  ViewController().tabBarItem
 
```

- 사용자가 tabBarItem을 할당하지 않으면 UIViewController의 타이틀이 tabBar에 노출된다.

# 추가

- window가 무엇이냐

> 탭 바 컨트롤러의 뷰(상속된 [UIViewContoller > view](app://obsidian.md/UIViewContoller%20%3E%20view) 속성을 사용하여 얻은)를 앱 윈도우에 포함시키면, 탭 바 컨트롤러는 자동으로 그 뷰 컨트롤러를 선택하고 그 내용을 표시하며, 탭 바 인터페이스에 맞게 크기를 조정합니다.

=> 탭바 컨트롤러의 뷰가 윈도우에 추가 되면 탭바 컨트롤러에서 프로그래밍으로 선택한 탭이 그 탭을 인터페이스에 맞춰 그려낸다.

- 탭바 뷰가 무엇이냐?

> 탭 바 컨트롤러의 탭 바 뷰에는 직접 접근해서는 안 됩니다.

텝 아이템이 모여이쓴 부분인고 UITabbar임. UITabbar 자체가 뷰임 그래서 view 프로퍼티가 없는 것

"탭 바 컨트롤러의 탭 바 뷰에 직접 접근해서는 안 됩니다." 가 무슨 의미야?

ChatGPT

ChatGPT

"탭 바 컨트롤러의 탭 바 뷰에 직접 접근해서는 안 됩니다."라는 말은, 탭 바 컨트롤러를 사용할 때 내부적인 탭 바 뷰(즉, 탭이 표시되는 부분)를 직접 수정하거나 조작해서는 안 된다는 의미입니다. 이는 탭 바 컨트롤러의 내부 구현에 직접 개입하는 것이 아니라, 제공되는 API를 통해 간접적으로 탭 바를 설정하고 관리해야 함을 의미합니다.

탭 바 컨트롤러는 여러 뷰 컨트롤러를 탭을 통해 관리하는 컴포넌트입니다. iOS에서는 이런 컴포넌트의 내부 요소에 직접 접근하여 수정하는 것을 권장하지 않습니다. 대신, 개발자는 `UITabBarController`가 제공하는 속성과 메서드를 사용하여 필요한 설정을 해야 합니다. 예를 들어, 탭 바에 표시될 뷰 컨트롤러들을 `viewControllers` 속성에 할당하고, 특정 탭을 활성화하고 싶을 때는 `selectedIndex`나 `selectedViewController` 속성을 사용하여 조절합니다.

이러한 방식은 애플리케이션의 안정성을 보장하고, 추후 iOS 시스템 업데이트에서 발생할 수 있는 호환성 문제를 방지할 수 있습니다. 직접적인 접근은 예기치 않은 동작을 초래할 수 있으므로, 탭 바 컨트롤러를 안전하고 효과적으로 사용하기 위해서는 공식적으로 제공되는 인터페이스를 통해 설정을 진행하는 것이 중요합니다.

탭 아이템이 모여 있는 부분을 이야기 하는 거야?

ChatGPT

ChatGPT

네, 맞습니다. "탭 바 컨트롤러의 탭 바 뷰"라는 말은 탭 아이템들이 모여 있는 부분, 즉 사용자가 볼 수 있는 탭 바 자체를 가리킵니다. 이 탭 바는 앱의 하단(또는 설정에 따라 상단)에 위치하며, 각 탭은 연결된 뷰 컨트롤러로 사용자를 안내하는 역할을 합니다. 탭 바 뷰는 탭 아이템들의 컨테이너 역할을 하면서, 각 탭 아이템에는 일반적으로 아이콘과 텍스트 레이블이 포함되어 사용자에게 각 탭의 기능을 알려줍니다.

위에서 언급한 "직접 접근해서는 안 된다"는 부분은 이 탭 바 뷰의 구성 요소나 동작을 직접적으로 수정하거나 변경해서는 안 된다는 의미입니다. 예를 들어, 내부의 탭 바 뷰를 코드로 직접 조작하거나 수정하는 대신, `UITabBarController`의 API를 사용하여 간접적으로 탭들을 관리하고 설정해야 합니다. 이렇게 함으로써, 애플이 제공하는 프레임워크의 기능과 안정성을 최대한 활용할 수 있습니다.

직접 접근할 수 있어? tabBar에는 view라는 프로퍼티가 없는데?

ChatGPT

ChatGPT

죄송합니다, 제 설명이 명확하지 않았던 것 같습니다. `UITabBarController`에는 `tabBar`라는 프로퍼티가 있으며, 이는 `UITabBar` 타입입니다. 여기서 `UITabBar`는 실제로 뷰입니다. 이 `tabBar` 프로퍼티를 통해 탭 바의 외관을 커스터마이징할 수 있습니다. 예를 들어, 탭 바의 배경색이나 선택된 탭의 색상을 변경하는 것이 가능합니다.

하지만, 이전에 언급한 "직접 접근해서는 안 된다"는 부분은 탭 바의 내부 로직이나 기본적인 동작 방식을 코드를 통해 수정하려고 시도해서는 안 된다는 의미로 해석해야 합니다. 예를 들어, 탭 바를 통해 관리되는 뷰 컨트롤러의 스위칭 로직을 변경하려는 시도 등이 이에 해당합니다.

`UITabBar`의 뷰로서의 속성을 활용하여 스타일링하는 것은 허용되지만, `UITabBarController`의 동작을 변경하려는 접근은 권장되지 않습니다. 이러한 변경은 예상치 못한 버그를 유발하거나, 앱의 미래 호환성 문제를 초래할 수 있습니다. 따라서, `UITabBarController`와 `UITabBar`의 기능을 활용할 때는 주로 제공되는 API 범위 내에서 사용하고, 공식 문서에서 권장하는 방법을 따르는 것이 바람직합니다.

---

# TabItem을 설정하는 단계에 따른 차이

### 각 ViewController의 viewDidLoad

```swift
class FirstViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        setupUI()
    }

    func setupUI() {
        view.backgroundColor = .red
        tabBarItem = UITabBarItem(tabBarSystemItem: .contacts, tag: 0)
    }
}
```

![[Pasted image 20240417173953.png]]

- 탭바 하단에 active상태롤 표시 못 한다.

### ViewController 할당 시

```swift
class CustomUITabBarController: UITabBarController {

    override func viewDidLoad() {

        super.viewDidLoad()
        let firstVC = FirstViewController()
        firstVC.tabBarItem = UITabBarItem(tabBarSystemItem: .contacts, tag: 0)

        let secondVC = SecondViewController()
        setViewControllers([firstVC, secondVC], animated: false)

    }

}
```

![[Pasted image 20240417174142.png]]

### active color 변경

```Swift

final class CustomUITabBarController: UITabBarController {

    override func viewDidLoad() {
        super.viewDidLoad()
        setupVC()
        setupTabBar()
    }


    func setupTabBar() {
        tabBar.tintColor = .green // (+) 추가
    }

}

```

## background /
