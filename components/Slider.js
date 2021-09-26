
import React, { Component } from 'react';

import { useRouter } from 'next/router'
import Image from "next/image"
import img1 from '../Imgs/img1.png'
import img9 from '../Imgs/4.png'
import img2 from '../Imgs/slide2.jpg'
import img3 from '../Imgs/Pets Care (2).png'
import img4 from '../Imgs/Pets Care (4).png'
import img7 from '../Imgs/Money can buy you a fine dog, but only love can make him wag his tail..png'
import Carousel from 'react-material-ui-carousel'
import { Button } from '@mui/material';


// import { AutoRotatingCarousel } from 'material-auto-rotating-carousel';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
export default function Slider() {

    const router = useRouter()


    var Images = [
        {
            src: { img9 },
            alt: img9,
            height: 400,
            width: 960,

        },
        {
            src: { img2 },
            alt: img2,
            height: 340,
            width: 960,
        },
        {
            src: { img3 },
            alt: img3,
            height: 400,
            width: 960,
        },
    ]
    return (
        <>
                {/* <h3 className="inline-block w-screen align-middle"> from slider</h3> */}
                <br></br>
                <div className="flex justify-center w-4/5 h-1/5">
                    <Carousel className="w-screen mt-16 rounded-md shadow h-1/5" >
                        <div ><Image className="object-fill shadow h-1/5"  src={img9} alt="img1" height="450">
                        </Image>
                          <a href="#">
                          <button className="absolute bg-yellow-400 rounded left-12 mt-72 ml-9 hover:bg-yellow-500 md:w-36 h-9" variant="contained" >SHOP NOW</button>
                          </a> 

                              </div>
                        <div><Image className="object-fill shadow h-1/5"src={img3} alt="img3" height="450"></Image></div>
                        <div><Image className="object-fill shadow h-1/5" src={img1} alt="img2" height="740" ></Image></div>
                        <div > <Image  className="object-fill shadow h-1/5" src={img7} alt="img7" height="635"></Image></div>
                        <div ><Image className="object-fill shadow h-1/5" src={img4} alt="img4" height="450"></Image></div>
                    </Carousel>
                </div>     
        </>
    )
}
