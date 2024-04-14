import { ClassAttributes, HTMLAttributes } from "react";
import { ExtraProps } from "react-markdown";

type MarkDownH1 = {
  props: ClassAttributes<HTMLHeadingElement> &
    HTMLAttributes<HTMLHeadingElement> &
    ExtraProps;
};

const MarkDownH1 = ({ props }: MarkDownH1) => {
  return (
    <h1 className="md:text-[42px] text-[26px] font-bold leading-[150%] md:py-[50px] py-[30px] text-gray-900">
      {props.children}
    </h1>
  );
};

export default MarkDownH1;
