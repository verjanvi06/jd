import React from "react";

const ForYou = () => {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap w-full mb-20">
            <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Just For You!
              </h1>
            </div>
            <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Our latest releases, just for you!
            </p>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="xl:w-1/3 md:w-1/2 p-3">
              <div class="bg-gray-100 p-6 rounded-lg">
                <img
                  class="h-72 rounded w-full object-cover object-center mb-6"
                  src="https://staticimg.titan.co.in/Tanishq/Banners/home/newForYou/sparkling-avenues.jpg"
                  alt="content"
                />
                <h3 class="tracking-widest text-pink-500 text-xl font-medium title-font">
                  Sparkling-Avenues
                </h3>
                <a class="text-pink-500 inline-flex items-center md:mb-2 lg:mb-0">
                  More
                  <svg
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-3">
              <div class="bg-gray-100 p-6 rounded-lg">
                <img
                  class="h-72 rounded w-full object-cover object-center mb-6"
                  src="https://staticimg.titan.co.in/Tanishq/Banners/home/newForYou/pretty-in-pink.jpg"
                  alt="content"
                />
                <h3 class="tracking-widest text-pink-500 text-xl font-medium title-font">
                  Preety in Pink
                </h3>
                <a class="text-pink-500 inline-flex items-center md:mb-2 lg:mb-0">
                  More
                  <svg
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-3">
              <div class="bg-gray-100 p-6 rounded-lg">
                <img
                  class="h-72 rounded w-full object-cover object-center mb-6"
                  src="https://staticimg.titan.co.in/Tanishq/Banners/home/newForYou/dotsanddashes.jpg"
                  alt="content"
                />
                <h3 class="tracking-widest text-pink-500 text-xl font-medium title-font">
                  Dots and Dashes
                </h3>
                <a class="text-pink-500 inline-flex items-center md:mb-2 lg:mb-0">
                  More
                  <svg
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForYou;
