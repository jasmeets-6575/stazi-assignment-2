import { DataType } from "../utils/hotels";
import { FaRegHourglass } from "react-icons/fa";
import HotelComponentItems from "./HotelComponentItems";
import { useState } from "react";

interface Props {
  hotelItems: DataType[];
}

const HotelComponent = ({ hotelItems }: Props) => {
  const [count, setCount] = useState<number>(6);
  return (
    <>
      <div className="grid grid-cols-3 gap-6">
        {hotelItems.slice(0, count).map((item: DataType) => {
          return <HotelComponentItems key={item.id} {...item} />;
        })}
      </div>
      <div className="my-6">
        <button
          className="flex items-center space-x-2 mx-auto  text-purple-700 font-bold px-3 py-[6px] border border-purple-700 rounded-full bg-white"
          onClick={() => setCount(count + 3)}
        >
          <FaRegHourglass />
          <span>Show More</span>
        </button>
      </div>
    </>
  );
};
export default HotelComponent;
