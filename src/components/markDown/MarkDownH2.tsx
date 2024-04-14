import { ClassAttributes, HTMLAttributes } from "react";
import { ExtraProps } from "react-markdown";

type MarkDownH2 = {
  props: ClassAttributes<HTMLHeadingElement> &
    HTMLAttributes<HTMLHeadingElement> &
    ExtraProps;
};

const MarkDownH2 = ({ props }: MarkDownH2) => {
  return (
    <h2 className="text-[32px] font-semibold leading-[50px] py-[30px] text-gray-800">
      {props.children}
    </h2>
  );
};

export default MarkDownH2;
