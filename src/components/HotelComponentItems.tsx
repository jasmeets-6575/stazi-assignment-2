import { DataHTMLAttributes } from "react";
import { MdLocationPin } from "react-icons/md";
import { DataType } from "../utils/hotels";

const HotelComponentItems = ({
  city,
  address,
  price,
  room,
  bed,
  bathroom,
  area,
}: DataType) => {
  return (
    <div className="p-2 bg-white rounded-lg h-[450px]">
      <img
        className="h-1/2 object-fit w-full rounded-lg"
        src="https://images.pexels.com/photos/2245411/pexels-photo-2245411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Hotel picture"
      />

      <div className="flex space-x-2 my-1 items-center">
        <MdLocationPin className="text-xl text-red-500" />
        <span className="font-semibold">{city}</span>
      </div>

      <h3 className="font-semibold text-xl px-2">
        {address} , {city}
      </h3>

      <div className="px-2 text-gray-600 font-medium">
        <div>
          <span>{room} Room</span>
        </div>
        <div>
          <span>{bed} Bed</span>
        </div>
        <div>
          <span>{bathroom} Bath</span>
        </div>
        <div>
          <span>{area} sft</span>
        </div>
      </div>

      <div className="flex items-center justify-between px-2">
        <h2 className="flex items-center font-medium">
          <span className="text-xl font-semibold text-purple-800">
            ${price}
          </span>
          <span> / month</span>
        </h2>

        <button className="border border-purple-800 text-purple-800 font-bold rounded-full px-2 py-[4px]">
          Read More
        </button>
      </div>
    </div>
  );
};
export default HotelComponentItems;
