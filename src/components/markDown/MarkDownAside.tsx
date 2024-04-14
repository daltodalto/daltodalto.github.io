import { ClassAttributes, HTMLAttributes } from "react";
import { ExtraProps } from "react-markdown";

type MarkDownAside = {
  props: ClassAttributes<HTMLElement> &
    HTMLAttributes<HTMLElement> &
    ExtraProps;
};

export function MarkDownAside({ props }: MarkDownAside): React.ReactNode {
  const { children, className, node, color } = props;
  const _color = color ?? "yellow";
  function getColor() {
    // return "";
    if (_color == "red") {
      return "border-red-1000";
    } else if (_color == "green") {
      return "border-green-aside";
    } else {
      return "border-yellow-aside";
    }
  }

  function getIcon() {
    if (_color == "red") {
      return "🚫";
    } else if (_color == "green") {
      return "♻️";
    } else {
      return "⚠️";
    }
  }
  return (
    <aside
      className={`flex border-[1px] rounded-[10px] items-start justify-start gap-[10px] py-[20px] md:pr-[30px] md:pl-[15px] px-[20px] ${getColor()} md:my-[40px] my-[30px] text-gray-800`}
    >
      <div className="hidden md:block">{getIcon()}</div>
      {children}
    </aside>
  );
}
