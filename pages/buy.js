
import * as React from 'react';
import { useState,useEffect } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import Container from '@mui/material/Container';
import Nav from "../components/Nav";
import PetsForm from '../components/PetsForm';
import Button from '@mui/material/Button';
import axios from 'axios'
import useResource from '../hooks/useResource'
import jwt from 'jsonwebtoken';
import {storage} from '../firebase'



export default function Home() {
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

    
    const { resources, loading, createResource, deleteResource , } = useResource(); 
    const[user, setUser]=useState([])
    const [pets, setPets] = useState([])
    useEffect(() => {
        const url='http://127.0.0.1:8000/api/v1/pet/'
        let acctoken = localStorage.getItem("access");
        const decodedAccess = jwt.decode(acctoken);
        console.log(decodedAccess);
        setUser(decodedAccess)
    }, [])
  
    useEffect(() => {
        if (resources){
         setPets( resources)
        }
      }, [resources,pets])
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        console.log({
            type: data.get('type'),
            price: data.get('price'),
            description: data.get('description'),
            picture: imageurl,
            
        });
        const newPet={
            
            'type':data.get('type'),
            'picture':imageurl,
            'description':data.get('description'),
            'price':data.get('price'),
            'name_pet':data.get('name'),
            'adopt':'false',
            'user_id':user.user_id,
        }
        createResource(newPet)
        handleClose()
    };
    const [open, setOpen] = useState(false);
    const handleOpen = () =>{
        if(true){
            setOpen(true);
        }
        else{
            alert('please login first')
        }
    } 
    const handleClose = () => setOpen(false);
    
    return (
        <div className='' >
        <Nav />
        
        <div className='m-auto align-middle mt-52 w-72'>
        <Button  onClick={handleOpen}>You Have an offer??  add it!!</Button>
        {user?<p>{user.username}</p>:<p>noooooooooo</p>}
            <PetsForm open={open} handleClose={handleClose} handleInputChange={handleInputChange} handleSubmit={handleSubmit}
            />
        </div>
        <div >
        
                       {pets.map((item)=>{
                           return (
                               <Container className=''>
                <Card sx={{ maxWidth: 1000 }} className='p-5 my-10 bg-gray-200 rounded-lg' >
                    <div>
                    <CardHeader
                    avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        
                        {item.user.user_name[0]+item.user.user_name[1]}
                    </Avatar>
                    }
                    
                    title={item.user.first_name +' '+ item.user.last_name}
                    subheader={item.published}
                    />
                        
                    </div>
                    <div className='flex'>

                        <CardMedia
                        component="img"
                        height="194"
                        image={item.picture}
                        alt="Paella dish"
                        className='w-72'
                        
                        />
                        <div className=''>
                        <CardContent>
                            <Typography className='text-xl font-semibold' >
                            name: {item.name_pet}<br/>
                            type: {item.type}
                            {item.price==0? <p>for adoption !!</p>:<p>Price: {item.price}</p>}
                            </Typography>
                        </CardContent>
                    
                        <CardContent>
                            <Typography  className='font-medium text-l'>
                                {item.description}
                            </Typography>
                        
                        </CardContent>

                            
                        </div>
                        <div>
                            {user&&user.user_id==item.user.id? <Button onClick={()=>deleteResource(item.id)} >Delete</Button>:<p></p>}
                        
                        
                            
                        </div>
                       
                        
                    </div>
                
                </Card> 
                </Container>       
               )
           })}
        </div>
           
   
    </div>
  )
}
