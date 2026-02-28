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
const Home = () => {
  return (
    <div>
      <section className="flex flex-col md:flex-row gap-6 w-full px-4 md:px-32 mt-10">
        <div className="relative w-full md:w-1/2 h-[360px] md:h-[400px] bg-[#54A6FF] rounded-lg overflow-hidden">
          <div className="flex flex-col h-full p-6 md:p-8">
            <h1 className="text-2xl sm:text-2xl md:text-3xl font-semibold text-white w-full md:w-[272px]">
              The Best Platform for Car Rental
            </h1>
            <p className="text-base sm:text-base md:text-lg text-white mt-2 md:mt-4 w-full md:w-[294px]">
              Ease of doing a car rental safely and reliably. Of course at a low
              price.
            </p>
            <button className="mt-4 bg-[#3563E9] text-white w-[134px] h-[50px] rounded-md flex justify-center items-center">
              Rental Car
            </button>
          </div>
          <img
            src={photo1}
            alt=""
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[90%] sm:w-[95%] md:w-[550px] h-auto"
          />
        </div>

        <div className="relative w-full md:w-1/2 h-[360px] md:h-[400px] bg-[#3563E9] rounded-lg overflow-hidden">
          <div className="flex flex-col h-full p-6 md:p-8">
            <h1 className="text-2xl sm:text-2xl md:text-3xl font-semibold text-white w-full md:w-[272px]">
              Easy way to rent a car at a low price
            </h1>
            <p className="text-base sm:text-base md:text-lg text-white mt-2 md:mt-4 w-full md:w-[444px]">
              Easy way to rent a car at a low price Providing cheap car rental
              services and safe and comfortable facilities.
            </p>
            <button className="mt-4 bg-[#54A6FF] text-white w-[134px] h-[50px] rounded-md flex justify-center items-center">
              Rental Car
            </button>
          </div>
          <img
            src={photo2}
            alt=""
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[85%] sm:w-[90%] md:w-[440px] h-auto scale-x-[-1]"
          />
        </div>
      </section>
      <section className="mt-3 mx-4 md:mx-24 items-center">
        <div className="flex flex-col md:flex-row flex-wrap gap-28 w-full p-4 md:p-7  rounded-lg items-center">
          <div className="flex flex-col gap-4 w-full md:w-auto bg-white p-5 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-blue-800">
                <RadioButtonCheckedIcon />
              </span>
              <span>Pick - UP</span>
            </div>

            <div className="flex flex-col md:flex-row flex-wrap gap-4 md:gap-10">
              <div className="flex flex-col gap-3">
                <span>Locations</span>
                <select
                  name="city"
                  id="city"
                  className="text-gray-400 w-full md:w-40  rounded-md px-2 py-1"
                >
                  <option value="city">Select your city</option>
                </select>
              </div>

              <div className="border-r-2 border-gray-300 h-16 md:h-auto"></div>

              <div className="flex flex-col gap-3">
                <span>Date</span>
                <select
                  name="date"
                  id="date"
                  className="text-gray-400 w-full md:w-40  rounded-md px-2 py-1"
                >
                  <option value="date">Select your date</option>
                </select>
              </div>

              <div className="border-r-2 border-gray-300 h-16 md:h-auto"></div>

              <div className="flex flex-col gap-3">
                <span>Time</span>
                <select
                  name="time"
                  id="time"
                  className="text-gray-400 w-full md:w-40  rounded-md px-2 py-1"
                >
                  <option value="time">Select your time</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex justify-start md:justify-center mt-4 md:mt-0 ">
            <div className="bg-[#3563E9] flex px-2 py-3 h-15 rounded-lg gap-1">
              <span className="text-white text-lg">
                <ArrowUpwardIcon />
              </span>
              <span className="text-white text-lg">
                <ArrowDownwardIcon />
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full md:w-auto mt-4 md:mt-0 bg-white p-5 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-blue-500">
                <RadioButtonCheckedIcon />
              </span>
              <span>Drop - Off</span>
            </div>

            <div className="flex flex-col md:flex-row flex-wrap gap-4 md:gap-10">
              <div className="flex flex-col gap-3">
                <span>Locations</span>
                <select
                  name="city"
                  id="city"
                  className="text-gray-400 w-full md:w-40  rounded-md px-2 py-1"
                >
                  <option value="city">Select your city</option>
                </select>
              </div>

              <div className="border-r-2 border-gray-300 h-16 md:h-auto"></div>

              <div className="flex flex-col gap-3">
                <span>Date</span>
                <select
                  name="date"
                  id="date"
                  className="text-gray-400 w-full md:w-40  rounded-md px-2 py-1"
                >
                  <option value="date">Select your date</option>
                </select>
              </div>

              <div className="border-r-2 border-gray-300 h-16 md:h-auto"></div>

              <div className="flex flex-col gap-3">
                <span>Time</span>
                <select
                  name="time"
                  id="time"
                  className="text-gray-400 w-full md:w-40  rounded-md px-2 py-1"
                >
                  <option value="time">Select your time</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-10 mx-30">
        <h2 className="text-gray-400 text-xl mb-4">Popular Car</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
          <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
            <div className="flex justify-between w-full">
              <div>
                <h3 className="text-lg font-semibold">BMW</h3>
                <span className="text-gray-500 text-sm">Sport</span>
              </div>
              <div>
                <span className="text-red-600">
                  <FavoriteIcon />
                </span>
              </div>
            </div>

            <img
              src={photo1}
              alt="BMW"
              className="w-80 h-40 object-cover rounded-md mb-4"
            />
            <div className="flex items-center justify-between w-full gap-5">
              <div className="flex items-center text-gray-400">
                <span>
                  <LocalGasStationIcon />
                </span>
                <span>90L</span>
              </div>
              <div className="flex items-center text-gray-400">
                <span>
                  <PiRadioButtonThin />
                </span>
                <span>Manual</span>
              </div>
              <div className="flex items-center text-gray-400">
                <span>
                  <MdPeople />
                </span>
                <span>2 People</span>
              </div>
            </div>
            <div className="flex w-full items-center justify-between">
              <div>
                <span className="text-xl font-semibold">$99.00/</span>
                <span> day</span>
              </div>
              <div>
                <button className="mt-4 bg-[#3563E9] text-white w-[134px] h-[50px] rounded-md flex justify-center items-center">
                  Rental Car
                </button>
              </div>
            </div>
          </div>

              <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
            <div className="flex justify-between w-full">
              <div>
                <h3 className="text-lg font-semibold">BMW</h3>
                <span className="text-gray-500 text-sm">Sport</span>
              </div>
              <div>
                <span className="text-red-600">
                  <FavoriteIcon />
                </span>
              </div>
            </div>

            <img
              src={photo1}
              alt="BMW"
              className="w-80 h-40 object-cover rounded-md mb-4"
            />
            <div className="flex items-center justify-between w-full gap-5">
              <div className="flex items-center text-gray-400">
                <span>
                  <LocalGasStationIcon />
                </span>
                <span>90L</span>
              </div>
              <div className="flex items-center text-gray-400">
                <span>
                  <PiRadioButtonThin />
                </span>
                <span>Manual</span>
              </div>
              <div className="flex items-center text-gray-400">
                <span>
                  <MdPeople />
                </span>
                <span>2 People</span>
              </div>
            </div>
            <div className="flex w-full items-center justify-between">
              <div>
                <span className="text-xl font-semibold">$99.00/</span>
                <span> day</span>
              </div>
              <div>
                <button className="mt-4 bg-[#3563E9] text-white w-[134px] h-[50px] rounded-md flex justify-center items-center">
                  Rental Car
                </button>
              </div>
            </div>
          </div>
              <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
            <div className="flex justify-between w-full">
              <div>
                <h3 className="text-lg font-semibold">BMW</h3>
                <span className="text-gray-500 text-sm">Sport</span>
              </div>
              <div>
                <span className="text-red-600">
                  <FavoriteIcon />
                </span>
              </div>
            </div>

            <img
              src={photo1}
              alt="BMW"
              className="w-80 h-40 object-cover rounded-md mb-4"
            />
            <div className="flex items-center justify-between w-full gap-5">
              <div className="flex items-center text-gray-400">
                <span>
                  <LocalGasStationIcon />
                </span>
                <span>90L</span>
              </div>
              <div className="flex items-center text-gray-400">
                <span>
                  <PiRadioButtonThin />
                </span>
                <span>Manual</span>
              </div>
              <div className="flex items-center text-gray-400">
                <span>
                  <MdPeople />
                </span>
                <span>2 People</span>
              </div>
            </div>
            <div className="flex w-full items-center justify-between">
              <div>
                <span className="text-xl font-semibold">$99.00/</span>
                <span> day</span>
              </div>
              <div>
                <button className="mt-4 bg-[#3563E9] text-white w-[134px] h-[50px] rounded-md flex justify-center items-center">
                  Rental Car
                </button>
              </div>
            </div>
          </div>
              <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
            <div className="flex justify-between w-full">
              <div>
                <h3 className="text-lg font-semibold">BMW</h3>
                <span className="text-gray-500 text-sm">Sport</span>
              </div>
              <div>
                <span className="text-red-600">
                  <FavoriteIcon />
                </span>
              </div>
            </div>

            <img
              src={photo1}
              alt="BMW"
              className="w-80 h-40 object-cover rounded-md mb-4"
            />
            <div className="flex items-center justify-between w-full gap-5">
              <div className="flex items-center text-gray-400">
                <span>
                  <LocalGasStationIcon />
                </span>
                <span>90L</span>
              </div>
              <div className="flex items-center text-gray-400">
                <span>
                  <PiRadioButtonThin />
                </span>
                <span>Manual</span>
              </div>
              <div className="flex items-center text-gray-400">
                <span>
                  <MdPeople />
                </span>
                <span>2 People</span>
              </div>
            </div>
            <div className="flex w-full items-center justify-between">
              <div>
                <span className="text-xl font-semibold">$99.00/</span>
                <span> day</span>
              </div>
              <div>
                <button className="mt-4 bg-[#3563E9] text-white w-[134px] h-[50px] rounded-md flex justify-center items-center">
                  Rental Car
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
