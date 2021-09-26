
import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import Container from '@mui/material/Container';
import Navbar from "../components/Navbar";
import PetsForm from '../components/PetsForm';
import Button from '@mui/material/Button';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
export default function Home() {
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
    let date = new Date()
    let day = date.getDate();
    let month = date.getMonth()+1;
    let year = date.getFullYear();  




    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        console.log({
          type: data.get('type'),
          price: data.get('price'),
          description: data.get('description'),
          picture: data.get('picture'),
          
        });
        const newPet={
            _id:7,
            type:data.get('type'),
            picture:'https://vetstreet.brightspotcdn.com/dims4/default/f5365df/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2Ff3%2F39%2F611aa7c744c3b01b1a7f663d6cea%2FMunchkin-AP-YL20CX-645sm3614.jpg',
            description:data.get('description'),
            price:data.get('price'),
            published:`${day}/${month}/${year}`,
            owner_id:7
            
        }
        setPets([...pets,newPet])
        handleClose()
      };
    
    const [pets, setPets] = useState([
        {
            _id:1,
            type:'dog',
            picture:'data:image/jpeg;base64,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',
            description:' 23 years old dog for sale, very healthy and kind, has a passport and a medical recorde very funny dog',
            price:150,
            published:`${day}/${month}/${year}`,
            owner_id:3
            
            
            
        }
        ,{
            _id:2,
            type:'cat',
            picture:'https://vetstreet.brightspotcdn.com/dims4/default/f5365df/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2Ff3%2F39%2F611aa7c744c3b01b1a7f663d6cea%2FMunchkin-AP-YL20CX-645sm3614.jpg',
            description:'very funny cat',
            price:50,
            published:'27/9/2021',
            owner_id:2
            
        }
        ,{
            _id:3,
            type:'cat',
            picture:'https://imagesvc.meredithcorp.io/v3/jumpstartpure/image?url=https://cf-images.us-east-1.prod.boltdns.net/v1/static/6157254766001/0f4c0960-acc4-4a54-9716-0107259028e9/14391ec7-ffa3-4d14-bc98-b9330f73b130/1280x720/match/image.jpg&w=1280&h=720&q=90&c=cc',
            description:'very hot cat',
            price:75,
            published:'28/9/2021',
            owner_id:6
            
        }
        ,{
            _id:3,
            type:'cat',
            picture:'https://imagesvc.meredithcorp.io/v3/jumpstartpure/image?url=https://cf-images.us-east-1.prod.boltdns.net/v1/static/6157254766001/0f4c0960-acc4-4a54-9716-0107259028e9/14391ec7-ffa3-4d14-bc98-b9330f73b130/1280x720/match/image.jpg&w=1280&h=720&q=90&c=cc',
            description:'very hot cat',
            price:0,
            published:'28/9/2021',
            owner_id:6
            
        }
    ])
  
  return (
    <div className='' >
        <Navbar />
        <div className='m-auto align-middle w-72'>
        <Button  onClick={handleOpen}>You Have an offer??  add it!!</Button>
            <PetsForm open={open} handleClose={handleClose} handleSubmit={handleSubmit}
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
                        {item.owner_id}
                    </Avatar>
                    }
                    
                    title={item.type}
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
                       
                        
                    </div>
                
                </Card> 
                </Container>       
               )
           })}
        </div>
           
   
    </div>
  )
}
