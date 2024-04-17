import path from "path";

export function getPostPathInfo(categoryDirectoryName: string) {
  const languageDirectoryName = path.dirname(categoryDirectoryName);
  const category = path.basename(categoryDirectoryName);
  const language = path.basename(languageDirectoryName);

  return {
    language,
    category,
  };
}

export function getHomeLanguage(categoryDirectoryName: string) {
  const data = categoryDirectoryName.split("/");
  let language = data[data.length - 1];

  if (language == "server") {
    return "kr";
  } else {
    return language;
  }
}
