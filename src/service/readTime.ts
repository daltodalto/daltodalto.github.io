export function estimateReadingTime(markdownText: string) {
  // HTML 태그 제거 (간단한 정규식 사용)

  const cleanText = markdownText
    .replace(/(#{1,6} )/g, "") // 제목 구문 제거
    .replace(/\!\[.*?\]\(.*?\)/g, "") // 이미지 링크 제거
    .replace(/\[.*?\]\(.*?\)/g, "") // 일반 링크 제거
    // .replace(/(`{1,3}).*?\1/g, "") // 코드 블록 제거
    .replace(/[*_\-]{1,2}/g, "") // 강조 표시 제거
    .replace(/<!--.*?-->/gs, ""); // HTML 주석 제거
  // 공백을 기준으로 단어 수 계산
  const wordCount = cleanText.split(/\s+/).filter(Boolean).length;

  // 평균 읽기 속도: 분당 200단어
  const averageReadingSpeed = 100;
  const estimatedTime = wordCount / averageReadingSpeed;

  return estimatedTime.toFixed(1);
}
