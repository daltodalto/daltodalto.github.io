import { ClassAttributes, HTMLAttributes } from "react";
import { ExtraProps } from "react-markdown";

type MarkDownH1 = {
  props: ClassAttributes<HTMLHeadingElement> &
    HTMLAttributes<HTMLHeadingElement> &
    ExtraProps;
};

const MarkDownH1 = ({ props }: MarkDownH1) => {
  return (
    <h1 className="text-[42px] font-bold leading-[65px] py-[50px] text-gray-900">
      {props.children}
    </h1>
  );
};

export default MarkDownH1;
