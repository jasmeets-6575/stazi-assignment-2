import { useState } from "react";
import { DataType, hotelData } from "../utils/hotels";
import Cities from "./Cities";
import HotelComponent from "./HotelComponent";
import Headings from "./Headings";

const allCities = ["All", ...new Set(hotelData.map((data) => data.city))];
const Main = () => {
  const [hotelItems, setHotelItems] = useState<DataType[]>(hotelData);
  const [city, setCity] = useState<string[]>(allCities);

  const filterHotels = (category: string) => {
    const tempData = [...hotelData];
    if (category == "All") {
      setHotelItems(tempData);
      return;
    }

    const newHotelItems = hotelData.filter((item) => item.city === category);
    setHotelItems(newHotelItems);
  };
  return (
    <section>
      <Headings />
      <Cities city={city} filterHotels={filterHotels} />
      <HotelComponent hotelItems={hotelItems} />
    </section>
  );
};
export default Main;
