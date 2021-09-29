import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import HomePage from "../components/HomePage";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Supplies from "./Supplies";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <div className="mancolbg">
      <Head>
        <title>Pets Care</title>
        <link rel="icon" href="/logo.ico" />
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

      <header className="h-64 mx-auto mb-6 rounded xl:container max-h-16">
        <Nav />
      </header>

      <main className="mx-auto rounded xl:container max-width:1280px mancolbg">
        <HomePage />
      </main>

      <footer className="pt-10 ">
        <Footer />
      </footer>
   

      
    </div>
  );
}
