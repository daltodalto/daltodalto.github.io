---
id: "redirect"
title: "Next.js에서 페이지 리다이렉트 구현하기"
description: "Next.js에서 사용자의 접근에 따라 다른 페이지로 리다이렉트하는 두 가지 방법을 소개합니다: 클라이언트 사이드 리다이렉트와 서버 사이드 리다이렉트. 각 방법의 구현 방식과 적합한 사용 상황을 설명합니다."
date: "2023-12-19T18:11:40.322Z"
tags: ["nextjs", "redirect"]
author: "달토"
project:
totalCnt: 0
monthlyCnt: 0
weeklyCnt: 0
---

Next.js에서 특정 페이지로의 접근을 다른 페이지로 리다이렉트하는 방법은 사용자 경험을 향상시키고, 접근 제어를 관리하는 데 필수적입니다. 다음은 클라이언트 사이드 리다이렉트와 서버 사이드 리다이렉트, 두 가지 방법을 구현하는 방법에 대한 상세 안내입니다.

## 클라이언트 사이드 리다이렉트

클라이언트 사이드 리다이렉트는 주로 사용자의 인증 상태에 따라 동적으로 페이지를 리다이렉트할 필요가 있을 때 사용됩니다. Next.js에서는 useRouter 훅을 활용하여 이를 간단히 구현할 수 있습니다.

```javascript
import { useEffect } from "react";
import { useRouter } from "next/router";

const MyPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/where-to-redirect");
  }, [router]);

  return <div>Loading...</div>;
};

export default MyPage;
```

이 코드는 컴포넌트가 마운트될 때 /where-to-redirect로 리다이렉트됩니다.

## 서버 사이드 리다이렉트

서버 사이드 리다이렉트는 초기 페이지 로딩 시 서버에서 바로 리다이렉트를 처리하므로, SEO에 유리하고 사용자에게 더 빠른 페이지 응답을 제공할 수 있습니다. getServerSideProps 함수를 이용해 구현할 수 있습니다.

```javascript
export async function getServerSideProps(context) {
  return {
    redirect: {
      destination: "/where-to-redirect", // 리다이렉트할 경로
      permanent: false, // 302 리다이렉트
    },
  };
}
```

이 함수는 요청을 받을 때 지정된 경로(/where-to-redirect)로 리다이렉트합니다. permanent 속성을 true로 설정하면 301 리다이렉트로 처리됩니다.

## 사용 상황

클라이언트 사이드 리다이렉트는 로그인 상태 같은 동적 조건에 의해 리다이렉트를 처리해야 할 때 유용하며, 서버 사이드 리다이렉트는 접근 제어가 필요한 페이지나 SEO가 중요한 페이지에 적합합니다. 각 방법은 특정 요구와 상황에 따라 선택하여 사용하며, 사용자 경험과 서버 처리 효율성을 고려해 결정하는 것이 좋습니다.
