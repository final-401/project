import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import HomePage from "../components/HomePage";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Supplies from "./Supplies";
import Nav from "../components/Nav";
import NavFinal from "../components/NavFinal";

export default function Home() {
  return (
    <div className="">
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
        <link
          rel="stylesheet"
          href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
        />
        <link
          rel="stylesheet"
          href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
        />
      </Head>

      <header className="h-64 mx-auto mb-32 rounded xl:container max-h-16">
        <NavFinal />
      </header>

      <main className="mx-auto rounded xl:container max-width:1280px">
        <HomePage />
      </main>

      <footer className="pt-10 pb-12 rounded">
        <Footer />
      </footer>
   

      
    </div>
  );
}
