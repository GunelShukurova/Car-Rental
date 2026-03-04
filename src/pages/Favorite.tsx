import { useEffect, useState } from "react";
import useFavorite from "../context/FavoriteContext/favoriteContext";
import { getAllCars } from "../services/car/requests";
import type { Car } from "../types/car";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import { MdPeople } from "react-icons/md";
import { PiRadioButtonThin } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import useSearchContext from "../context/SearchContext/searchContext";
import useSidebarContext from "../context/SideBarContext/sideBarContext";
import Sidebar from "../components/Sidebar";

const Favorite = () => {
  const { favorites, toggleFavorite } = useFavorite();
  const [cars, setCars] = useState<Car[]>([]);
  const navigate = useNavigate();
  const { searchValue } = useSearchContext();
  const { isSidebarOpen } = useSidebarContext();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);
  const [maxPrice, setMaxPrice] = useState(0);

  useEffect(() => {
    const loadCars = async () => {
      const data = await getAllCars();
      setCars(data);

      const max = Math.max(...data.map((car) => car.price));
      setMaxPrice(max);
    };

    loadCars();
  }, []);

  const favoriteCars = cars
    .filter((car) => favorites.includes(car.id))
    .filter(
      (car) =>
        car.brand.toLowerCase().includes(searchValue.toLowerCase().trim()) ||
        car.model.toLowerCase().includes(searchValue.toLowerCase().trim()) ||
        car.category.toLowerCase().includes(searchValue.toLowerCase().trim()),
    )
    .filter((car) =>
      selectedCategories.length === 0
        ? true
        : selectedCategories.includes(car.category),
    )
    .filter((car) =>
      selectedSeats.length === 0 ? true : selectedSeats.includes(car.seats),
    )
    .filter((car) => (maxPrice === 0 ? true : car.price <= maxPrice));

  return (
    <div
      className={`transition-all duration-300 pt-4 sm:pt-28 lg:pt-20 ${isSidebarOpen ? "md:pl-96" : ""}`}
    >
      <section className="mt-6 sm:mt-8 mx-4 sm:mx-6 md:mx-10 lg:mx-20 min-h-screen mb-10 ">
          <h1 className="text-2xl mb-10 text-gray-500">Favorites</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-6">
          
          {favoriteCars.map((car) => (
            <div
              key={car.id}
              onClick={() => navigate(`/cars/${car.id}`)}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center transition-transform hover:scale-105 w-full"
            >
            
              <div className="flex justify-between w-full mb-2">
                <div>
                  <h3 className="text-lg font-semibold">
                    {car.brand} {car.model}
                  </h3>
                  <span className="text-gray-500 text-sm">{car.category}</span>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(car.id);
                  }}
                >
                  <FavoriteIcon className="text-red-500" />
                </button>
              </div>

              <img
                src={car.image}
                alt={car.brand}
                className="w-full h-44 object-cover rounded-md mb-4"
              />

              <div className="flex justify-between w-full text-gray-400 text-sm mb-3">
                <div className="flex items-center gap-1">
                  <LocalGasStationIcon />
                  <span>{car.fuelCapacity}L</span>
                </div>
                <div className="flex items-center gap-1">
                  <PiRadioButtonThin />
                  <span>{car.transmission}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MdPeople />
                  <span>{car.seats}</span>
                </div>
              </div>

              <div className="flex justify-between w-full items-center">
                <span className="text-xl font-semibold">
                  ${car.price} / day
                </span>
                <button className="bg-[#3563E9] text-white px-4 py-2 rounded-md hover:bg-[#2349b2]">
                  Rental Car
                </button>
              </div>
            </div>
          ))}
        </div>

        {favoriteCars.length === 0 && (
          <div className="text-center text-gray-500 mt-20 text-xl">
            No favorite cars yet
          </div>
        )}
      </section>
      <Sidebar
        cars={cars}
        filteredCars={cars}
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
        selectedSeats={selectedSeats}
        setSelectedSeats={setSelectedSeats}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
      />
    </div>
  );
};

export default Favorite;
