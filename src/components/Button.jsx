export const Button = ({ className = "", ...rest }) => {
  return (
    <button
      className={`border-primary-600 hover:bg-primary-600 text-primary-600 hover:text-primary-50 rounded-lg border border px-4 py-2 shadow ${className}`}
      {...rest}
    ></button>
  );
};
