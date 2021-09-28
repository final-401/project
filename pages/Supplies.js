import React, { useState, useEffect } from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import axios from "axios";
import useResourceAddToCart from "../hooks/useResourceAddToCart";
import useResourceAddCart from "../hooks/useResourceAddCart";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useAuth } from "../contexts/auth";
import jwt from "jsonwebtoken";

export default function Supplies() {
  const { createResource } = useResourceAddToCart();
  const { resources,createResourceCart } = useResourceAddCart();
  const [supplies, setSupplies] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState([]);
  const [order, setOrder] = useState([]);


  useEffect(() => {
    let acctoken = localStorage.getItem("access");
    const decodedAccess = jwt.decode(acctoken);
    console.log(decodedAccess);
    setUser(decodedAccess);
    console.log(resources);
  }, [resources]);


  // useEffect(() => {
  //   if (resources){
  //     setOrder( resources)
  //     console.log(order);
  //   }
  // }, [resources,order])

  useEffect(async () => {
    const url = "http://127.0.0.1:8000/api/v1/supplies/";
    try {
      const response = await axios.get(url);
      // setSupplies(previousState =>...pervious)
      const data = response.data;
      setSupplies(data);
      //   console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const suppliesData = [
    {
      _id: 1,
      name: "Royal Canin ® Maxi Adult 10KG",
      picture:
        "https://www.petbarn.com.au/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/2/122853_royal_canin_maxi_lightweightcare_1_2.jpg",
      discription:
        "Maintans Ideal Weight Helps maintain neutered adult dogs at ideal weight through a moderate calorie intake Suitable For: Neutered adult dogs Meat and animal derivatives.",
      price: "150 JD",
      defaultValue: 4.5,
      precision: 0.5,
    },
    {
      _id: 2,
      name: "Bewi Cat® Salmon (6/pack)",
      picture:
        "https://cdn.shopify.com/s/files/1/0566/1940/1388/products/88.jpg?v=1620221469",
      discription:
        "BEWI Cat® meatinis Wild game; Moist meals has the advantage that the cat also takes into water with the food. For this reason prefer many cats one mixture of dry and moist food.",
      price: 50,
      defaultValue: 3.5,
      precision: 0.5,
    },
    {
      _id: 3,
      name: "Royal Canin ® Urinary Care 4kg",
      picture:
        "https://cdn.shopify.com/s/files/1/0480/8251/8177/products/royal-canin-urinary-care-main_700x700.png?v=1628107118",
      discription:
        "Hunger regulation After neutering, certain cats are less able to regulate their food intake. APPETITE CONTROL STERILISED contains a high level* of specific fibres which help to satisfy the appetite of cats.",
      price: 75,
      defaultValue: 3.5,
      precision: 0.5,
    },
    {
      _id: 3,
      name: "Catit Vesper Rocket",
      picture:
        "https://www.petsjo.com/content/images/thumbs/0005102_catit-vesper-rocket_557.jpeg",
      discription:
        "Cute cat toy space rocket ship available in blue and grey,made of high quality fabric and mesh sides ensure optimal airflow,includes soft padded cushion cat bed.",
      price: 75,
      defaultValue: 5.5,
      precision: 0.5,
    },
    {
      _id: 3,
      name: "Treat Ball Dog",
      picture:
        "https://m.media-amazon.com/images/I/71fhMmONcLL._AC_SL1500_.jpg",
      discription:
        "Your furry pal gets smarter as they play with this interactive dog toy & dog puzzle dog ball, learning how to roll the dog ball to get healthy dog treats or kibble to fall out",
      price: 75,
      defaultValue: 2.5,
      precision: 0.5,
    },
    {
      _id: 3,
      name: "Kong ® Air Dog",
      picture:
        "https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/419796-center-3",
      discription:
        "The KONG Tails are great for indoor and outdoor interactive play. Each toy is made with our KONG Classic rubber and has a squeaker to entice and entertain your dog",
      price: 75,
      defaultValue: 3.5,
      precision: 0.5,
    },
  ];

  const addToCart = (item) => {
    let orderExist=false
    let cartNum
  
    if (user) {
      const cartData = {
        owner: user.user_id,
        ref_code: user.username + " " + user.user_id,
      };
    let count 


    resources.map((item)=>{
        count=parseInt(item.id)
        count+=1

        if (item.owner == user.user_id){
          console.log(item.id);
          cartNum=item.id
          orderExist =true
          
        }
      })
      const objToAddINCart={
          "product_id":item.id,
          "order": cartNum
      }
      if (!orderExist){
        createResourceCart(cartData).then((response) => {
        if (cartNum){
          console.log(count);
          createResource(objToAddINCart)
        }
        else{
          console.log("else" + count);

          const objToAddINCart={
            "product_id":item.id,
            "order": count
        }
        createResource(objToAddINCart)

        }
        
      })
     

    }
    else{
      createResource(objToAddINCart)
    }

    }
    localStorage.setItem("cartNum",cartNum);
  };

  return (
    <div className="">
      <div className="grid grid-cols-3">
        {supplies.map((item) => {
          return (
            <Card
              sx={{ maxWidth: 320, maxHeight: 540 }}
              className="mx-10 my-10 "
            >
              <CardActionArea>
                <CardMedia
                  name="picture"
                  component="img"
                  image={item.picture}
                  style={{ height: "12rem", width: "8rem", marginLeft: "5rem" }}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    name="name"
                  >
                    {item.product_name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    style={{ width: "18.5rem", height: "7rem" }}
                    name="discription"
                  >
                    {item.description}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    name="price"
                  >
                    {item.price}
                  </Typography>
                  <Stack spacing={1}>
                    <Rating
                      name="half-rating-read"
                      defaultValue={item.defaultValue}
                      precision={item.precision}
                      readOnly
                    />
                  </Stack>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  onClick={() => addToCart(item)}
                  size="small"
                  color="primary"
                >
                  Add To Cart
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
