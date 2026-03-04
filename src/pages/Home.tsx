import "../assets/css/home.css";
import photo1 from "../assets/photo/2385cc01da9bb791587b8022c475d39822c50c17.png";
import photo2 from "../assets/photo/702f356e48fe531e6fd2626c5d1041dbfcde3341.png";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import { MdPeople } from "react-icons/md";
import { PiRadioButtonThin } from "react-icons/pi";
import { useEffect, useState } from "react";
import { getAllCars } from "../services/car/requests";
import type { Car } from "../types/car";
import useSearchContext from "../context/SearchContext/searchContext";
import useSidebarContext from "../context/SideBarContext/sideBarContext";
import Sidebar from "../components/Sidebar";
import useFavorite from "../context/FavoriteContext/favoriteContext";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [cars, setCars] = useState<Car[]>();
  const { searchValue } = useSearchContext();
  const { isSidebarOpen } = useSidebarContext();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);
  const [maxPrice, setMaxPrice] = useState(0);
  const navigate = useNavigate()
  const { toggleFavorite, isFavorite } = useFavorite();
  useEffect(() => {
    const loadCar = async () => {
      try {
        const carData = await getAllCars();
        setCars(carData);
      } catch (error) {
        console.log(error);
      }
    };

    loadCar();
  }, []);

  useEffect(() => {
    if (cars?.length) {
      const max = Math.max(...cars.map((c) => c.price));
      setMaxPrice(max);
    }
  }, [cars]);

  useEffect(() => {
    const updateOverflow = () => {
      const shouldLock = isSidebarOpen && window.innerWidth < 768;
      document.body.style.overflow = shouldLock ? "hidden" : "auto";
    };

    updateOverflow();
    window.addEventListener("resize", updateOverflow);

    return () => {
      window.removeEventListener("resize", updateOverflow);
      document.body.style.overflow = "auto";
    };
  }, [isSidebarOpen]);

  const filteredCars =
    cars
      ?.filter(
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
      .filter((car) => car.price <= maxPrice) || [];

  return (
    <div
      className={`transition-all min-h-screen mb-10 pt-4 sm:pt-8 lg:pt-32 ${isSidebarOpen ? "md:pl-96" : ""}`}
    >
      <section className="flex flex-col md:flex-row gap-4 sm:gap-6 w-full px-4 sm:px-8 md:px-32 mt-6 sm:mt-8">
        <div className="relative w-full md:w-1/2 h-[320px] sm:h-[360px] md:h-[400px] bg-[#54A6FF] rounded-lg overflow-hidden flex flex-col">
          <div className="flex flex-col h-full p-4 sm:p-6 md:p-8 z-10">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white w-full md:w-[272px]">
              The Best Platform for Car Rental
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white mt-2 md:mt-4 w-full md:w-[294px]">
              Ease of doing a car rental safely and reliably. Of course at a low
              price.
            </p>
            <button className="mt-4 bg-[#3563E9] text-white w-[120px] h-[44px] sm:w-[134px] sm:h-[50px] rounded-md flex justify-center items-center">
              Rental Car
            </button>
          </div>
          <img
            src={photo1}
            alt=""
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[95%] sm:w-[95%] md:w-[550px] h-auto object-contain"
          />
        </div>

        <div className="relative w-full md:w-1/2 h-[320px] sm:h-[360px] md:h-[400px] bg-[#3563E9] rounded-lg overflow-hidden flex flex-col">
          <div className="flex flex-col h-full p-4 sm:p-6 md:p-8 z-10">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white w-full md:w-[272px]">
              Easy way to rent a car at a low price
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white mt-2 md:mt-4 w-full md:w-[444px]">
              Easy way to rent a car at a low price Providing cheap car rental
              services and safe and comfortable facilities.
            </p>
            <button className="mt-4 bg-[#54A6FF] text-white w-[120px] h-[44px] sm:w-[134px] sm:h-[50px] rounded-md flex justify-center items-center">
              Rental Car
            </button>
          </div>

          <img
            src={photo2}
            alt=""
            className="absolute bottom-[-20px] sm:bottom-[-30px] left-1/2 transform -translate-x-1/2 w-[90%] sm:w-[90%] md:w-[440px] h-auto scale-x-[-1] object-contain"
          />
        </div>
      </section>
      <section className="mt-3 mx-4 min-[820px]:mx-12 min-[1180px]:mx-24 items-center">
        <div className="flex flex-col min-[820px]:flex-row flex-wrap min-[1180px]:flex-nowrap gap-6 min-[1180px]:gap-10 w-full p-4 min-[820px]:p-6 min-[1180px]:p-7 rounded-lg items-stretch min-[1180px]:items-center">
          <div className="flex flex-col gap-4 w-full min-[820px]:flex-1 bg-white p-5 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-blue-800">
                <RadioButtonCheckedIcon />
              </span>
              <span>Pick - UP</span>
            </div>

            <div className="flex flex-col min-[820px]:flex-row flex-wrap gap-4 min-[1180px]:gap-10">
              <div className="flex flex-col gap-3 w-full min-[820px]:w-auto">
                <span>Locations</span>
                <select
                  name="city"
                  id="city"
                  className="text-gray-400 w-full min-[820px]:w-36 min-[1180px]:w-40 rounded-md px-2 py-1"
                >
                  <option value="city">Select your city</option>
                </select>
              </div>

              <div className="hidden min-[1180px]:block border-r-2 border-gray-300 h-16 min-[1180px]:h-auto"></div>

              <div className="flex flex-col gap-3 w-full min-[820px]:w-auto">
                <span>Date</span>
                <select
                  name="date"
                  id="date"
                  className="text-gray-400 w-full min-[820px]:w-36 min-[1180px]:w-40 rounded-md px-2 py-1"
                >
                  <option value="date">Select your date</option>
                </select>
              </div>

              <div className="hidden min-[1180px]:block border-r-2 border-gray-300 h-16 min-[1180px]:h-auto"></div>

              <div className="flex flex-col gap-3 w-full min-[820px]:w-auto">
                <span>Time</span>
                <select
                  name="time"
                  id="time"
                  className="text-gray-400 w-full min-[820px]:w-36 min-[1180px]:w-40 rounded-md px-2 py-1"
                >
                  <option value="time">Select your time</option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex justify-center w-full min-[820px]:w-auto mt-4 min-[820px]:mt-0">
            <div className="bg-[#3563E9] flex px-2 py-3 h-15 rounded-lg gap-1">
              <span className="text-white text-lg">
                <ArrowUpwardIcon />
              </span>
              <span className="text-white text-lg">
                <ArrowDownwardIcon />
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full min-[820px]:flex-1 mt-4 min-[820px]:mt-0 bg-white p-5 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-blue-500">
                <RadioButtonCheckedIcon />
              </span>
              <span>Drop - Off</span>
            </div>

            <div className="flex flex-col min-[820px]:flex-row flex-wrap gap-4 min-[1180px]:gap-10">
              <div className="flex flex-col gap-3 w-full min-[820px]:w-auto">
                <span>Locations</span>
                <select
                  name="city"
                  id="city"
                  className="text-gray-400 w-full min-[820px]:w-36 min-[1180px]:w-40 rounded-md px-2 py-1"
                >
                  <option value="city">Select your city</option>
                </select>
              </div>

              <div className="hidden min-[1180px]:block border-r-2 border-gray-300 h-16 min-[1180px]:h-auto"></div>

              <div className="flex flex-col gap-3 w-full min-[820px]:w-auto">
                <span>Date</span>
                <select
                  name="date"
                  id="date"
                  className="text-gray-400 w-full min-[820px]:w-36 min-[1180px]:w-40 rounded-md px-2 py-1"
                >
                  <option value="date">Select your date</option>
                </select>
              </div>

              <div className="hidden min-[1180px]:block border-r-2 border-gray-300 h-16 min-[1180px]:h-auto"></div>

              <div className="flex flex-col gap-3 w-full min-[820px]:w-auto">
                <span>Time</span>
                <select
                  name="time"
                  id="time"
                  className="text-gray-400 w-full min-[820px]:w-36 min-[1180px]:w-40 rounded-md px-2 py-1"
                >
                  <option value="time">Select your time</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-10 mx-4 sm:mx-6 md:mx-10 lg:mx-30">
        <h2 className="text-gray-400 text-xl mb-6">Popular Car</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr">
          {filteredCars
            ?.filter((car) => car.isPopular)
            .map((car) => (
              <div
                key={car.id}
                onClick={()=>navigate(`cars/${car.id}`)}
                className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center transition-transform hover:scale-105 w-full"
              >
                <div className="flex flex-col sm:flex-row justify-between w-full mb-2 items-start sm:items-center gap-2">
                  <div className="flex flex-col sm:gap-2">
                    <h3 className="text-lg font-semibold truncate">
                      {car.brand} {car.model}
                    </h3>
                    <span className="text-gray-500 text-md">
                      {car.category}
                    </span>
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
      <section className="mt-10 mx-4 sm:mx-6 md:mx-10 lg:mx-30">
        <h2 className="text-gray-400 text-xl mb-6">Recomendation Car</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr">
          {filteredCars
            ?.filter((car) => car.isRecommended)
            .map((car) => (
              <div
                key={car.id}

                className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center transition-transform hover:scale-105 w-full"
              >
                <div className="flex flex-col sm:flex-row justify-between w-full mb-2 items-start sm:items-center gap-2">
                  <div className="flex flex-col  sm:gap-2 w-full">
                    <h3 className="text-lg font-semibold truncate">
                      {car.brand} {car.model}
                    </h3>
                    <span className="text-gray-500 text-md">
                      {car.category}
                    </span>
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
      <section>
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
      </section>
    </div>
  );
};

export default Home;
