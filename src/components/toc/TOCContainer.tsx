"use client";
import { TOC } from "@/interfaces/toc";
import ScrollToHash from "@/lib/ScrollToHash";

type TOCContainer = {
  toc: TOC[];
};

enum TOCType {
  tab0 = "tab0",
  tab1 = "tab1",
  tab2 = "tab2",
}

const TOCContainer = ({ toc }: TOCContainer) => {
  const hasH1 = getHasH1(toc);

  return (
    <>
      <ScrollToHash />
      <section className="flex flex-col pl-[30px] ">
        <div className="toc sticky top-[90px] flex flex-col">
          {toc.map((item) => {
            let type = getTOCType(item.tagName, hasH1);
            if (type == TOCType.tab0) {
              return (
                <a
                  className="text-[14px] tracking-[-0.3px] text-gray-600 font-medium py-[5px]"
                  href={`#${item.id}`}
                  key={item.id}
                >
                  {item.title}
                </a>
              );
            } else if (type == TOCType.tab1) {
              return (
                <a
                  className="text-[14px] tracking-[-0.3px] text-gray-600 font-normal pl-[20px]"
                  href={`#${item.id}`}
                  key={item.id}
                >
                  {item.title}
                </a>
              );
            } else {
              return (
                <a
                  className="text-[14px] tracking-[-0.3px] text-gray-600 font-normal pl-[40px]"
                  href={`#${item.id}`}
                  key={item.id}
                >
                  {item.title}
                </a>
              );
            }
          })}
        </div>
      </section>
    </>
  );

  function getTOCType(tagName: string, hasH1: boolean): TOCType | undefined {
    if (tagName.toLowerCase() == "h1") {
      return TOCType.tab0;
    } else if (tagName.toLowerCase() == "h2") {
      if (hasH1) {
        return TOCType.tab1;
      } else {
        return TOCType.tab0;
      }
    } else if (tagName.toLowerCase() == "h3") {
      if (hasH1) {
        return TOCType.tab2;
      } else {
        return TOCType.tab1;
      }
    }
  }

  function getHasH1(tocItems: TOC[]) {
    let items = tocItems.filter((item) => item.tagName.toLowerCase() == "h1");
    return items.length > 0;
  }
};

export default TOCContainer;
