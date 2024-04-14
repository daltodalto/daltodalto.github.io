import { ClassAttributes, HTMLAttributes } from "react";
import { ExtraProps } from "react-markdown";

type MarkDownStrong = {
  props: ClassAttributes<HTMLElement> &
    HTMLAttributes<HTMLElement> &
    ExtraProps;
};

const MarkDownStrong = ({ props }: MarkDownStrong) => {
  const { children } = props;
  return <strong className="font-black">{children}</strong>;
};

export default MarkDownStrong;
