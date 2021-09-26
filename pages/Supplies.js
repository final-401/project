import React from "react";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function Supplies() {

  return (
    <div>

      <div class="flex mb-4">
        <div class="max-w-sm rounded overflow-hidden shadow-lg mx-auto my-8" style ={{height :'43.5rem',width : '25rem'}}>
          <img class="w-full" src="https://www.petbarn.com.au/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/2/122853_royal_canin_maxi_lightweightcare_1_2.jpg" alt="Sunset in the mountains" style ={{height :'24rem',width : '20rem'}} />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Royal Canin ® Maxi Adult 10KG</div>
            <p class="text-gray-600 text-base" style ={{height:'8rem'}}>
            Maintans Ideal Weight Helps maintain neutered adult dogs at ideal weight through a moderate calorie intake Suitable For: Neutered adult dogs Meat and animal derivatives.</p>
          </div>
          <div class="relative bg-gray-200 p-4">

            <Stack spacing={1}>
              {/* <Rating name="half-rating" defaultValue={2.5} precision={0.5} /> */}
              <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
            </Stack>
            <h1 class="absolute bottom-5 right-10 h-8 w-8 text-lg">8.00JD</h1>

            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-6">
              Add To Cart
            </button>
          </div>
        </div>

        <div class="max-w-sm rounded overflow-hidden shadow-lg mx-auto my-8" style ={{height :'43.5rem',width : '25rem'}}>
          <img class="w-full" src="https://cdn.shopify.com/s/files/1/0566/1940/1388/products/88.jpg?v=1620221469" alt="Sunset in the mountains" style ={{height :'24rem',width : '20rem'}}/>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Bewi Cat® Salmon (6/pack)</div>
            <p class="text-gray-600 text-base" style ={{height:'8rem'}}>
            BEWI Cat® meatinis Wild game; Moist meals has the advantage that the cat also takes into water with the food. For this reason prefer many cats one mixture of dry and moist food.</p>
          </div>
          <div class="relative bg-gray-200 p-4">

            <Stack spacing={1}>
              <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
            </Stack>
            <h1 class="absolute bottom-5 right-10 h-8 w-8 text-lg">8.00JD</h1>

            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-6">
              Add To Cart
            </button>
          </div>
        </div>

        <div class="max-w-sm rounded overflow-hidden shadow-lg mx-auto my-8">
          <img class="w-full" src="https://cdn.shopify.com/s/files/1/0480/8251/8177/products/royal-canin-urinary-care-main_700x700.png?v=1628107118" alt="Sunset in the mountains" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Royal Canin ® Urinary Care 4kg</div>
            <p class="text-gray-600 text-base" style ={{height:'8rem'}}>
            Hunger regulation After neutering, certain cats are less able to regulate their food intake. APPETITE CONTROL STERILISED contains a high level* of specific fibres which help to satisfy the appetite of cats, reducing the feeling of hunger.            </p>
          </div>
          <div class="relative bg-gray-200 p-4">

            <Stack spacing={1}>
              <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
            </Stack>
            <h1 class="absolute bottom-5 right-10 h-8 w-8 text-lg">8.00JD</h1>

            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-6">
              Add To Cart
            </button>
          </div>
        </div>

      </div>
      {/* ////////////////////////////////////////////////////////////////////////////*/}
      <div class="flex mb-4">
                <div class="max-w-sm rounded overflow-hidden shadow-lg mx-auto my-8">
          <img class="w-full" src="https://www.petsjo.com/content/images/thumbs/0005102_catit-vesper-rocket_557.jpeg" alt="Sunset in the mountains"style ={{height :'25.75rem',width : '20rem'}} />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Catit Vesper Rocket</div>
            <p class="text-gray-600 text-base">
            Cute cat toy space rocket ship available in blue and grey,made of high quality fabric and mesh sides ensure optimal airflow,includes soft padded cushion cat bed.</p>
          </div>
          <div class="relative bg-gray-200 p-4">

            <Stack spacing={1}>
              <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
            </Stack>
            <h1 class="absolute bottom-5 right-10 h-8 w-8 text-lg">8.00JD</h1>

            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-6">
              Add To Cart
            </button>
          </div>
        </div>

        <div class="max-w-sm rounded overflow-hidden shadow-lg mx-auto my-8">
          <img class="w-full" src="https://m.media-amazon.com/images/I/71fhMmONcLL._AC_SL1500_.jpg" alt="Sunset in the mountains" style ={{height :'25.75rem',width : '20rem'}}/>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Treat Ball Dog</div>
            <p class="text-gray-600 text-base">
            Your furry pal gets smarter as they play with this interactive dog toy & dog puzzle dog ball, learning how to roll the dog ball to get healthy dog treats or kibble to fall out
            </p>
          </div>
          <div class="relative bg-gray-200 p-4">

            <Stack spacing={1}>
              <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
            </Stack>
            <h1 class="absolute bottom-5 right-10 h-8 w-8 text-lg">8.00JD</h1>

            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-6">
              Add To Cart
            </button>
          </div>
        </div>

        <div class="max-w-sm rounded overflow-hidden shadow-lg mx-auto my-8" >
          <img class="w-full" src="https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/419796-center-3" alt="Sunset in the mountains" style ={{height :'24rem',width : '20rem'}}/>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Kong® Squeaker Fetch Stick with/Rope Medium</div>
            <p class="text-gray-600 text-base">
            The KONG Tails are great for indoor and outdoor interactive play. Each toy is made with our KONG Classic rubber and has a squeaker to entice and entertain your dog .</p>
          </div>
          <div class="relative bg-gray-200 p-4">

            <Stack spacing={1}>
              <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
            </Stack>
            <h1 class="absolute bottom-5 right-10 h-8 w-8 text-lg">8.00JD</h1>

            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-6">
              Add To Cart
            </button>
          </div>
        </div>

      </div>

    </div>

  )
}