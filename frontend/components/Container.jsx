const Container = ({ children, className }) => {
  return (
    <div className={`max-w-6xl mx-auto w-full px-2 ${className}`}>{children}</div>
  );
};
export default Container;
