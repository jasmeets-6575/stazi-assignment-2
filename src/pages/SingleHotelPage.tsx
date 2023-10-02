import { useParams, useNavigate, Link } from "react-router-dom";
import { hotelData } from "../utils/hotels";
import { MdLocationPin } from "react-icons/md";
import { BsBuildings, BsArrowsMove } from "react-icons/bs";
import { BiBath } from "react-icons/bi";
import { FaBed } from "react-icons/fa";

const SingleHotelPage = () => {
  const { id } = useParams();
  const currentCard = hotelData.find((item) => item.id === Number(id));
  if (currentCard) {
    return (
      <div className="w-1/2 mx-auto h-screen">
        <div className=" relative p-2 bg-white rounded-lg h-auto cursor-pointer">
          <button className=" absolute border border-purple-800 text-purple-800 font-bold rounded-full px-2 py-[4px] bg-white top-4 left-4">
            For Rent
          </button>
          <img
            className="h-[250px] object-fit w-full rounded-lg"
            src="https://images.pexels.com/photos/2245411/pexels-photo-2245411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Hotel picture"
          />

          <div className="flex flex-col space-y-2 mt-2">
            <div className="flex space-x-2 my-1 items-center">
              <MdLocationPin className="text-xl text-red-500" />
              <span className="font-semibold">{currentCard.city}</span>
            </div>

            <h3 className="font-semibold text-xl px-2">
              {currentCard.address} , {currentCard.city}
            </h3>

            <div className="flex space-x-2 justify-around text-gray-600 font-medium mt-1">
              <div className="flex flex-col space-y-1">
                <BsBuildings />
                <span>{currentCard.room} Room</span>
              </div>
              <div className="flex flex-col space-y-1">
                <FaBed />
                <span>{currentCard.bed} Bed</span>
              </div>
              <div className="flex flex-col space-y-1">
                <BiBath />
                <span>{currentCard.bathroom} Bath</span>
              </div>
              <div className="flex flex-col space-y-1">
                <BsArrowsMove />
                <span>{currentCard.area} sqft</span>
              </div>
            </div>

            <div className="flex items-center justify-between pb-2 px-2">
              <h2 className="flex items-center font-medium">
                <span className="text-xl font-bold text-purple-800">
                  ${currentCard.price}
                </span>
                <span> / month</span>
              </h2>

              <button className="border border-purple-800 text-purple-800 font-bold rounded-full px-2 py-[4px]">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default SingleHotelPage;
