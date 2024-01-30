export const Label = ({ className = "", ...rest }) => {
  return <label className={`block ${className}`} {...rest}></label>;
};
