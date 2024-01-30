export const InputStyle =
  "rounded-lg border border-primary-600 shadow focus:border-primary-700 focus:ring focus:ring-primary-600";

export const Input = ({ className = "", ...rest }) => {
  return <input className={`${InputStyle} ${className}`} {...rest} />;
};
