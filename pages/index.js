import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/Navbar";
import HomePage from "../components/HomePage";
import AboutUs from "../components/AboutUs";
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      

      <Navbar />
      {/* <HomePage/> */}
    </>
  );
}

