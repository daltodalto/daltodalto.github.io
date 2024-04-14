"use client";

import { customCodeStyle } from "@/style/codeCustomStyle";
import React, { ClassAttributes, HTMLAttributes } from "react";
import { ExtraProps } from "react-markdown";
import { Prism } from "react-syntax-highlighter";

type MarkDownCode = {
  props: ClassAttributes<HTMLElement> &
    HTMLAttributes<HTMLElement> &
    ExtraProps;
};

export function MarkDownCode({ props }: MarkDownCode): React.ReactNode {
  const { children, className, node, ...rest } = props;
  const match = /language-(\w+)/.exec(className || "");
  const language = getLanguage(match);
  const value = String(children).replace(/\n$/, "");

  return match ? (
    <div className="flex flex-col flex-1 py-[40px]">
      <div className="flex flex-row justify-between items-center h-[40px] bg-[#3C3C3C] text-gray-100 text-[13px] py-0 px-[20px] rounded-t-[10px]">
        <div className="flex flex-row gap-[8px]">
          <div className="w-[12px] h-[12px] bg-[#FE5F57] rounded-[6px]" />
          <div className="w-[12px] h-[12px] bg-[#FFBB30] rounded-[6px]" />
          <div className="w-[12px] h-[12px] bg-[#2BC840] rounded-[6px]" />
        </div>
        {language}
      </div>
      <Prism language={language} style={customCodeStyle}>
        {value}
      </Prism>
    </div>
  ) : (
    <code className={className} {...props}>
      {value}
    </code>
  );

  function getLanguage(match: RegExpExecArray | null) {
    if (match) {
      return match[1];
    } else {
      return "";
    }
  }
}
