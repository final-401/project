
import React from 'react';
import Image from "next/image";
import Roaa from "../AboutImages/Roaa.jpeg";
import Anas from "../AboutImages/Anas.jpeg";
import Feras from "../AboutImages/Feras.jpeg";
import Abdullah from "../AboutImages/Abdullah.png";
import Awon from "../AboutImages/Awon.jpeg";
import Saad from "../AboutImages/Saad.jpeg";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import img1 from '../AboutImages/helperImgs/dog5.jpg';
import img2 from '../AboutImages/helperImgs/dog3.jpg';
import img3 from '../AboutImages/helperImgs/dog6.jpg';
import Nav from "../components/Nav";

export default function AboutUs() {
    return (
        <div>
            <header className="h-64 mx-auto mb-20 rounded xl:container max-h-16">
                <Nav />
            </header>
            <div>
                <div class="bg-gray-100 lg:py-12 lg:flex lg:justify-center ">
                    <div class="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg h-96">
                        <div class="lg:w-1/2 lg:flex lg:h-full">
                            <div class="lg:rounded-lg" >
                                <Image src={img1} alt="mission" class="absolute inset-0 w-full h-full object-cover" />
                            </div>
                        </div>
                        <div class="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
                            <h2 class="text-3xl text-indigo-600 font-bold">Our Mission </h2>
                            <p class="mt-4 text-gray-600">We are on mission to provide our customers and Pet-owners with the best scientific advice, products and nutritions that will help with the best option that support pets to live healthier life.</p>
                        </div>
                    </div>
                </div>
                <div class="bg-gray-100 lg:py-12 lg:flex lg:justify-center ">
                    <div class="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg h-72">

                        <div class="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
                            <h2 class="text-3xl text-indigo-600 font-bold">Our Vision </h2>
                            <p class="mt-4 text-gray-600">To be the only pet supplies option that provide customers and people with top-notch pet products.</p>
                        </div>
                        <div class="lg:w-1/2 lg:flex lg:h-full">
                            <div class="lg:rounded-lg" >
                                <Image src={img2} alt="mission" class="absolute inset-0 w-full h-full object-cover" style={{ height: "100%" }} />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-gray-100 lg:py-12 lg:flex lg:justify-center ">
                    <div class="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg h-72">
                        <div class="lg:w-1/2 lg:flex lg:h-full">
                            <div class="lg:rounded-lg" >
                                <Image src={img3} alt="mission" class="absolute inset-0 w-full h-full object-cover" style={{ height: "100%" }} />
                            </div>
                        </div>
                        <div class="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
                            <h2 class="text-3xl text-indigo-600 font-bold">Our Team </h2>
                            <p class="mt-4 text-gray-600">
                                At Pets Care , Our team is fully armed with extensive pet products knowledge and embrace a number of professional values, including good service, respect, credibility, partnership and accountablity.</p>
                        </div>
                    </div>
                </div>
            </div>

            <section class="pt-20 pb-20">

                <div class="flex flex-wrap justify-center text-center mb-24">
                    <div class="w-full lg:w-6/12 px-4">
                        <h2 class="text-4xl  text-indigo-600 font-bold">Here are our heroes</h2>
                    </div>
                </div>

                <div class="flex flex-wrap justify-center">

                    <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-8">
                        <div class="px-6">
                            <Image alt="..." src={Feras} class="shadow-lg rounded-full mx-auto max-w-120-px" />
                            <div class="pt-6 text-center">
                                <h5 class="text-xl font-bold text-blueGray-700">Feras EzzAldeen</h5>
                                <p class="mt-1 text-sm text-blueGray-400 uppercase font-semibold"> full stack developer</p>
                                <div class="mt-6">
                                    <a class="bg-blue-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button" href="https://www.linkedin.com/in/feras-ezz-aldeen/">
                                        <LinkedInIcon />
                                    </a>
                                    <a class="bg-gray-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button" href="https://github.com/ferasezzaldeen" >
                                        <GitHubIcon />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-8">
                        <div class="px-6">
                            <Image alt="..." src={Anas} class="shadow-lg rounded-full mx-auto max-w-120-px" />
                            <div class="pt-6 text-center mb-9">
                                <h5 class="text-xl font-bold text-blueGray-700">Anas AbuGhaliah</h5>
                                <p class="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                                    Full Stack Developer
                                </p>
                                <div class="mt-6">
                                    <a class="bg-blue-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button" href="https://www.linkedin.com/in/anas-abughalieh-68b73a194/">
                                        <LinkedInIcon />
                                    </a>
                                    <a class="bg-gray-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button" href="https://github.com/AnasAGc">
                                        <GitHubIcon />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-8">
                        <div class="px-6">
                            <Image alt="..." src={Abdullah} class="shadow-lg rounded-full mx-auto max-w-120-px" />
                            <div class="pt-6 text-center">
                                <h5 class="text-xl font-bold text-blueGray-700">Abdullah Elian</h5>
                                <p class="mt-1 text-sm text-blueGray-400 uppercase font-semibold">Full Stack Developer </p>
                                <div class="mt-6">
                                    <a class="bg-gray-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button" href="https://github.com/AbdullahElian1">
                                        <GitHubIcon />
                                    </a>
                                    <a class="bg-blue-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button" href="https://www.linkedin.com/in/abdullah-elian/">
                                        <LinkedInIcon />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>


                </div >

                <div class="flex flex-wrap justify-center">


                    <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-8">
                        <div class="px-6">
                            <Image alt="..." src={Awon} class="shadow-lg rounded-full mx-auto max-w-120-px" />
                            <div class="pt-6 text-center">
                                <h5 class="text-xl font-bold text-blueGray-700">Awon Khrais</h5>
                                <p class="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                                    Full Stack Developer
                                </p>
                                <div class="mt-6">
                                    <a class="bg-blue-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button" href="https://www.linkedin.com/in/awonkhrais/">
                                        <LinkedInIcon />
                                    </a>
                                    <a class="bg-gray-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button" href="https://github.com/Awonkhrais">
                                        <GitHubIcon />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-8">
                        <div class="px-6">
                            <Image alt="..." src={Saad} class="shadow-lg rounded-full mx-auto max-w-120-px" />
                            <div class="pt-6 text-center">
                                <h5 class="text-xl font-bold text-blueGray-700">Saadoun Dhirat</h5>
                                <p class="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                                    Full Stack Developer
                                </p>
                                <div class="mt-6">
                                    <a class="bg-gray-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button" href="https://github.com/saadoundhirat">
                                        <GitHubIcon />
                                    </a>
                                    <a class="bg-blue-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button" href="https://www.linkedin.com/in/saadoundhirat/">
                                        <LinkedInIcon />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-8">
                        <div class="px-6">
                            <Image alt="..." src={Roaa} class="shadow-lg rounded-full mx-auto max-w-120-px" />
                            <div class="pt-6 text-center">
                                <h5 class="text-xl font-bold text-blueGray-700">Roaa Mustafa</h5>
                                <p class="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                                    Full Stack Developer
                                </p>
                                <div class="mt-6">
                                    <a class="bg-gray-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button" href="https://github.com/RoaaMustafa">
                                        <GitHubIcon />
                                    </a>
                                    <a class="bg-blue-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button" href="https://www.linkedin.com/in/roaa-mustafa98/">
                                        <LinkedInIcon />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div >

    )
}