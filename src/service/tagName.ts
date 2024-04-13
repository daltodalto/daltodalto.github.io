export function getTagNameForURL(tagName: string) {
  const replacedString = tagName.toLowerCase().replace(/\s/g, "-");

  return replacedString;
}
