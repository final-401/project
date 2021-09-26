import React from "react";
import Vetform from "../components/Vetform";
import { useState } from 'react'
import Button from '@mui/material/Button';

export default function Veterinary() {


    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        if (null) {
            setOpen(true);
        }
        else {
            alert('You should be a doctor')
            
        }
    };
    const handleClose = () => setOpen(false);

    const clinic = [
        {
            _id: 1,
            name: 'Treaty pets clinic',
            picture: 'https://www.killarneycat.com/wp-content/uploads/sites/19/2017/03/killarney-cat-clinic_indoor-cat-vaccination.jpeg',
            location: 'Amman',
            working_hours: '10 AM - 10 PM',
            email: 'treatsclinic@gmail.com',
            telephone: '+962798999999'

        }
        , {
            _id: 2,
            name: 'Treaty pets clinic',
            picture: 'https://uploads.metamorphosis.com/wp-content/uploads/sites/2/2020/04/shutterstock_1103924993-2-2.jpg',
            location: 'Amman',
            working_hours: '10 AM - 10 PM',
            email: 'treatsclinic@gmail.com',
            telephone: '+962798999999'

        }
        ,
    ]


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
    };





    return (
        <>
            <div className="grid grid-cols-2">
                {clinic.map((item) => {
                    return (

                        <div id="app" class="bg-white w-128 h-60 rounded shadow-md flex card text-grey-darkest flex mt-10 mx-10">
                            <img class="w-1/2 h-full rounded-l-sm" src={item.picture} alt="Room Image" />
                            <div class="w-full flex flex-col">
                                <div class="p-4 pb-0 flex-1">
                                    <span class="text-2xl text-grey-darkest">{item.name}</span>
                                    <h3 class="font-light mb-1 text-5xl-grey-darkest">Location : {item.location}</h3>
                                    <h3 class="font-light mb-1 text-5xl-grey-darkest">Working hours : {item.working_hours}</h3>
                                    <h3 class="font-light mb-1 text-5xl-grey-darkest">Email : {item.email}</h3>
                                    <h3 class="font-light mb-1 text-5xl-grey-darkest">Telephone : {item.telephone}</h3>
                                </div>

                            </div>
                        </div>


                    )
                })}
            </div>
            <div className="ml-8 mt-4">
                <Button onClick={handleOpen} >Add Your Clinc In Our Website</Button>
                <Vetform handleSubmit={handleSubmit} open={open} handleClose={handleClose} />
            </div>


        </>
    )
}