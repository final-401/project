import React, { useState, useEffect } from "react";
import useResourceAddCart from "../hooks/useResourceAddCart";
import jwt from "jsonwebtoken";
import axios from "axios";
import { PayPalButton } from "react-paypal-button-v2";
import "animate.css"
import Swal from 'sweetalert2';
import { red } from "@mui/material/colors";


export default function CartForm() {

  const[amount,setAmount]=useState(0);
  const [afterDiscount,setafterDiscount]=useState(0)
  const [user, setUser] = useState([]);
  const [cartNum, setcartNum] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const { resources ,deleteResource} = useResourceAddCart();

  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    let acctoken = localStorage.getItem("access");
    const decodedAccess = jwt.decode(acctoken);
    console.log(decodedAccess);
    setUser(decodedAccess);

  }, []);


  useEffect(() => {
    const addPaypalScript = () => {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=Ac_sMqzKGQP3iZ5jND2UjVG3yuaLzj-0W3K925GEI1P0WPJl1ZLNplWYnH9tA7uMkDJBIh8ysG1OFtzK`;
      script.async = true;

      script.onload = () => setScriptLoaded(true);

      document.body.appendChild(script);
    };
    addPaypalScript();
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
        const url = `https://pets-api-v1.herokuapp.com/api/v1/cart/${cartNum}/`
        try {
          const response = await axios.get(url);

          console.log('this is respond', response.data.order)
          setCartItems(response.data.order)

        } catch (error) {
          console.log(error);
        }
      }
    }



  }, [resources,cartNum])



 // Note to Calculate Total and Save it In Ammout 
  useEffect(async ()=>{
    
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += item.product.quantity * item.product.price;
      
    });
    setAmount(totalPrice)
    setafterDiscount(totalPrice)

    console.log(totalPrice);
  },[cartItems,resources])






  


  const incrementItem = (index) => {
    const newCartItems = [...cartItems];
    newCartItems[index].product.quantity++;
    setCartItems(newCartItems);
  };

  const decrementItem = (index) => {
    const newCartItems = [...cartItems];
    if (newCartItems[index].product.quantity <= 1) {
      newCartItems[index].product.quantity = 1;
      setCartItems(newCartItems);
    } else {
      newCartItems[index].product.quantity--;
      setCartItems(newCartItems);
    }
  };


  var flag = false
  const totalPriceAfterShippingAndCode = (e) => {

    let result = amount   
    
    const promoteCode = [
      ["1CxCpkBMpcbRjXNz", 10],
      ["X8XoKzMF8Ld7QRM7", 20],
      ["Caq4BT90ryL8Y2bN", 30],
      ['Abdulha',95]


    ];

    promoteCode.forEach((element, idx) => {
      if (element[0] == e) {
        result -= result * (element[1] / 100)
        flag=true
      }
    });

    setafterDiscount(result)
  };


 const applyDiscount=()=>{
   console.log(afterDiscount);
   setAmount(afterDiscount)
 }


  const handleCheckout =(()=>{
    
    cartItems.map((item)=>{

      deleteResource(item.id)
      
    })
    

    Swal.fire({
      title: 'Thank you for your purchase from Us.',
      text:'Please let us know if we can do anything else for you!',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })

  })
  

  


  

  return (
    <div className="">
      <div className="container mx-auto mt-10 rounded bg-blueGray-200">
        <div className="flex my-10 shadow-md">
          <div className="w-3/4 px-10 py-10 bg-white rounded">
            <div className="flex justify-between pb-8 border-b">
              <h1 className="text-2xl font-semibold">Shopping Cart</h1>
              <h2 className="text-2xl font-semibold">{`${cartItems.length} - ITEMS`}</h2>
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
            {cartItems?.map((supply, index) => (
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
                    Value={supply.product.quantity}
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
              <span className="text-sm font-semibold uppercase">{`ITEMS -${cartItems.length}`}</span>
              <span className="text-sm font-semibold">
                {`${amount}$`}
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
              onClick={applyDiscount}
            >
              Apply
            </button>

            <div className="mt-8 border-t">
              <div className="flex justify-between py-6 text-sm font-semibold uppercase">
                <span>Total cost</span>
                {amount? <span>{`${amount+10}$`}</span>:<span>{`${amount}$`}</span>}
              </div>

              {scriptLoaded ? (
            <PayPalButton
              amount={amount +10 } 
              onSuccess={(details, data) => {
                //save the transaction
                handleCheckout();
                console.log(details);
              }}
            />
          ) : (
            <span>Loading...</span>
          )}

              {/* <button onClick={handleCheckout} className="w-full py-3 text-sm font-semibold text-white uppercase bg-red-700 rounded hover:bg-red-500">
                Checkout
              </button> */}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}




