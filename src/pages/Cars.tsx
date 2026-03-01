import { useEffect, useState } from "react";
import type { Car } from "../types/car";
import { getAllCars } from "../services/car/requests";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import { MdPeople } from "react-icons/md";
import { PiRadioButtonThin } from "react-icons/pi";
import useSidebarContext from "../context/SideBarContext/sideBarContext";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
import useFavorite from "../context/FavoriteContext/favoriteContext";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import useSearchContext from "../context/SearchContext/searchContext";

const Cars = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);
  const [maxPrice, setMaxPrice] = useState(0);
  const { toggleFavorite, isFavorite } = useFavorite();
  const { searchValue } = useSearchContext();
  const navigate = useNavigate();
  const { isSidebarOpen } = useSidebarContext();

  useEffect(() => {
    const loadCars = async () => {
      try {
        const dataCar = await getAllCars();
        setCars(dataCar);

        const max = Math.max(...dataCar.map((c) => c.price));
        setMaxPrice(max);
      } catch (error) {
        console.log(error);
      }
    };
    loadCars();
  }, []);

  const filteredCars = cars
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
    .filter((car) => car.price <= maxPrice);

  return (
    <div
      className={`transition-all duration-300  ${isSidebarOpen ? "md:pl-96" : ""} pt-20`}
    >
      <section className="mt-10 mx-4 sm:mx-6 md:mx-10 lg:mx-20 min-h-screen mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr ">
          {filteredCars.map((car) => (
            <div
              key={car.id}
              onClick={() => navigate(`/cars/${car.id}`)}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center transition-transform hover:scale-105 w-full"
            >
              <div className="flex flex-col sm:flex-row justify-between w-full mb-2 items-start sm:items-center gap-2">
                <div className="flex flex-col sm:gap-2 w-full">
                  <h3 className="text-lg font-semibold truncate">
                    {car.brand} {car.model}
                  </h3>
                  <span className="text-gray-500 text-md">{car.category}</span>
                </div>
                <div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(car.id);
                    }}
                  >
                    {isFavorite(car.id) ? (
                      <FavoriteIcon className="text-red-500" />
                    ) : (
                      <FavoriteBorderIcon />
                    )}
                  </button>
                </div>
              </div>

              <img
                src={car.image}
                alt={car.brand}
                className="w-full h-40 sm:h-44 md:h-48 lg:h-52 object-cover rounded-md mb-4"
              />

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-2 mb-3 text-gray-400">
                <div className="flex items-center gap-1">
                  <LocalGasStationIcon className="w-5 h-5" />
                  <span>{car.fuelCapacity}L</span>
                </div>
                <div className="flex items-center gap-1">
                  <PiRadioButtonThin className="w-5 h-5" />
                  <span>{car.transmission}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MdPeople className="w-5 h-5" />
                  <span>{car.seats} People</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row w-full items-center justify-between gap-2">
                <div className="text-center sm:text-left">
                  <span className="text-xl font-semibold">${car.price}</span>
                  <span> / day</span>
                </div>
                <button className="mt-2 sm:mt-0 bg-[#3563E9] text-white w-full sm:w-[134px] h-[50px] rounded-md flex justify-center items-center transition-colors hover:bg-[#2349b2]">
                  Rental Car
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Sidebar
        cars={cars}
        filteredCars={filteredCars}
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

export default Cars;
