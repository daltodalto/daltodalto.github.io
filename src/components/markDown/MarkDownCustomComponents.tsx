import { Components } from "react-markdown";
import { MarkDownAside } from "./MarkDownAside";
import { MarkDownCode } from "./MarkDownCode";
import MarkDownH1 from "./MarkDownH1";
import MarkDownH2 from "./MarkDownH2";
import MarkDownH3 from "./MarkDownH3";
import MarkDownImage from "./MarkDownImage";
import MarkDownP from "./MarkDownP";
import MarkDownA from "./MarkDownA";
import MarkDownStrong from "./MarkDownStrong";
import MarkDownEm from "./MarkDownEm";
import MarkDownBlockquote from "./MarkDownBlockquote";

interface CustomComponents extends Partial<Components> {
  custom: React.ComponentType<{ children: React.ReactNode }>;
}

export const components: CustomComponents = {
  h1(props) {
    return <MarkDownH1 props={props} />;
  },
  h2(props) {
    return <MarkDownH2 props={props} />;
  },
  h3(props) {
    return <MarkDownH3 props={props} />;
  },
  p(props) {
    return <MarkDownP props={props} />;
  },
  a(props) {
    return <MarkDownA props={props} />;
  },
  strong(props) {
    return <MarkDownStrong props={props} />;
  },
  em(props) {
    return <MarkDownEm props={props} />;
  },
  img(props) {
    const { src, alt } = props;
    return <MarkDownImage src={src} alt={alt} />;
  },
  custom: (props) => {
    return <div>커스텀</div>;
  },
  blockquote(props) {
    return <MarkDownBlockquote props={props} />;
  },
  aside(props) {
    return <MarkDownAside props={props} />;
  },
  code(props) {
    return <MarkDownCode props={props} />;
  },
};
