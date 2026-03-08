const Container = ({ children, className }) => {
  return <div className={`${className} bg-white max-w-5xl mx-auto relative  `}>{children}</div>;
}; 
export default Container;
