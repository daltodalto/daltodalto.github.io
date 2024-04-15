import { ClassAttributes, HTMLAttributes } from "react";
import { ExtraProps } from "react-markdown";

type MarkDownH3 = {
  props: ClassAttributes<HTMLHeadingElement> &
    HTMLAttributes<HTMLHeadingElement> &
    ExtraProps;
};

const MarkDownH3 = ({ props }: MarkDownH3) => {
  return (
    <h1
      id={props.id}
      className="md:text-[24px] text-[20px] font-medium leading-[140%] md:py-[30px] py-[18px] text-gray-800"
    >
      {props.children}
    </h1>
  );
};

export default MarkDownH3;
