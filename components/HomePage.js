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

export default function HomePage() {
  return (
      <div className="">
        <Slider></Slider>

        <br></br>

        <div class="mt-4 md:mt-24">
          <h2 class="text-2xl font-extrabold text-gray-900 text-center md:mb-20 ">
            How To Order from Our Website
          </h2>
          <div class="flex flex-wrap ">
            <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div class="px-4 py-5 flex-auto">
                  <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                    <div>
                      <FeaturedPlayListIcon />
                    </div>
                  </div>
                  <h6 class="text-xl font-semibold">Find the Right Product</h6>
                  <p class="mt-2 mb-4 text-blueGray-500">
                    Make sure it matches your pets prescription.
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full md:w-4/12 px-4 text-center">
              <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div class="px-4 py-5 flex-auto">
                  <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                    <div>
                      <ShoppingCartIcon />
                    </div>
                  </div>
                  <h6 class="text-xl font-semibold">Add to Cart</h6>
                  <p class="mt-2 mb-4 text-blueGray-500">
                    Just like any other online store.
                  </p>
                </div>
              </div>
            </div>
            <div class="pt-6 w-full md:w-4/12 px-4 text-center">
              <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div class="px-4 py-5 flex-auto">
                  <div class=" text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                    <div>
                      <MailIcon />
                    </div>
                  </div>
                  <h6 class="text-xl font-semibold">
                    Tell us about your Pets and Vet
                  </h6>
                  <p class="mt-2 mb-4 text-blueGray-500">
                    You can mail us and we'll contact yor vet for you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="max-w-5xl px-6 py-16 mx-auto">
          <div class="items-center md:flex md:space-x-6">
            <div class="md:w-1/2">
              <div class="flex items-center justify-center">
                <div class="max-w-md">
                  <Image
                    class="object-cover object-center w-full rounded-md shadow"
                    style="height: 500px;"
                    src={img11}
                  />
                </div>
              </div>
            </div>

            <div class="mt-8 md:mt-0 md:w-1/2">
              <h3 class="text-2xl font-semibold text-gray-800 text-center">
                Our Task{" "}
              </h3>
              <p class="max-w-md mt-4 text-gray-600 text-center">
                Our task must be to free ourselves…by widening our circle of
                compassion to embrace all living creatures and the whole of
                nature and its beauty.
              </p>
              <a href="#" class="block mt-8 text-indigo-700  text-center">
                More About Us
                <ArrowRightAltIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Articles section  */}

        <div>
          <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mt-12 mb-12">
            <article>
              <h2 class="text-2xl font-extrabold text-gray-900 text-center">
                Today's Top Articles
              </h2>
              <section class="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
                <article class="bg-white group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform duration-200">
                  <div class="relative w-full max-h-80 md:h-64 lg:h-44">
                    <Image
                      src={articleImg1}
                      alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                      class="w-full h-full object-center object-cover"
                    />
                  </div>
                  <div class="px-3 py-4">
                    <h3 class="text-sm text-gray-500 pb-2"></h3>
                    <p class="text-base font-semibold text-gray-900 group-hover:text-indigo-600">
                      Should my pet be tested for COVID-19?
                    </p>
                    <a
                      class="bg-indigo-600 py-1 px-2 text-white rounded-lg"
                      href="https://www.pethealthnetwork.com/all-pet-health/should-my-pet-be-tested-covid-19"
                    >
                      <span class="absolute inset-0"></span>
                      Read More
                    </a>
                  </div>
                </article>
                <article class="bg-white group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform duration-200">
                  <div class="relative w-full max-h-80 md:h-64 lg:h-44">
                    <Image
                      src={articleImg3}
                      alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                      class="w-full h-full object-center object-cover"
                    />
                  </div>
                  <div class="px-3 py-4">
                    <h3 class="text-sm text-gray-500 pb-2"></h3>
                    <p class="text-base font-semibold text-gray-900 group-hover:text-indigo-600">
                      Bearded dragon lizard Cat Takes Flight after Lizard
                      Startling
                    </p>
                    <a
                      class="bg-indigo-600 py-1 px-2 text-white rounded-lg"
                      href="https://www.pethealthnetwork.com/news-blogs/a-pets-life/cat-takes-flight-after-lizard-startling"
                    >
                      <span class="absolute inset-0"></span>
                      Read More
                    </a>
                  </div>
                </article>
                <article class="bg-white group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform duration-200">
                  <div class="relative w-full h-80 md:h-64 lg:h-44">
                    <Image
                      Image
                      src={articleImg4}
                      alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                      class="w-full h-full object-center object-cover"
                    />
                  </div>
                  <div class="px-3 py-4 ">
                    <h3 class="text-sm text-gray-500 pb-2 "></h3>
                    <p class="text-base font-semibold text-gray-900 group-hover:text-indigo-600 ">
                      The Joys of Owning a Cat, can bring companionship to your
                      life.
                    </p>
                    <a
                      class="bg-indigo-600 py-1 px-2 mt-6 text-white rounded-lg "
                      href="https://www.helpguide.org/articles/healthy-living/joys-of-owning-a-cat.htm"
                    >
                      <span class="absolute inset-0 "></span>
                      Read More
                    </a>
                  </div>
                </article>
                <article class="bg-white group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform duration-200">
                  <div class="relative w-full h-80 md:h-64 lg:h-44">
                    <Image
                      src={articleImg2}
                      alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                      class="w-full h-full object-center object-cover"
                    />
                  </div>
                  <div class="px-3 py-4">
                    <h3 class="text-sm text-gray-500 pb-2"></h3>
                    <p class="text-base font-semibold text-gray-900 group-hover:text-indigo-600">
                      Is a Rabbit the Right Pet for My Family?
                    </p>
                    <a
                      class="bg-indigo-600 py-1 px-2 text-white rounded-lg"
                      href="https://www.pethealthnetwork.com/news-blogs/a-pets-life/a-rabbit-right-pet-my-family"
                    >
                      <span class="absolute inset-0"></span>
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
