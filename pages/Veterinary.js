import React from "react";
import Vetform from "../components/Vetform";
import { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import useResourceVet from '../hooks/useResourceVet'
import jwt from 'jsonwebtoken';
import { storage } from '../firebase'
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Head from "next/head";


export default function Veterinary() {
    const { resources, loading, createResource, deleteResource, } = useResourceVet();
    const [user, setUser] = useState([])
    const [clinic, setclinic] = useState([])
    const [imageurl, setImageurl] = useState('');

    const handleInputChange = (e) => {

        let image = e.target.files[0]
        let pathReference = storage.ref(`images/${image.name}`)

        const uploadTask = pathReference.put(image).then((url) => {
            pathReference.getDownloadURL().then((url) => {
                console.log(url);
                setImageurl(url)
            })
        });

    }


    useEffect(() => {
        let acctoken = localStorage.getItem("access");
        const decodedAccess = jwt.decode(acctoken);
        console.log(decodedAccess);
        setUser(decodedAccess)
    }, [])

    useEffect(() => {
        if (resources) {
            setclinic(resources)
        }
    }, [resources, clinic])



    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            name: data.get('name'),
            picture: data.get('picture'),
            location: data.get('location'),
            working_hours: data.get('working_hours'),
            email: data.get('email'),
            telephone: data.get('telephone'),
        });

        const newClinic = {

            "clinc_name": data.get('name'),
            "location": data.get('location'),
            "starthoure": data.get('start_hours'),
            "endhoure": data.get('end_hours'),
            "phone": data.get('telephone'),
            "email": data.get('email'),
            "picture": imageurl,
            "user": 1


        }
        createResource(newClinic)


    };


    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        if (true) {
            setOpen(true);
        }
        else {
            alert('You should be a doctor')

        }
    };
    const handleClose = () => setOpen(false);



    return (
        <div class="vet">


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
            <header className="flex flex-col justify-center align-center">
                <Nav />
            </header>

            <main className="mx-auto  xl:container max-width:1280px">

                <h1 className="text-2xl text-grey-darkest text-white mt-5 grid justify-items-center">Here you will find good and reliable clinics to take care of your pet</h1>
                <h1 className="text-2xl text-grey-darkest text-white mt-5 grid justify-items-center">If your are a doctor and have a clinc you can add it </h1>
                <div className='m-auto align-middle mt-5 w-72'>
                    {user && user.role == 'doctor' ?  <button onClick={handleOpen} className="inline-block px-4 py-2 text-green-500 font-semibold border-2 border-green-500 rounded-md hover:bg-green-700 hover:text-white hover:border-green-700 focus:outline-none focus:ring focus:ring-green-100" >Add Your Clinc In Our Website</button> : <p></p> }
                   
                </div>

                <div className="grid grid-cols-2 ">
                    {clinic.map((item) => {
                        return (

                            <div id="app" className="flex mx-20 mt-10 bg-white rounded shadow-md w-120 h-60 card text-grey-darkest cardvet">
                                <img className="w-1/2 h-full rounded-l-sm" src={item.picture} alt="Room Image" />
                                <div className="flex flex-col w-full">
                                    <div className="flex-1 p-4 pb-0">
                                        <span className="text-3xl text-white">{item.clinc_name}</span>
                                        <h3 className="mb-1 font-light text-white">Location : {item.location}</h3>
                                        <h3 className="mb-1 font-light text-white">Working hours : {item.starthoure + ' - ' + item.endhoure}</h3>
                                        <h3 className="mb-1 font-light text-white">Email : {item.email}</h3>
                                        <h3 className="mb-1 font-light text-white">Telephone : {item.phone}</h3>
                                    </div>

                                </div>
                            </div>


                        )
                    })}
                </div>
                <div className="mt-4 ml-8">
                    <Vetform handleInputChange={handleInputChange} handleSubmit={handleSubmit} open={open} handleClose={handleClose} />
                </div>

            </main>

            <footer className="pt-16 pb-12">
                <Footer />
            </footer>

        </div>
    )
}