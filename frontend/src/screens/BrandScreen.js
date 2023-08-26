export const BrandScreen = () => {
  return (
    <div className="bg-gray-100">
      <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0">
          <svg
            viewBox="0 0 88 88"
            className="w-full max-w-screen-xl text-indigo-100"
          >
            <circle fill="currentColor" cx="44" cy="44" r="15.5" />
            <circle
              fillOpacity="0.2"
              fill="currentColor"
              cx="44"
              cy="44"
              r="44"
            />
            <circle
              fillOpacity="0.2"
              fill="currentColor"
              cx="44"
              cy="44"
              r="37.5"
            />
            <circle
              fillOpacity="0.3"
              fill="currentColor"
              cx="44"
              cy="44"
              r="29.5"
            />
            <circle
              fillOpacity="0.3"
              fill="currentColor"
              cx="44"
              cy="44"
              r="22.5"
            />
          </svg>
        </div>
        <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand 1 */}

          <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
            <div className="p-5">
              <p className="mb-2 font-bold truncate">Kottakkal Ayurveda</p>
              <img src="https://www.ayurkart.com/cdn/shop/collections/kottakkal-arya-vaidya-sala_large.jpg?v=1639211933" />
            </div>
            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          </div>

          {/* Brand 2 */}

          <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
            <div className="p-5">
              <p className="mb-2 font-bold ">Vaidyaratnam</p>
              <img src="https://www.ayurkart.com/cdn/shop/collections/vaidyaratnam-logo_large.png?v=1639211952" />
            </div>
            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          </div>

          {/* Brand 3 */}

          <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
            <div className="p-5">
              <p className="mb-2 font-bold">Alarsin</p>
              <img src="https://www.ayurkart.com/cdn/shop/collections/alarsin-logo_large.jpg?v=1639212129" />
            </div>
            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          </div>

          {/* Brand 4 */}

          <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
            <div className="p-5">
              <p className="mb-2 font-bold">AVN</p>
              <img src="https://www.ayurkart.com/cdn/shop/collections/avn-logo_large.png?v=1639212401" />
            </div>
            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          </div>

          {/* Brand 5 */}

          <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
            <div className="p-5">
              <p className="mb-2 font-bold">AVP Ayurveda</p>
              <img src="https://www.ayurkart.com/cdn/shop/collections/avp-arya-vaidya-pharmacy_large.jpg?v=1639212731" />
            </div>
            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          </div>

          {/* Brand 6 */}

          <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
            <div className="p-5">
              <p className="mb-2 font-bold">Dabur</p>
              <img src="https://www.ayurkart.com/cdn/shop/collections/Dabur_Logo_large.png?v=1639213296" />
            </div>
            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          </div>

          {/* Brand 7 */}

          <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
            <div className="p-5">
              <p className="mb-2 font-bold">Himalaya</p>
              <img src="https://www.ayurkart.com/cdn/shop/collections/Himalaya-Logo-menu_large.png?v=1639213385" />
            </div>
            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          </div>

          {/* Brand 8 */}

          <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
            <div className="p-5">
              <p className="mb-2 font-bold truncate">Maharishi Ayurveda</p>
              <img src="https://www.ayurkart.com/cdn/shop/collections/maharishi-ayurveda_large.jpg?v=1639214093" />
            </div>
            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default BrandScreen;
