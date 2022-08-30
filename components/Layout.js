import logo from "../assets/logo.png";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const Layout = ({ children, title = "CryptoHueBr Tracker" }) => {
  return (
    <div className="layout">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="header">
        <Link href="/" passHref>
          <a className="coin_logo">
            <Image src={logo} alt="huebr" />
          </a>
        </Link>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
