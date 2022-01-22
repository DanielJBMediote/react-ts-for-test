import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Profile: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Profile</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Link href="/">
        <button name="home">To Home</button>
      </Link>
      <p>Profile Page</p>
    </div>
  );
};

export default Profile;
