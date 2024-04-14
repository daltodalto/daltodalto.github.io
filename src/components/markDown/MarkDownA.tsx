import { AnchorHTMLAttributes, ClassAttributes } from "react";
import { ExtraProps } from "react-markdown";

type MarkDownA = {
  props: ClassAttributes<HTMLAnchorElement> &
    AnchorHTMLAttributes<HTMLAnchorElement> &
    ExtraProps;
};

const MarkDownA = ({ props }: MarkDownA) => {
  const { href, children } = props;
  return (
    <a href={href} className=" text-gray-500 font-normal no-underline px-[4px]">
      {"🔗 "}
      <span className="italic underline">{children}</span>
    </a>
  );
};

export default MarkDownA;
