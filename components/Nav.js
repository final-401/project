import React from 'react'
import Logo from "../assest/logo.png";
import Image from "next/image";
import jwt from 'jsonwebtoken';
import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/auth'
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));
export default function NavFinal() {
  const { logout } = useAuth();

  const [user, setUser] = useState([])
  useEffect(() => {
    const url = 'http://127.0.0.1:8000/api/v1/pet/'
    let acctoken = localStorage.getItem("access");
    const decodedAccess = jwt.decode(acctoken);
    console.log(decodedAccess);
    setUser(decodedAccess)
  }, [])



  return (

    <div className="fixed top-0 z-10 w-full mx-auto rounded xl:container max-width:1280px bg-gradient-to-tr from-green-400 to-green-800">
      <nav className="container px-6 py-3 mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {/*Logo*/}
              <a href="/" className="flex items-center">
                <div className="w-24 h-24 mr-3 -ml-4">
                  <Image src={Logo} alt="PetsCare" className="w-full h-full mr-2" />
                </div>
                <span className="text-xl font-bold text-gray-800 md:text-2xl hover:text-gray-700">Pets Care</span>
              </a>

              <div className="hidden w-32 px-4 py-3 mx-10 -ml-5 md:block">

              </div>

            </div>
          </div>


          {/*Icons*/}
          <div className="flex items-center justify-center">
            {/* <button
              className="items-center justify-center w-10 h-10 mr-2 font-normal bg-white rounded-full shadow-lg outline-none text-lightBlue-400 align-center focus:outline-none"
              type="button"
            >
              <a href="https://github.com/pets-care">
                <i className="fab fa-twitter"></i>
              </a>
            </button>
            <button
              className="items-center justify-center w-10 h-10 mr-2 font-normal bg-white rounded-full shadow-lg outline-none text-lightBlue-600 align-center focus:outline-none"
              type="button"
            >
              <a href="https://github.com/pets-care">
                <i className="fab fa-facebook-square"></i>
              </a>
            </button>
            <button
              className="items-center justify-center w-10 h-10 mr-2 font-normal bg-white rounded-full shadow-lg outline-none text-blueGray-800 align-center focus:outline-none"
              type="button"
            >
              <a href="https://github.com/pets-care">
                <i className="fab fa-github"></i>
              </a>
            </button> */}
          </div>

          <div className="items-center md:flex" className="isOpen ? 'block' : 'hidden'">
            <div className="flex flex-col mt-2 md:flex-row md:mt-0 md:mx-1">
              {/*Buttons*/}
              <div className="flex items-center -mx-1 md:mx-0">
                {!user ? <a className="block w-1/2 px-3 py-2 mx-1 text-sm font-medium leading-5 text-center text-white bg-gray-500 rounded hover:bg-blue-600 md:mx-2 md:w-auto" href="SignIn">Log in</a> : <p></p>}
                {!user ? <a className="block w-1/2 px-3 py-2 mx-1 text-sm font-medium leading-5 text-center text-white bg-gray-500 rounded hover:bg-blue-600 md:mx-2 md:w-auto" href="SignUp">Sign up</a> : <p></p>}
                {user ? <a className="block w-1/2 px-3 py-2 mx-1 text-sm font-medium leading-5 text-center text-white bg-gray-500 rounded hover:bg-blue-600 md:mx-2 md:w-auto" onClick={logout} href="/">Logout</a> : <p></p>}




                {/*shopping cart */}
                <a className="block w-1/2 px-3 py-2 mx-1 text-sm font-medium leading-5 text-center text-white bg-gray-500 rounded hover:bg-blue-600 md:mx-2 md:w-auto" href="/cart">
                  <i className="fas fa-shopping-cart"></i>
                  <span className="ml-1">Cart</span>
                </a>



                {/*user avatar*/}
                <div className="relative w-16 h-12 -mb-2">
                  <div className="table w-full h-full overflow-hidden text-center rounded-full shadow-inner cursor-pointer group bg-purple">
                    {user&&<StyledBadge
                      overlap="circular"
                      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                      variant="dot"
                    >
                      <Avatar alt="Saadoun Dhirat" src={user.picture} />
                    </StyledBadge>}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        
        <div className="flex items-center justify-center -mt-20">
          <div className="py-3 mx-auto mt-3 overflow-y-auto font-medium whitespace-no-wrap scroll-hidden">
            <a className="mx-4 leading-5 text-gray-700 text-md hover:text-blue-600 hover:underline md:my-0" href="/">Home</a>
            <a className="mx-4 leading-5 text-gray-700 text-md hover:text-blue-600 hover:underline md:my-0" href="/Supplies">Supplies</a>
            <a className="mx-4 leading-5 text-gray-700 text-md hover:text-blue-600 hover:underline md:my-0" href="/buy">Buy</a>
            <a className="mx-4 leading-5 text-gray-700 text-md hover:text-blue-600 hover:underline md:my-0" href="/Veterinary">Clinic</a>
            <a className="mx-4 leading-5 text-gray-700 text-md hover:text-blue-600 hover:underline md:my-0" href="/AboutUs">About Us</a>
          </div>
        </div>


      </nav>
    </div>
  )
}
