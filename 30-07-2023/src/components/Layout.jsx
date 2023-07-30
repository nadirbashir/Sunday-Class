export const Layout = ({ children }) => {
  return (
    <div>
      <h1>HEADER</h1>
      {children}
      <h1>FOOTER</h1>
    </div>
  );
};
