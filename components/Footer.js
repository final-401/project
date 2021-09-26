import React from "react";

export default function Footer() {
  return (
    <footer className="relative w-3/4 pt-8 pb-6 mx-auto rounded-xl bg-blueGray-200">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full px-4 lg:w-6/12">
            <h4 className="text-3xl fonat-semibold text-blueGray-700">
              Let's keep in touch!
            </h4>
            <h5 className="mt-0 mb-2 text-lg text-blueGray-600">
              Find us on any of these platforms, we respond 1-2 business days.
            </h5>
            <div className="mt-6 mb-6 lg:mb-0">
              <button
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
                className="items-center justify-center w-10 h-10 mr-2 font-normal text-pink-400 bg-white rounded-full shadow-lg outline-none align-center focus:outline-none"
                type="button"
              >
                <a href="https://github.com/pets-care">
                  <i className="fab fa-dribbble"></i>
                </a>
              </button>
              <button
                className="items-center justify-center w-10 h-10 mr-2 font-normal bg-white rounded-full shadow-lg outline-none text-blueGray-800 align-center focus:outline-none"
                type="button"
              >
                <a href="https://github.com/pets-care">
                  <i className="fab fa-github"></i>
                </a>
              </button>
            </div>
          </div>
          <div className="w-full px-4 lg:w-6/12">
            <div className="flex flex-wrap mb-6 items-top">
              <div className="w-full px-4 ml-auto lg:w-4/12">
                <span className="block mb-2 text-sm font-semibold uppercase text-blueGray-500">
                  pages Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800"
                      href="/"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      className="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800"
                      href="/Supplies"
                    >
                      Supplies
                    </a>
                  </li>
                  <li>
                    <a
                      className="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800"
                      href="/buy"
                    >
                      Buy
                    </a>
                  </li>
                  <li>
                    <a
                      className="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800"
                      href="/Veterinary"
                    >
                    Veterinary
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full px-4 lg:w-4/12">
                <span className="block mb-2 text-sm font-semibold uppercase text-blueGray-500">
                  Other Resources
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800"
                      href="#"
                    >
                      Cart
                    </a>
                  </li>
                  <li>
                    <a
                      className="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800"
                      href="https://github.com/pets-care"
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      className="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800"
                      href="https://github.com/pets-care"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      className="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800"
                      href="#"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="w-full px-4 mx-auto text-center md:w-4/12">
            <div className="py-1 text-sm font-semibold text-blueGray-500">
              Copyright © <span id="get-current-year">2021</span>
              <a
                href="#"
                className="text-blueGray-500 hover:text-gray-800"
                target="_blank"
              >
                {" "}
                Pets Team.{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
