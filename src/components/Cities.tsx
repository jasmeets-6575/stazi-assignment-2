interface CategoriesProps {
  city: string[];
  filterHotels: (category: string) => void;
}

const Cities = ({ city, filterHotels }: CategoriesProps) => {
  return (
    <div className="my-6">
      {city.map((item) => {
        return (
          <button
            className="px-3 py-[3px] font-semibold bg-gray-300 rounded-lg mr-3 tracking-wide"
            key={item}
            type="button"
            onClick={() => filterHotels(item)}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};
export default Cities;
