import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { Button } from "semantic-ui-react";
import Navbar from "components/Navbar";

const Home: NextPage = (props) => {
  // const btnLink = React.createRef();

  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar></Navbar>
      <Link href="/profile">
        {/* <CustomButton
          label="To Profiles"
          className="primary"
          name="nav-to-profile"
        /> */}

        <Button className="ui button primary">To Profiles</Button>
      </Link>
      <p>Hello Dev</p>
    </div>
  );
};

export default Home;
