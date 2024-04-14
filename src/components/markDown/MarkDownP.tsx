import { ClassAttributes, HTMLAttributes } from "react";
import { ExtraProps } from "react-markdown";
import MarkDownImage from "./MarkDownImage";
// import { Element } from 'react-markdown

type MarkDownP = {
  props: ClassAttributes<HTMLParagraphElement> &
    HTMLAttributes<HTMLParagraphElement> &
    ExtraProps;
};

const MarkDownP = ({ props }: MarkDownP) => {
  const { node, children } = props;

  if (
    node?.children.length === 1 &&
    (node.children[0] as any).tagName === "img"
  ) {
    const image = node.children[0] as any;
    return (
      <MarkDownImage src={image.properties.src} alt={image.properties.alt} />
    );
  }
  return <p className="text-[15px] leading-[27px] text-gray-800">{children}</p>;
};

export default MarkDownP;
