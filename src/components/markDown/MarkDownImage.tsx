import { ClassAttributes, ImgHTMLAttributes } from "react";
import { ExtraProps } from "react-markdown";
import Image from "next/image";

type MarkDownImage = {
  src: string | undefined;
  alt: string | undefined;
};

const MarkDownImage = ({ src, alt }: MarkDownImage) => {
  if (isValidUrl(src ?? "")) {
    return (
      <Image
        className="w-full h-auto md:my-[40px] my-[30px] rounded-[10px]"
        width={100}
        height={100}
        src={`${src}`}
        alt={alt ?? "이미지"}
      />
    );
  } else {
    return (
      <Image
        className="w-full h-auto md:my-[40px] my-[30px] rounded-[10px]"
        width={200}
        height={200}
        src={`/post_images${src}`}
        alt={alt ?? "이미지"}
      />
    );
  }
};

function isValidUrl(string: string) {
  try {
    new URL(string);
    return true;
  } catch (e) {
    return false;
  }
}

export default MarkDownImage;
