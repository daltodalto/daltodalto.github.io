import { BlockquoteHTMLAttributes, ClassAttributes } from "react";
import { ExtraProps } from "react-markdown";

type MarkDownBlockquote = {
  props: ClassAttributes<HTMLQuoteElement> &
    BlockquoteHTMLAttributes<HTMLQuoteElement> &
    ExtraProps;
};

const MarkDownBlockquote = ({ props }: MarkDownBlockquote) => {
  return (
    <blockquote className="bg-gray-100 p-[40px] md:my-[30px] my-[20px] rounded-[16px]">
      {props.children}
    </blockquote>
  );
};

export default MarkDownBlockquote;
