import { FiSearch } from "react-icons/fi";
import TuneIcon from "@mui/icons-material/Tune";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import { FaBars } from "react-icons/fa6";
import useSearchContext from "../context/SearchContext/searchContext";
import useSidebarContext from "../context/SideBarContext/sideBarContext";
import { useNavigate } from "react-router-dom";
import useFavorite from "../context/FavoriteContext/favoriteContext";

const Header = () => {
  const { searchValue, setSearchValue } = useSearchContext();
  const { setIsSidebarOpen } = useSidebarContext();
  const navigate = useNavigate();
  const { favorites } = useFavorite();

  return (
    <div className="w-full bg-white border-b border-gray-200 flex flex-col lg:flex-row justify-between items-stretch lg:items-center px-4 sm:px-8 lg:px-16 py-4 gap-3 fixed top-0 z-50 shadow-sm">
      <div className="flex w-full justify-between items-center sm:hidden mb-2">
        <span
          className="text-gray-600 p-2 border border-gray-300 rounded-full flex justify-center items-center cursor-pointer"
          onClick={() => setIsSidebarOpen(true)}
        >
          <FaBars />
        </span>
        <span
          onClick={() => navigate("/")}
          className="text-2xl font-semibold text-[#3563E9]"
        >
          MORENT
        </span>

        <img
          className="object-cover w-8 h-8 rounded-full"
          src="https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg"
          alt="user"
        />
      </div>
      <div className="flex flex-row flex-wrap md:flex-nowrap items-center gap-2 sm:gap-4 w-full lg:w-auto">
        <span
          onClick={() => navigate("/")}
          className="hidden sm:block text-2xl lg:text-3xl font-semibold text-[#3563E9]"
        >
          MORENT
        </span>
        <div className="relative flex-1 min-w-[220px] sm:min-w-[280px] md:min-w-[320px] lg:w-[492px]">
          <input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search something here"
            type="text"
            className="w-full h-[40px] sm:h-[44px] border border-gray-400 rounded-full pl-10 pr-10 sm:pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="absolute top-1/2 left-3 sm:left-4 -translate-y-1/2 text-lg text-gray-600">
            <FiSearch />
          </span>
          <span
            onClick={() => setIsSidebarOpen((prev) => !prev)}
            className="absolute top-1/2 right-3 sm:right-4 -translate-y-1/2 text-lg text-gray-600 cursor-pointer"
          >
            <TuneIcon />
          </span>
        </div>
        <div className="flex gap-4 justify-end w-auto whitespace-nowrap">
          <span
            onClick={() => navigate("/")}
            className="text-base md:text-lg lg:text-xl cursor-pointer text-blue-700"
          >
            Home
          </span>
          <span
            onClick={() => navigate("/cars")}
            className="text-base md:text-lg lg:text-xl cursor-pointer text-blue-700"
          >
            Cars
          </span>
        </div>
      </div>
      <div className="hidden sm:flex gap-2 sm:gap-4 lg:gap-5 items-center w-full lg:w-auto justify-end">
        <img
          className="object-cover w-8 h-8 rounded-full"
          src="https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg"
          alt="user"
        />
        <div className="relative">
          <span
            onClick={() => navigate("/favorites")}
            className="text-gray-600 p-1 border border-gray-300 rounded-full justify-center items-center cursor-pointer flex"
          >
            <FavoriteIcon />
          </span>
          {favorites.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-800 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {favorites.length}
            </span>
          )}
        </div>
        <span className="text-gray-600 p-1 border border-gray-300 rounded-full justify-center items-center cursor-pointer flex">
          <NotificationsIcon />
        </span>
        <span className="text-gray-600 p-1 border border-gray-300 rounded-full justify-center items-center cursor-pointer flex">
          <SettingsIcon />
        </span>
      </div>
    </div>
  );
};

export default Header;
