import Image from "next/image";
import React from "react";

import HeroBg from "../../public/assets/HeroBg.jpg";

import {HiOutlineMagnifyingGlass} from "react-icons/hi2";

type Props = {
  children?: React.ReactNode;
};

import { SearchHelperData} from "../../utils/searchHelper";

const Hero = (props: Props) => {
  console.log(SearchHelperData);
  return (
    <div className="my-8 relative">
      <div className="relative h-[830px] sm:h-[535px] contrast-[90%]">
        <Image
          className="rounded-xl shadow-md"
          src={HeroBg}
          layout="fill"
          objectFit="cover"
          alt="hero image"
        />
      </div>

      <div className="absolute top-0 left-0 right-0 flex flex-col justify-center items-center p-4 z-10">
        <h2 className="text-white drop-shadow-md font-bold">
          Find a home that's perfect for you
        </h2>
        <p className="text-white text-sm font-semibold mt-1 drop-shadow-md">
          Search any home with our trusted source
        </p>
        <div className="bg-white shadow-md w-full rounded-lg p-4 my-12 flex flex-col">
          <p className="text-md text-center font-semibold">
            Search your property
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 my-4 gap-4">
            {SearchHelperData &&
              SearchHelperData.map((data) => (
                <select className="select-option" name={data.queryName}>
                  {data.items.map((item) => (
                    <option className="p-2" value={item.value}>
                      {item.name}
                    </option>
                  ))}
                </select>
              ))}
            <button className="btn-primary flex items-center self-end sm:col-start-2 md:col-start-5">
              Search
              <HiOutlineMagnifyingGlass className="ml-2"></HiOutlineMagnifyingGlass>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
