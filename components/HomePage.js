import React from "react";
import Slider from "./Slider";
import { Card } from "@mui/material";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import Image from "next/image";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import MailIcon from "@mui/icons-material/Mail";
import articleImg1 from "../Imgs/dog-1861839_1920.jpg";
import articleImg2 from "../Imgs/rabbit-373691_1920.jpg";
import articleImg3 from "../Imgs/lizard-2581308_1920.jpg";
import articleImg4 from "../Imgs/cat-4611189_1920.jpg";
import img11 from "../Imgs/ali-pazani-YgVNvkm4884-unsplash.jpg";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import AboutUs from "../pages/AboutUs";
import Link from "@mui/material/Link";

export default function HomePage() {
  return (
      <div className="">
        <Slider></Slider>

        <br></br>

        <div className="mt-4 md:mt-24">
          <h2 className="text-2xl font-extrabold text-center text-gray-900 md:mb-20 ">
            Services that we Provide
          </h2>
          <div className="flex flex-wrap ">
            <div className="w-full px-4 pt-6 text-center lg:pt-12 md:w-4/12">
              <div className="relative flex flex-col w-full min-w-0 mb-8 break-words bg-white rounded-lg shadow-lg">
                <div className="flex-auto px-4 py-5">
                  <div className="inline-flex items-center justify-center w-12 h-12 p-3 mb-5 text-center text-white bg-red-400 rounded-full shadow-lg">
                    <div>
                      <FeaturedPlayListIcon />
                    </div>
                  </div>
                  <h6 className="text-xl font-semibold">Find the Right Product</h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                    Make sure it matches your pets prescription.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 text-center md:w-4/12">
              <div className="relative flex flex-col w-full min-w-0 mb-8 break-words bg-white rounded-lg shadow-lg">
                <div className="flex-auto px-4 py-5">
                  <div className="inline-flex items-center justify-center w-12 h-12 p-3 mb-5 text-center text-white bg-red-400 rounded-full shadow-lg">
                    <div>
                      <ShoppingCartIcon />
                    </div>
                  </div>
                  <h6 className="text-xl font-semibold">Add to Cart</h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                    Just like any other online store.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 pt-6 text-center lg:pt-12 md:w-4/12">
              <div className="relative flex flex-col w-full min-w-0 mb-8 break-words bg-white rounded-lg shadow-lg">
                <div className="flex-auto px-4 py-5">
                  <div className="inline-flex items-center justify-center w-12 h-12 p-3 mb-5 text-center text-white bg-red-400 rounded-full shadow-lg ">
                    <div>
                      <MailIcon />
                    </div>
                  </div>
                  <h6 className="text-xl font-semibold">
                    Tell us about your Pets and Vet
                  </h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                    You can mail us and we'll contact yor vet for you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-5xl px-6 py-16 mx-auto">
          <div className="items-center md:flex md:space-x-6">
            <div className="md:w-1/2">
              <div className="flex items-center justify-center">
                <div className="max-w-md">
                  <Image
                    className="object-cover object-center w-full rounded-md shadow"
                    style="height: 500px;"
                    src={img11}
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 md:mt-0 md:w-1/2">
              <h3 className="text-2xl font-semibold text-center text-gray-800">
                Our Task{" "}
              </h3>
              <p className="max-w-md mt-4 text-center text-gray-600">
                Our task must be to free ourselves…by widening our circle of
                compassion to embrace all living creatures and the whole of
                nature and its beauty.
              </p>
              <Link href="AboutUs/" className="block mt-8 text-center text-indigo-700">
                More About Us
                <ArrowRightAltIcon />
              </Link>
            </div>
          </div>
        </div>

        {/* Articles section  */}

        <div>
          <section className="px-4 mx-auto mt-12 mb-12 max-w-7xl sm:px-6 lg:px-4">
            <article>
              <h2 className="text-2xl font-extrabold text-center text-gray-900">
                Articles
              </h2>
              <section className="grid mt-6 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
                <article className="relative overflow-hidden duration-200 transform bg-white rounded-lg shadow-lg group hover:shadow-2xl">
                  <div className="relative w-full max-h-80 md:h-64 lg:h-44">
                    <Image
                      src={articleImg1}
                      alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                      className="object-cover object-center w-full h-full"
                    />
                  </div>
                  <div className="px-3 py-4">
                    <h3 className="pb-2 text-sm text-gray-500"></h3>
                    <p className="text-base font-semibold text-gray-900 group-hover:text-indigo-600">
                      Should my pet be tested for COVID-19?
                    </p>
                    <a
                      className="px-2 py-1 text-white bg-indigo-600 rounded-lg"
                      href="https://www.pethealthnetwork.com/all-pet-health/should-my-pet-be-tested-covid-19"
                    >
                      <span className="absolute inset-0"></span>
                      Read More
                    </a>
                  </div>
                </article>
                <article className="relative overflow-hidden duration-200 transform bg-white rounded-lg shadow-lg group hover:shadow-2xl">
                  <div className="relative w-full max-h-80 md:h-64 lg:h-44">
                    <Image
                      src={articleImg3}
                      alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                      className="object-cover object-center w-full h-full"
                    />
                  </div>
                  <div className="px-3 py-4">
                    <h3 className="pb-2 text-sm text-gray-500"></h3>
                    <p className="text-base font-semibold text-gray-900 group-hover:text-indigo-600">
                      Bearded dragon lizard Cat Takes Flight after Lizard
                      Startling
                    </p>
                    <a
                      className="px-2 py-1 text-white bg-indigo-600 rounded-lg"
                      href="https://www.pethealthnetwork.com/news-blogs/a-pets-life/cat-takes-flight-after-lizard-startling"
                    >
                      <span className="absolute inset-0"></span>
                      Read More
                    </a>
                  </div>
                </article>
                <article className="relative overflow-hidden duration-200 transform bg-white rounded-lg shadow-lg group hover:shadow-2xl">
                  <div className="relative w-full h-80 md:h-64 lg:h-44">
                    <Image
                      Image
                      src={articleImg4}
                      alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                      className="object-cover object-center w-full h-full"
                    />
                  </div>
                  <div className="px-3 py-4 ">
                    <h3 className="pb-2 text-sm text-gray-500 "></h3>
                    <p className="text-base font-semibold text-gray-900 group-hover:text-indigo-600 ">
                      The Joys of Owning a Cat, can bring companionship to your
                      life.
                    </p>
                    <a
                      className="px-2 py-1 mt-6 text-white bg-indigo-600 rounded-lg "
                      href="https://www.helpguide.org/articles/healthy-living/joys-of-owning-a-cat.htm"
                    >
                      <span className="absolute inset-0 "></span>
                      Read More
                    </a>
                  </div>
                </article>
                <article className="relative overflow-hidden duration-200 transform bg-white rounded-lg shadow-lg group hover:shadow-2xl">
                  <div className="relative w-full h-80 md:h-64 lg:h-44">
                    <Image
                      src={articleImg2}
                      alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                      className="object-cover object-center w-full h-full"
                    />
                  </div>
                  <div className="px-3 py-4">
                    <h3 className="pb-2 text-sm text-gray-500"></h3>
                    <p className="text-base font-semibold text-gray-900 group-hover:text-indigo-600">
                      Is a Rabbit the Right Pet for My Family?
                    </p>
                    <a
                      className="px-2 py-1 text-white bg-indigo-600 rounded-lg"
                      href="https://www.pethealthnetwork.com/news-blogs/a-pets-life/a-rabbit-right-pet-my-family"
                    >
                      <span className="absolute inset-0"></span>
                      Read More
                    </a>
                  </div>
                </article>
              </section>
            </article>
          </section>
        </div>
      </div>
  );
}
