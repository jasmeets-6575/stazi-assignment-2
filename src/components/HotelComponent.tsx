import { DataType, hotelData } from "../utils/hotels";
import HotelComponentItems from "./HotelComponentItems";

interface Props {
  hotelItems: DataType[];
}

const HotelComponent = ({ hotelItems }: Props) => {
  return (
    <div className="grid grid-cols-3 gap-6">
      {hotelItems.map((item: DataType) => {
        return <HotelComponentItems key={item.id} {...item} />;
      })}
    </div>
  );
};
export default HotelComponent;
