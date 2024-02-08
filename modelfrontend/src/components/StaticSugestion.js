import React from "react";

function StaticSugestion() {
  return (
    <>
      <div class="flex flex-col items-center justify-center p-5 mb-24">
        <img
          src="https://www.soulhq.ai/assets/soul-ui-logo.webp"
          alt="logo"
          class="w-12 h-12 rounded-md"
        />
        <h1 class="text-center font-semibold text-xl mt-2">
          How can I help you today?
        </h1>
      </div>
      <div className="flex flex-wrap justify-between">
        <div className="w-full md:w-1/2 lg:w-1/2 p-3">
          <div className="bg-white-10 rounded-lg shadow-md p-4">
            <p className="font-semibold text-md mb-2 text-gray-lightbulma">
              Show me a code snippet
            </p>
            <p className=" text-gray-lightbulma  text-sm">
              of a websites sticky header 
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/2 p-3">
          <div className="bg-white-10 rounded-lg shadow-md p-4">
            <p className="font-semibold text-md mb-2 text-gray-lightbulma">
              Tell me fun facts
            </p>
            <p className=" text-gray-lightbulma text-sm ">
              about the Golden State Warriors
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/2  p-3">
          <div className="bg-white-10 rounded-lg shadow-md p-4">
            <p className="font-semibold text-md mb-2 text-gray-lightbulma">
              Give me Ideas
            </p>
            <p className=" text-gray-lightbulma text-sm ">
              about how to plan my New Years resolutions
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/2 p-3">
          <div className="bg-white-10 rounded-lg shadow-md p-4">
            <p className="font-semibold text-md mb-2 text-gray-lightbulma">
              Create a content calender
            </p>
            <p className=" text-gray-lightbulma text-sm ">
              for Twitter account
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default StaticSugestion;
