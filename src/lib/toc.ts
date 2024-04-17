import crypto from "crypto";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import stringify from "rehype-stringify";
import { TOC } from "@/interfaces/toc";
import { visit } from "unist-util-visit";
import { Plugin, unified } from "unified";

export function generateTOCId(title: string) {
  return crypto.createHash("sha1").update(title).digest("hex").substring(0, 8);
}

export const makeTOCIdPlugin: Plugin = () => {
  return (tree: any) => {
    visit(tree, "element", (node: any) => {
      if (
        node.tagName == "h1" ||
        node.tagName == "h2" ||
        node.tagName == "h3"
      ) {
        let title = "";
        if (node.children.length > 0) {
          title = node.children[0].value; // 제목 텍스트 추출
        }

        const id = generateTOCId(title); // 해시 기반 ID 생성

        if (!node.properties) node.properties = {};
        node.properties.id = id;
      }
    });
  };
};

export async function getToc(inputMarkdown: string): Promise<TOC[]> {
  try {
    let nodeTree: any = undefined;
    let result: TOC[] = [];
    await unified()
      .use(remarkParse)
      .use(remarkRehype)
      .use(() => (tree) => {
        nodeTree = tree;
      })
      .use(stringify)
      .process(inputMarkdown);

    nodeTree.children.map((item: any) => {
      if (
        item.tagName == "h1" ||
        item.tagName == "h2" ||
        item.tagName == "h3"
      ) {
        const title = item.children[0].value;
        let data: TOC = {
          tagName: item.tagName,
          title: title,
          id: generateTOCId(title),
        };
        result.push(data);
      }
    });

    return result;
  } catch (error) {
    return [];
  }
}
