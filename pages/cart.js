import React from "react";
import Head from "next/head";
import Footer from "../components/Footer";
import CartForm from "../components/CartForm";
import Nav from "../components/Nav";

export default function cart() {
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

      <header className="flex flex-col justify-center my-5 align-center">
        <Nav />
      </header>

      {/* cart Form */}
      <main className="mx-auto bg-black xl:container max-width:1280px">
        <CartForm />
      </main>

      <footer className="pt-16 pb-12 bg-red-500">
        <Footer />
      </footer>
    </div>
  );
}
