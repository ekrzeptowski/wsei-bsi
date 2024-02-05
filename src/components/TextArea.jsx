import { InputStyle } from "./Input";

export const TextArea = ({ className = "", ...rest }) => {
  return <textarea cols="35" rows="10" className={`${InputStyle} ${className}`} {...rest} />;
};
