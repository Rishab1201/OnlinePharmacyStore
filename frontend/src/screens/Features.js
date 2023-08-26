export const Feature = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-8 row-gap-5 lg:grid-cols-3">
        <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
          <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
          <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
          <div className="relative p-5 bg-white rounded-sm">
            <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
              <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-indigo-50 lg:mb-0">
                {/* <svg
                    className="w-8 h-8 text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg> */}
                <svg
                  version="1.1"
                  id="Layer_1"
                  // xmlns="http://www.w3.org/2000/svg"
                  // xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 122.88 101.35"
                  // style="enable-background:new 0 0 122.88 101.35"
                  // xml:space="preserve"
                >
                  <g>
                    <path d="M28.9,10.51l35.31,34.27h12.04C56.72,32.31,57.03,15.14,62.22,0.04c18.59,10.31,28.67,22.7,21.42,44.75h6.08 c-2.69-15.68,5.31-22.87,18.82-27.72c1.78,10.37,0.21,21.54-13.47,27.72H121c1.04,0,1.88,0.84,1.88,1.88c0,0.08,0,0.16-0.01,0.23 c-0.48,11.47-3.15,21.49-8.64,29.63c-5.55,8.21-13.93,14.46-25.78,18.3c-0.03,0.01-0.06,0.02-0.1,0.03v5.69 c0,0.44-0.36,0.8-0.8,0.8H52.33c-0.56,0-1.03-0.46-1.03-1.03v-5.51c-0.11-0.04-0.22-0.09-0.32-0.15 c-10.87-5.14-18.54-11.91-23.62-20c-5.1-8.12-7.57-17.53-8.02-27.92c-0.04-1.03,0.76-1.91,1.79-1.96c0.03,0,0.05,0,0.08,0v-0.01 h8.56L12.57,28.86l0.02-0.02c-0.08-0.05-0.15-0.11-0.22-0.17c-0.02-0.02-0.04-0.03-0.05-0.05l-8.47-7.84 c-0.08-0.08-0.16-0.16-0.23-0.25c-3.77-4.75-4.31-9.41-2.89-13.11c0.67-1.76,1.79-3.28,3.21-4.49c1.4-1.19,3.1-2.06,4.96-2.53 c4.4-1.12,9.74-0.02,14.21,4.48L28.9,10.51L28.9,10.51L28.9,10.51z M79.54,44.78h3.08L64.78,6.87L79.54,44.78L79.54,44.78z M90.01,44.78h2.27l13.85-23.5L90.01,44.78L90.01,44.78z M103.37,59.99c0.22-0.75,1-1.17,1.75-0.95c0.75,0.22,1.17,1,0.95,1.75 c-0.58,1.98-1.28,3.95-2.11,5.89c-0.81,1.91-1.73,3.78-2.74,5.55c-0.38,0.68-1.24,0.91-1.92,0.53c-0.68-0.38-0.91-1.24-0.53-1.92 c0.97-1.69,1.83-3.46,2.59-5.25C102.15,63.76,102.82,61.88,103.37,59.99L103.37,59.99z M97.02,73.68c0.43-0.65,1.31-0.82,1.95-0.39 c0.65,0.43,0.82,1.31,0.39,1.95c-0.72,1.07-1.47,2.09-2.25,3.05c-0.77,0.95-1.58,1.87-2.42,2.72c-0.54,0.55-1.44,0.56-1.99,0.02 c-0.55-0.54-0.56-1.44-0.02-1.99c0.77-0.79,1.52-1.63,2.23-2.51C95.66,75.62,96.36,74.67,97.02,73.68L97.02,73.68z M30.54,72.67 c4.67,7.44,11.75,13.69,21.81,18.49h35.25c10.84-3.57,18.48-9.28,23.52-16.74c4.8-7.11,7.27-15.85,7.91-25.88H23.2 C23.83,57.52,26.12,65.64,30.54,72.67L30.54,72.67z M16.25,27.17l18.78,17.37l23.53,0l-30.9-29.99L16.25,27.17L16.25,27.17z M4.23,8.77c-0.97,2.53-0.52,5.84,2.25,9.37l7.01,6.49l11.48-12.69C20.82,7.9,16.42,2.37,9.81,4.05C8.5,4.39,7.32,4.99,6.36,5.81 C5.41,6.61,4.67,7.61,4.23,8.77L4.23,8.77z" />
                  </g>
                </svg>
                {/* <img scr="./images/ayurveda-bowl-icon.svg" className="w-10"></img> */}
              </div>
              <h6 className="font-semibold leading-5 pb-6">
                Ayurvedic Proverb
              </h6>
            </div>
            <p className="mb-2 text-sm text-gray-900">
              When diet is wrong, medicine is of no use. When diet is correct,
              medicine is of no need.
            </p>
            {/* <a
                href="/"
                aria-label=""
                className="inline-flex items-center text-sm font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
              </a> */}
          </div>
        </div>
        <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
          <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
          <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
          <div className="relative p-5 bg-white rounded-sm">
            <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
              <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-indigo-50 lg:mb-0">
                {/* <svg
                  className="w-8 h-8 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg> */}

                <svg
                  version="1.1"
                  id="Layer_1"
                  // xmlns="http://www.w3.org/2000/svg"
                  // xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 122.88 101.35"
                  // style="enable-background:new 0 0 122.88 101.35"
                  // xml:space="preserve"
                >
                  <g>
                    <path d="M28.9,10.51l35.31,34.27h12.04C56.72,32.31,57.03,15.14,62.22,0.04c18.59,10.31,28.67,22.7,21.42,44.75h6.08 c-2.69-15.68,5.31-22.87,18.82-27.72c1.78,10.37,0.21,21.54-13.47,27.72H121c1.04,0,1.88,0.84,1.88,1.88c0,0.08,0,0.16-0.01,0.23 c-0.48,11.47-3.15,21.49-8.64,29.63c-5.55,8.21-13.93,14.46-25.78,18.3c-0.03,0.01-0.06,0.02-0.1,0.03v5.69 c0,0.44-0.36,0.8-0.8,0.8H52.33c-0.56,0-1.03-0.46-1.03-1.03v-5.51c-0.11-0.04-0.22-0.09-0.32-0.15 c-10.87-5.14-18.54-11.91-23.62-20c-5.1-8.12-7.57-17.53-8.02-27.92c-0.04-1.03,0.76-1.91,1.79-1.96c0.03,0,0.05,0,0.08,0v-0.01 h8.56L12.57,28.86l0.02-0.02c-0.08-0.05-0.15-0.11-0.22-0.17c-0.02-0.02-0.04-0.03-0.05-0.05l-8.47-7.84 c-0.08-0.08-0.16-0.16-0.23-0.25c-3.77-4.75-4.31-9.41-2.89-13.11c0.67-1.76,1.79-3.28,3.21-4.49c1.4-1.19,3.1-2.06,4.96-2.53 c4.4-1.12,9.74-0.02,14.21,4.48L28.9,10.51L28.9,10.51L28.9,10.51z M79.54,44.78h3.08L64.78,6.87L79.54,44.78L79.54,44.78z M90.01,44.78h2.27l13.85-23.5L90.01,44.78L90.01,44.78z M103.37,59.99c0.22-0.75,1-1.17,1.75-0.95c0.75,0.22,1.17,1,0.95,1.75 c-0.58,1.98-1.28,3.95-2.11,5.89c-0.81,1.91-1.73,3.78-2.74,5.55c-0.38,0.68-1.24,0.91-1.92,0.53c-0.68-0.38-0.91-1.24-0.53-1.92 c0.97-1.69,1.83-3.46,2.59-5.25C102.15,63.76,102.82,61.88,103.37,59.99L103.37,59.99z M97.02,73.68c0.43-0.65,1.31-0.82,1.95-0.39 c0.65,0.43,0.82,1.31,0.39,1.95c-0.72,1.07-1.47,2.09-2.25,3.05c-0.77,0.95-1.58,1.87-2.42,2.72c-0.54,0.55-1.44,0.56-1.99,0.02 c-0.55-0.54-0.56-1.44-0.02-1.99c0.77-0.79,1.52-1.63,2.23-2.51C95.66,75.62,96.36,74.67,97.02,73.68L97.02,73.68z M30.54,72.67 c4.67,7.44,11.75,13.69,21.81,18.49h35.25c10.84-3.57,18.48-9.28,23.52-16.74c4.8-7.11,7.27-15.85,7.91-25.88H23.2 C23.83,57.52,26.12,65.64,30.54,72.67L30.54,72.67z M16.25,27.17l18.78,17.37l23.53,0l-30.9-29.99L16.25,27.17L16.25,27.17z M4.23,8.77c-0.97,2.53-0.52,5.84,2.25,9.37l7.01,6.49l11.48-12.69C20.82,7.9,16.42,2.37,9.81,4.05C8.5,4.39,7.32,4.99,6.36,5.81 C5.41,6.61,4.67,7.61,4.23,8.77L4.23,8.77z" />
                  </g>
                </svg>
              </div>
              <h6 className="font-semibold leading-5 pb-6">shubhra krishan</h6>
            </div>
            <p className="mb-2 text-sm text-gray-900">
              The great thing about ayurveda is that its treatments always yield
              side benefits, not side effects
            </p>
            {/* <a
                href="/"
                aria-label=""
                className="inline-flex items-center text-sm font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
              </a> */}
          </div>
        </div>
        <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
          <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
          <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
          <div className="relative p-5 bg-white rounded-sm">
            <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
              <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-indigo-50 lg:mb-0">
                {/* <svg
                  className="w-8 h-8 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg> */}

                <svg
                  version="1.1"
                  id="Layer_1"
                  // xmlns="http://www.w3.org/2000/svg"
                  // xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 122.88 101.35"
                  // style="enable-background:new 0 0 122.88 101.35"
                  // xml:space="preserve"
                >
                  <g>
                    <path d="M28.9,10.51l35.31,34.27h12.04C56.72,32.31,57.03,15.14,62.22,0.04c18.59,10.31,28.67,22.7,21.42,44.75h6.08 c-2.69-15.68,5.31-22.87,18.82-27.72c1.78,10.37,0.21,21.54-13.47,27.72H121c1.04,0,1.88,0.84,1.88,1.88c0,0.08,0,0.16-0.01,0.23 c-0.48,11.47-3.15,21.49-8.64,29.63c-5.55,8.21-13.93,14.46-25.78,18.3c-0.03,0.01-0.06,0.02-0.1,0.03v5.69 c0,0.44-0.36,0.8-0.8,0.8H52.33c-0.56,0-1.03-0.46-1.03-1.03v-5.51c-0.11-0.04-0.22-0.09-0.32-0.15 c-10.87-5.14-18.54-11.91-23.62-20c-5.1-8.12-7.57-17.53-8.02-27.92c-0.04-1.03,0.76-1.91,1.79-1.96c0.03,0,0.05,0,0.08,0v-0.01 h8.56L12.57,28.86l0.02-0.02c-0.08-0.05-0.15-0.11-0.22-0.17c-0.02-0.02-0.04-0.03-0.05-0.05l-8.47-7.84 c-0.08-0.08-0.16-0.16-0.23-0.25c-3.77-4.75-4.31-9.41-2.89-13.11c0.67-1.76,1.79-3.28,3.21-4.49c1.4-1.19,3.1-2.06,4.96-2.53 c4.4-1.12,9.74-0.02,14.21,4.48L28.9,10.51L28.9,10.51L28.9,10.51z M79.54,44.78h3.08L64.78,6.87L79.54,44.78L79.54,44.78z M90.01,44.78h2.27l13.85-23.5L90.01,44.78L90.01,44.78z M103.37,59.99c0.22-0.75,1-1.17,1.75-0.95c0.75,0.22,1.17,1,0.95,1.75 c-0.58,1.98-1.28,3.95-2.11,5.89c-0.81,1.91-1.73,3.78-2.74,5.55c-0.38,0.68-1.24,0.91-1.92,0.53c-0.68-0.38-0.91-1.24-0.53-1.92 c0.97-1.69,1.83-3.46,2.59-5.25C102.15,63.76,102.82,61.88,103.37,59.99L103.37,59.99z M97.02,73.68c0.43-0.65,1.31-0.82,1.95-0.39 c0.65,0.43,0.82,1.31,0.39,1.95c-0.72,1.07-1.47,2.09-2.25,3.05c-0.77,0.95-1.58,1.87-2.42,2.72c-0.54,0.55-1.44,0.56-1.99,0.02 c-0.55-0.54-0.56-1.44-0.02-1.99c0.77-0.79,1.52-1.63,2.23-2.51C95.66,75.62,96.36,74.67,97.02,73.68L97.02,73.68z M30.54,72.67 c4.67,7.44,11.75,13.69,21.81,18.49h35.25c10.84-3.57,18.48-9.28,23.52-16.74c4.8-7.11,7.27-15.85,7.91-25.88H23.2 C23.83,57.52,26.12,65.64,30.54,72.67L30.54,72.67z M16.25,27.17l18.78,17.37l23.53,0l-30.9-29.99L16.25,27.17L16.25,27.17z M4.23,8.77c-0.97,2.53-0.52,5.84,2.25,9.37l7.01,6.49l11.48-12.69C20.82,7.9,16.42,2.37,9.81,4.05C8.5,4.39,7.32,4.99,6.36,5.81 C5.41,6.61,4.67,7.61,4.23,8.77L4.23,8.77z" />
                  </g>
                </svg>
              </div>
              <h6 className="font-semibold leading-5 pb-6">Deepak Chopra</h6>
            </div>
            <p className="mb-2 text-sm text-gray-900">
              Healing is not only the absence of disease in the body; it is also
              the harmonious integration of the mind, body, and spirit.
            </p>
            {/* <a
                href="/"
                aria-label=""
                className="inline-flex items-center text-sm font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
              </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
