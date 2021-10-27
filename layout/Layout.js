const Layout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <footer className="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Piotr</a>.
      </footer>
    </>
  );
};

export default Layout;
