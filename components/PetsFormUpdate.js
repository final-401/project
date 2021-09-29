import React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { NavItem } from "react-bootstrap";
import useResource from '../hooks/useResource'
import { useState,useEffect } from 'react';
import jwt from 'jsonwebtoken';
import {storage} from '../firebase';




const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid green ',
    borderRadius:'10px',
    boxShadow: 24,
    p: 4,
};

export default function PetsFormUpdate({open,handleClose,datafrom}) {
    const { resources, loading, createResource, deleteResource ,updateResource} = useResource(); 

   


    const [imageurl, setImageurl] = useState('');
    const handleInputChange=(e)=>{

        let image =e.target.files[0]
        let pathReference= storage.ref(`images/${image.name}`)
    
        const uploadTask =pathReference.put(image).then((url)=>{
          pathReference.getDownloadURL().then((url) => {
            console.log(url);
            setImageurl(url)
          })
        });
        
      }

    const[user, setUser]=useState([])

    useEffect(() => {
        let acctoken = localStorage.getItem("access");
        const decodedAccess = jwt.decode(acctoken);
        console.log(decodedAccess);
        setUser(decodedAccess)
    }, [])
    const handleUpdate=((e)=>{
        e.preventDefault()
        const data = new FormData(e.currentTarget);
        if (user){
        const obj={
            user_id:user.user_id,
            type: data.get('type'),
            name_pet:data.get('name'),
            price: data.get('price'),
            description: data.get('description'),
            picture: imageurl
        }
        
        updateResource(obj,datafrom.id)
    }
    })

    return (
        <div>
            
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <form class="w-full max-w-lg mx-auto my-5" onSubmit={handleUpdate}>
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    Pet Type
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="type" name='type' type="text" defaultValue={datafrom.type}/>
                            </div>
                            <div class="w-full md:w-1/2 px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                    Price
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="price" name='price'type="number" defaultValue={datafrom.price}/>
                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full px-3">
                                <label class="block uppercase  tracking-wide text-gray-700 text-xs font-bold mb-2" for="email">
                                    Pet Name
                                </label>
                                <input class="appearance-none  block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="text" name='name' id="name" defaultValue={datafrom.name_pet}/>
                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full px-3">
                                <label class="block uppercase  tracking-wide text-gray-700 text-xs font-bold mb-2" for="email">
                                    description
                                </label>
                                <textarea class="appearance-none  block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" rows='5' type="text" name='description' id="description" defaultValue={datafrom.description}/>
                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="email">
                                   Picture
                                </label>
                                <input onChange={handleInputChange}  type="file" name='picture' id="picture" defaultValue={''}/>
                            </div>
                        </div>
                       <div className="grid justify-items-center mt-7">
                           
                        <button onClick={handleClose} className=" inline-block px-4 py-2 text-green-500 font-semibold border-2 border-green-500 rounded-md hover:bg-green-700 hover:text-white hover:border-green-700 focus:outline-none focus:ring focus:ring-green-100">
                            Update
                        </button>
                       </div>
                    </form>
                </Box>
            </Modal>
        </div>

    )
}