import { ClassAttributes, HTMLAttributes } from "react";
import { ExtraProps } from "react-markdown";

type MarkDownEm = {
  props: ClassAttributes<HTMLElement> &
    HTMLAttributes<HTMLElement> &
    ExtraProps;
};

const MarkDownEm = ({ props }: MarkDownEm) => {
  const { children } = props;
  return (
    <em className="bg-[rgba(238,220,130,0.4)] font-normal not-italic p-[2px] rounded-[2px]">
      {children}
    </em>
  );
};

export default MarkDownEm;
