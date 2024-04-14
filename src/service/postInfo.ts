import path from "path";

export function getPostPathInfo() {
  const categoryDirectoryName = path.dirname(__dirname);
  const languageDirectoryName = path.dirname(categoryDirectoryName);
  const category = path.basename(categoryDirectoryName);
  const language = path.basename(languageDirectoryName);

  return {
    language,
    category,
  };
}
