import React from "react";

const Category = () => {
  return (
    <div>
      <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
          Shop Jewellery By Category
        </h1>
        <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
          Browse through your favourite categories. We've got them all!
        </p>
      </div>

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-4 mx-auto">
          <div class="flex flex-wrap -m-4">
            {/* <div class="lg:w-1/5 md:w-1/2 p-4 w-full">
              <a class="block relative h-75 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block"
                  src="https://staticimg.titan.co.in/Tanishq/Banners/home/ShopByCategory/GoldCoin.webp"
                />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Gold Coins
                </h3>
        
              </div>
            </div> */}
            <div class="lg:w-1/5 md:w-1/2 p-4 w-full">
              <a class="block relative h-75 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block"
                  src="https://staticimg.titan.co.in/Tanishq/Banners/home/ShopByCategory/earrings-new.webp"
                />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Earrings
                </h3>
              </div>
            </div>
            <div class="lg:w-1/5 md:w-1/2 p-4 w-full">
              <a class="block relative h-75 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block"
                  src="https://staticimg.titan.co.in/Tanishq/Banners/home/ShopByCategory/Pendant.webp"
                />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Pendants
                </h3>
              </div>
            </div>
            <div class="lg:w-1/5 md:w-1/2 p-4 w-full">
              <a class="block relative h-75 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block"
                  src="https://staticimg.titan.co.in/Tanishq/Banners/home/ShopByCategory/pendant-set-new.webp"
                />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Pendant Sets
                </h3>
              </div>
            </div>
            <div class="lg:w-1/5 md:w-1/2 p-4 w-full">
              <a class="block relative h-75 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block"
                  src="https://staticimg.titan.co.in/Tanishq/Banners/home/ShopByCategory/Ring.webp"
                />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Finger Rings
                </h3>
              </div>
            </div>
            {/* <div class="lg:w-1/5 md:w-1/2 p-4 w-full">
              <a class="block relative h-75 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block"
                  src="https://staticimg.titan.co.in/Tanishq/Banners/home/ShopByCategory/mangalsutras-new.webp"
                />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Mangalsutras
                </h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">
                  Shooting Stars
                </h2>
                <p class="mt-1">$21.15</p>
              </div>
            </div> */}
            <div class="lg:w-1/5 md:w-1/2 p-4 w-full">
              <a class="block relative h-75 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block"
                  src="https://staticimg.titan.co.in/Tanishq/Banners/home/ShopByCategory/Neckwear.webp"
                />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Neckwear
                </h3>
              </div>
            </div>
            <div class="lg:w-1/5 md:w-1/2 p-4 w-full">
              <a class="block relative h-75 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block"
                  src="https://staticimg.titan.co.in/Tanishq/Banners/home/ShopByCategory/CoupleRing.webp"
                />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Engagement Rings
                </h3>
              </div>
            </div>
            <div class="lg:w-1/5 md:w-1/2 p-4 w-full">
              <a class="block relative h-75 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block"
                  src="https://staticimg.titan.co.in/Tanishq/Banners/home/ShopByCategory/Chain.webp"
                />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Chains
                </h3>
              </div>
            </div>
            <div class="lg:w-1/5 md:w-1/2 p-4 w-full">
              <a class="block relative h-75 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block"
                  src="https://staticimg.titan.co.in/Tanishq/Banners/home/ShopByCategory/Bangle.webp"
                />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Bangles
                </h3>
              </div>
            </div>
            <div class="lg:w-1/5 md:w-1/2 p-4 w-full">
              <a class="block relative h-75 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block"
                  src="https://staticimg.titan.co.in/Tanishq/Banners/home/ShopByCategory/bracelets-new.webp"
                />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  bracelets
                </h3>
              </div>
            </div>
            <div class="lg:w-1/5 md:w-1/2 p-4 w-full">
              <a class="block relative h-75 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block"
                  src="https://staticimg.titan.co.in/Tanishq/Banners/home/ShopByCategory/nosepins-new.webp"
                />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Nose Pins
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Category;
