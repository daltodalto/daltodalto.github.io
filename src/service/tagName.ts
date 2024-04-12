export function getTagNameForURL(tagName: string) {
  const replacedString = tagName.replace(/\s/g, "-");

  return replacedString;
}
