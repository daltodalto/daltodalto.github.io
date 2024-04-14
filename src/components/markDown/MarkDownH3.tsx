import { ClassAttributes, HTMLAttributes } from "react";
import { ExtraProps } from "react-markdown";

type MarkDownH3 = {
  props: ClassAttributes<HTMLHeadingElement> &
    HTMLAttributes<HTMLHeadingElement> &
    ExtraProps;
};

const MarkDownH3 = ({ props }: MarkDownH3) => {
  return (
    <h1 className="text-[24px] font-medium leading-[40px] py-[25px] text-gray-800">
      {props.children}
    </h1>
  );
};

export default MarkDownH3;
