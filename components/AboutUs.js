
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
import image from 'next/image';
export default function AboutUs() {
    // const style = {
    //     background-image:url("https://images.unsplash.com/photo-1609342475528-dd7d93e8311e"),
    //     lib="rb-1.2.1",
    //     auto="format",
    //     fit="crop",
    //     w="676",
    //     q="80",
    //   };
    return (
        <div>
            {/* <div class="w-full h-screen bg-center bg-no-repeat bg-cover" style={style}>
                <div class="w-full h-screen bg-opacity-50 bg-black flex justify-center items-center">
                    <div class="mx-4 text-center text-white">
                        <h1 class="font-bold text-6xl mb-4">This is a test</h1>
                        <h2 class="font-bold text-3xl mb-12">This is a test</h2>
                        <div>
                            <a href="" class="bg-blue-500 rounded-md font-bold text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600 mr-2">
                                Click here
                            </a>
                            <a href="" class="bg-red-500 rounded-md font-bold text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-red-600 ml-2">
                                Or click here
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="w-full h-screen bg-center bg-no-repeat bg-cover" style={{background-image: url('https://images.unsplash.com/photo-1609343007774-dad98a8f8c33?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1225&q=80')}}>
                <div class="w-full h-screen bg-opacity-50 bg-black flex justify-center items-center relative">
                    <div class="mx-4 text-center text-white">
                        <h1 class="font-bold text-6xl mb-4">This is a test</h1>
                        <h2 class="font-bold text-3xl mb-12">This is a test</h2>
                    </div>
                    <div class="absolute bottom-14">
                        <a href="" class="border-2 border-white rounded-md font-bold text-white px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white mr-6">
                            Click here
                        </a>
                    </div>
                </div>
            </div> */}

            <section class="pt-20 pb-20">

                <div class="flex flex-wrap justify-center text-center mb-24">
                    <div class="w-full lg:w-6/12 px-4">
                        <h2 class="text-4xl font-semibold  text-blueGray-700">Our story</h2>
                        <p class="text-lg leading-relaxed m-4 text-blueGray-500">
                            According to the National Oceanic and Atmospheric
                            Administration, Ted, Scambos, NSIDClead scentist, puts the
                            potentially record maximum.
                        </p>
                    </div>
                </div>
                <div class="flex flex-wrap justify-center text-center mb-24">
                    <div class="w-full lg:w-6/12 px-4">
                        <h2 class="text-4xl font-semibold  text-blueGray-700">Here are our heroes</h2>
                        <p class="text-lg leading-relaxed m-4 text-blueGray-500">
                            According to the National Oceanic and Atmospheric
                            Administration, Ted, Scambos, NSIDClead scentist, puts the
                            potentially record maximum.
                        </p>
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