import React from "react";
import Vetform from "../components/Vetform";
import { useState , useEffect} from 'react'
import Button from '@mui/material/Button';
import useResourceVet from '../hooks/useResourceVet'
import jwt from 'jsonwebtoken';


export default function Veterinary() {
    const { resources, loading, createResource, deleteResource , } = useResourceVet(); 
    const[user, setUser]=useState([])
    const [clinic, setclinic] = useState([])

    useEffect(() => {
        let acctoken = localStorage.getItem("access");
        const decodedAccess = jwt.decode(acctoken);
        console.log(decodedAccess);
        setUser(decodedAccess)
    }, [])

    useEffect(() => {
        if (resources){
            setclinic( resources )
        }
      }, [resources,clinic])


        
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

            const newClinic={

                "clinc_name": data.get('name'),
                "location": data.get('location'),
                "starthoure": data.get('start_hours'),
                "endhoure": data.get('end_hours'),
                "phone": data.get('telephone'),
                "email": data.get('email'),
                "picture": "https://uploads.metamorphosis.com/wp-content/uploads/sites/2/2020/04/shutterstock_1103924993-2-2.jpg",
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
            <>
            <div className="grid grid-cols-2">
                {clinic.map((item) => {
                    return (
                        
                        <div id="app" className="bg-white w-128 h-60 rounded shadow-md flex card text-grey-darkest flex mt-10 mx-10">
                            <img className="w-1/2 h-full rounded-l-sm" src={item.picture} alt="Room Image" />
                            <div className="w-full flex flex-col">
                                <div className="p-4 pb-0 flex-1">
                                    <span className="text-2xl text-grey-darkest">{item.clinc_name}</span>
                                    <h3 className="font-light mb-1 text-5xl-grey-darkest">Location : {item.location}</h3>
                                    <h3 className="font-light mb-1 text-5xl-grey-darkest">Working hours : {item.starthoure +' - '+ item.endhoure}</h3>
                                    <h3 className="font-light mb-1 text-5xl-grey-darkest">Email : {item.email}</h3>
                                    <h3 className="font-light mb-1 text-5xl-grey-darkest">Telephone : {item.phone}</h3>
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