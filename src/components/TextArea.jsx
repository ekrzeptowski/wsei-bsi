import { InputStyle } from "./Input";

export const TextArea = ({ className = "", ...rest }) => {
  return <textarea className={`${InputStyle} ${className}`} {...rest} />;
};
