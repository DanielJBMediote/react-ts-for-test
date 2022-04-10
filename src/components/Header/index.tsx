import { NextPage } from "next";
import Head from "next/head";
import * as Router from "next/router";

const Header: NextPage = () => {
  const pathname: string = Router.useRouter().pathname;
  const title: string = renderTitle(pathname);

  function renderTitle(name: string): string {
    name = name.charAt(1).toUpperCase() + name.substring(2, name.length);
    return name.length > 0 ? name : "Homepage";
  }

  const render = (): JSX.Element => {
    return (
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    );
  };

  return render();
};

export default Header;
