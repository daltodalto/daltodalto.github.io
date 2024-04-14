import { ClassAttributes, HTMLAttributes } from "react";
import { ExtraProps } from "react-markdown";

type MarkDownH2 = {
  props: ClassAttributes<HTMLHeadingElement> &
    HTMLAttributes<HTMLHeadingElement> &
    ExtraProps;
};

const MarkDownH2 = ({ props }: MarkDownH2) => {
  return (
    <h2 className="md:text-[32px] text-[22px] font-semibold leading-[145%] md:py-[30px] py-[20px] text-gray-800">
      {props.children}
    </h2>
  );
};

export default MarkDownH2;
