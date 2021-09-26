import React from "react";
import Vetform from "../components/Vetform";
export default function Veterinary() {

    return (
<>
        <div>

            <body class="flex justify-center items-center bg-blue-lightest space-x-16">
                <div id="app" class="bg-white w-128 h-60 rounded shadow-md flex card text-grey-darkest">
                    <img class="w-1/2 h-full rounded-l-sm" src="https://www.killarneycat.com/wp-content/uploads/sites/19/2017/03/killarney-cat-clinic_indoor-cat-vaccination.jpeg" alt="Room Image" />
                    <div class="w-full flex flex-col">
                        <div class="p-4 pb-0 flex-1">
                            {/* <h3 class="font-light mb-1 text-5xl-grey-darkest">Treaty pets clinic</h3> */}
                            <span class="text-2xl text-grey-darkest">Treaty pets clinic</span>
                            <h3 class="font-light mb-1 text-5xl-grey-darkest">Location : Amman</h3>
                            <h3 class="font-light mb-1 text-5xl-grey-darkest">Working Hours : 10 AM - 10 PM</h3>
                            <h3 class="font-light mb-1 text-5xl-grey-darkest">email : treatsclinic@gmail.com</h3>
                            <h3 class="font-light mb-1 text-5xl-grey-darkest">Telephone : +962798999999</h3>
                            {/* <span class="text-5xl text-grey-darkest">20.00 JD</span> */}
                        </div>
                        {/* <div class="bg-grey-lighter p-3 flex items-center justify-between transition hover:bg-grey-light">
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Book Now
                            </button>

                        </div> */}
                    </div>
                </div>

                <div id="app" class="bg-white w-128 h-60 rounded shadow-md flex card text-grey-darkest">
                    <img class="w-1/2 h-full rounded-l-sm" src="https://uploads.metamorphosis.com/wp-content/uploads/sites/2/2020/04/shutterstock_1103924993-2-2.jpg" alt="Room Image" />
                    <div class="w-full flex flex-col">
                    <div class="p-4 pb-0 flex-1">
                            {/* <h3 class="font-light mb-1 text-5xl-grey-darkest">Treaty pets clinic</h3> */}
                            <span class="text-2xl text-grey-darkest">Treaty pets clinic</span>
                            <h3 class="font-light mb-1 text-5xl-grey-darkest">Location : Amman</h3>
                            <h3 class="font-light mb-1 text-5xl-grey-darkest">Working Hours : 10 AM - 10 PM</h3>
                            <h3 class="font-light mb-1 text-5xl-grey-darkest">email : treatsclinic@gmail.com</h3>
                            <h3 class="font-light mb-1 text-5xl-grey-darkest">Telephone : +962798999999</h3>
                            {/* <span class="text-5xl text-grey-darkest">20.00 JD</span> */}
                        </div>
                        {/* <div class="bg-grey-lighter p-3 flex items-center justify-between transition hover:bg-grey-light">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Book Now
                            </button>
                        </div> */}
                    </div>
                </div>
            </body>
        </div>
        
        <div>
                    
            <Vetform/>
        </div>
            </>
    )
}