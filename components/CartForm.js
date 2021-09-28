import React, { useState, useEffect } from "react";
import useResourceAddCart from "../hooks/useResourceAddCart";
import jwt from "jsonwebtoken";
import axios from "axios";



export default function CartForm() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totPrice, settotPrice] = useState(0);
  const [user, setUser] = useState([]);
  const [cartNum, setcartNum] = useState(0);
  const [cartData ,setcartData]=useState([])

  const { resources ,deleteResource} = useResourceAddCart();


  useEffect(() => {
    let acctoken = localStorage.getItem("access");
    const decodedAccess = jwt.decode(acctoken);
    console.log(decodedAccess);
    setUser(decodedAccess);

  }, []);


  useEffect(() => {
    let numCart = 0
    if (user) {
      if (resources) {
        resources.map((item) => {
          console.log(item.owner, "fyghuj" + user.user_id);
          if (item.owner == user.user_id) {
            console.log(item.id);
            numCart = item.id
          }
        })

      }
      setcartNum(numCart)
      console.log(numCart);
    };

  }, [resources])



  useEffect(async () => {
    if (user) {
      if (cartNum) {
        const url = `http://127.0.0.1:8000/api/v1/cart/${cartNum}/`
        try {
          const response = await axios.get(url);
          console.log('this is respond', response.data.order)
          setcartData(response.data.order)

        } catch (error) {
          console.log(error);
        }
      }
    }



  }, [resources,cartNum])

  

  const suppliesData = [
    {
      _id: 1,
      name: "Royal Canin ® Maxi Adult 10KG",
      picture:
        "https://www.petbarn.com.au/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/2/122853_royal_canin_maxi_lightweightcare_1_2.jpg",
      discription:
        "Maintans Ideal Weight Helps maintain neutered adult dogs at ideal weight through a moderate calorie intake Suitable For: Neutered adult dogs Meat and animal derivatives.",
      price: "150",
      defaultValue: 4.5,
      precision: 0.5,
      quantity: 1,
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
      quantity: 1,
    },
    {
      _id: 15,
      name: "Royal Canin ® Urinary Care 4kg",
      picture:
        "https://cdn.shopify.com/s/files/1/0480/8251/8177/products/royal-canin-urinary-care-main_700x700.png?v=1628107118",
      discription:
        "Hunger regulation After neutering, certain cats are less able to regulate their food intake. APPETITE CONTROL STERILISED contains a high level* of specific fibres which help to satisfy the appetite of cats.",
      price: 75,
      defaultValue: 3.5,
      precision: 0.5,
      quantity: 1,
    },
    {
      _id: 10,
      name: "Catit Vesper Rocket",
      picture:
        "https://www.petsjo.com/content/images/thumbs/0005102_catit-vesper-rocket_557.jpeg",
      discription:
        "Cute cat toy space rocket ship available in blue and grey,made of high quality fabric and mesh sides ensure optimal airflow,includes soft padded cushion cat bed.",
      price: 75,
      defaultValue: 5.5,
      precision: 0.5,
      quantity: 1,
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
      quantity: 1,
    },
    {
      _id: 5,
      name: "Kong ® Air Dog",
      picture:
        "https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/419796-center-3",
      discription:
        "The KONG Tails are great for indoor and outdoor interactive play. Each toy is made with our KONG Classic rubber and has a squeaker to entice and entertain your dog",
      price: 75,
      defaultValue: 3.5,
      precision: 0.5,
      quantity: 1,
    },
  ];

  const [cartItems, setCartItems] = useState(suppliesData);

  const incrementItem = (index) => {
    const newCartItems = [...cartItems];
    newCartItems[index].quantity++;
    setCartItems(newCartItems);
  };

  const decrementItem = (index) => {
    const newCartItems = [...cartItems];
    if (newCartItems[index].quantity <= 1) {
      newCartItems[index].quantity = 1;
      setCartItems(newCartItems);
    } else {
      newCartItems[index].quantity--;
      setCartItems(newCartItems);
    }
  };

  const itemsCount = (e) => {
    const newValue = e.target.value;
    suppliesData[id].quantity = newValue;
  };

  const totalPriceHandler = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += item.quantity * item.price;
    });
    return totalPrice;
  };

  const totalPriceAfterShippingAndCode = (e) => {
    let result = totalPriceHandler() + 10  // for shipping
    const promoteCode = [
      ["1CxCpkBMpcbRjXNz", 10],
      ["X8XoKzMF8Ld7QRM7", 20],
      ["Caq4BT90ryL8Y2bN", 30],
    ];
    promoteCode.forEach((element, idx) => {
      if (element[0] == e) {
        result -= result * (element[1] / 100)
      }
    });

    settotPrice(result)
  };

  const totalPriceAfterShipping = () => {
    let val = totPrice
    if (val == 0) {
      val = totalPriceHandler() + 10
    }
    setTotalPrice(val)
  }


  const handleCheckout =(()=>{
    var ans = window.prompt("Confirm checkout Enter Yes: ");
    if ( ans== "yes"){
      cartData.map((item)=>{

        deleteResource(item.id)
        
      })
    }

  })
  

  


  

  return (
    <div className="">
      <div className="container mx-auto mt-10 rounded bg-blueGray-200">
        <div className="flex my-10 shadow-md">
          <div className="w-3/4 px-10 py-10 bg-white rounded">
            <div className="flex justify-between pb-8 border-b">
              <h1 className="text-2xl font-semibold">Shopping Cart</h1>
              <h2 className="text-2xl font-semibold">{`${suppliesData.length} - ITEMS`}</h2>
            </div>
            <div className="flex mt-10 mb-5">
              <h3 className="w-2/5 text-xs font-semibold text-gray-600 uppercase">
                Product Details
              </h3>
              <h3 className="w-1/5 text-xs font-semibold text-center text-gray-600 uppercase">
                Quantity
              </h3>
              <h3 className="w-1/5 text-xs font-semibold text-center text-gray-600 uppercase">
                Price
              </h3>
              <h3 className="w-1/5 text-xs font-semibold text-center text-gray-600 uppercase">
                Total
              </h3>
            </div>
            {/* Products */}
            {cartData?.map((supply, index) => (
              <div
                key={supply._id}
                className="flex items-center px-6 py-5 -mx-8 hover:bg-gray-100"
              >
                <div className="flex w-2/5">
                  <div className="w-20">
                    <img
                      className="h-24"
                      src={supply.product.picture}
                      alt={supply.product.name}
                    />
                  </div>
                  <div className="flex flex-col justify-between flex-grow ml-4">
                    <span className="text-sm font-bold">{supply.name}</span>
                    <span className="my-2 text-xs text-red-500">
                      {supply.product.description}
                    </span>
                    {/*remove button*/}
                    <button onClick={()=>deleteResource(supply.id)} class="bg-red-700 hover:bg-red-500 text-white py-2 w-24 rounded text-sm">
                      Remove
                    </button>
                  </div>
                </div>
                {/* item counters*/}
                <div className="flex justify-center w-1/5">
                  <svg
                    className="w-3 text-gray-600 fill-current"
                    viewBox="0 0 448 512"
                    onClick={() => {
                      decrementItem(index);
                    }}
                  >
                    <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>

                  <input
                    className="w-12 mx-4 border te xt-center"
                    type="text"
                    value={supply.product.quantity}
                  />

                  <svg
                    className="w-3 text-gray-600 fill-current"
                    viewBox="0 0 448 512"
                    onClick={() => {
                      incrementItem(index);
                    }}
                  >
                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>
                </div>
                <span className="w-1/5 text-sm font-semibold text-center">
                  {`${supply.product.price}$`}
                </span>
                <span className="w-1/5 text-sm font-semibold text-center">
                  {`${supply.product.price * supply.product.quantity}$`}
                </span>
              </div>
            ))}
            {/* End Of Products */}

            {/* Back to shipping */}

            <div class="w-full mx-auto">
              <div class="sm:grid grid-cols-4 gap-5 mx-auto px-16">
                <div class="col-start-1 col-end-3 my-2">
                  <a href="/Supplies">
                    <div class="h-full p-6 dark:bg-gray-800 bg-white hover:shadow-xl rounded border-b-4 border-red-500 shadow-md">
                      <h3 class=" mb-3 font-semibold inline-flex">
                        <svg
                          class="mr-2"
                          width="24"
                          height="30"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.02698 11.9929L5.26242 16.2426L6.67902 14.8308L4.85766 13.0033L22.9731 13.0012L22.9728 11.0012L4.85309 11.0033L6.6886 9.17398L5.27677 7.75739L1.02698 11.9929Z"
                            fill="currentColor"
                          />
                        </svg>
                        Continue Shopping
                      </h3>
                      <p class="text-xlg"> Best Product Meets Your Needs </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div id="summary" className="w-1/4 px-8 py-10">
            <h1 className="pb-8 text-2xl font-semibold border-b">
              Order Summary
            </h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="text-sm font-semibold uppercase">{`ITEMS -${cartData.length}`}</span>
              <span className="text-sm font-semibold">
                {`${totalPriceHandler()}$`}
              </span>
            </div>
            <div>
              <label className="inline-block mb-3 text-sm font-medium uppercase">
                Shipping
              </label>
              <select className="block w-full p-2 text-sm text-gray-600">
                <option>Standard shipping - $10.00</option>
              </select>
            </div>
            <div className="py-10">
              <label
                for="promo"
                className="inline-block mb-3 text-sm font-semibold uppercase"
              >
                Promo Code
              </label>

              <input
                type="text"
                id="promo"
                placeholder="Enter your code"
                className="w-full p-2 text-sm"
                name='calcPrice'
                onChange={(e) => totalPriceAfterShippingAndCode(e.target.value)}
              />
            </div>

            <button
              className="px-5 py-2 text-sm text-white uppercase bg-red-700 rounded hover:bg-red-500"
              onClick={totalPriceAfterShipping}
            >
              Apply
            </button>

            <div className="mt-8 border-t">
              <div className="flex justify-between py-6 text-sm font-semibold uppercase">
                <span>Total cost</span>
                <span>{`${totalPrice}$`}</span>
              </div>
              <button onClick={handleCheckout} className="w-full py-3 text-sm font-semibold text-white uppercase bg-red-700 rounded hover:bg-red-500">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
