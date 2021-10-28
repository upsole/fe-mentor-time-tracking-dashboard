import Head from "next/head";
const Layout = ({ children }) => {
  const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="icon" href={prefix + "/favicon.ico"} />
        <title> Time Tracking Dashboard </title>
      </Head>
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
