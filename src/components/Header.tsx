import { FiSearch } from "react-icons/fi";
import TuneIcon from "@mui/icons-material/Tune";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import { FaBars } from "react-icons/fa6";
import useSearchContext from "../context/SearchContext/searchContext";

const Header = () => {

  const { searchValue, setSearchValue } = useSearchContext();
  return (
    <div className="w-full border border-gray-200 bg-white flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 md:px-16 py-4 gap-3">
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-4 w-full sm:w-auto">
        <span className="text-2xl sm:text-3xl font-semibold text-[#3563E9] order-2 sm:order-none mt-2 sm:mt-0 text-center sm:text-left">
        MORENT
      </span>


      {/* Поиск */}
      <div className="relative w-full sm:w-[492px] order-3 sm:order-none mt-2 sm:mt-0">
        <input
        value={searchValue}
        onChange={(e)=>setSearchValue(e.target.value)}
          placeholder="Search something here"
          type="text"
          className="w-full sm:w-[492px] h-[40px] sm:h-[44px] border border-gray-400 rounded-full pl-10 pr-10 sm:pr-12"
        />
        <span className="absolute top-1/2 left-3 sm:left-4 -translate-y-1/2 text-lg text-gray-600">
          <FiSearch />
        </span>
        <span className="absolute top-1/2 right-3 sm:right-4 -translate-y-1/2 text-lg text-gray-600">
          <TuneIcon />
        </span>
      </div>
      </div>
      {/* Иконки действий */}
      <div className="flex gap-2 sm:gap-5 items-center order-first sm:order-none w-full sm:w-auto justify-between sm:justify-end">
        {/* Бургер и фото всегда видны */}
        <span className="text-gray-600 p-1 border border-gray-300 rounded-full flex justify-center items-center sm:hidden">
          <FaBars />
        </span>

        <img
          className="object-cover w-8 h-8 rounded-full"
          src="https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg"
          alt="user"
        />

        {/* Остальные иконки: скрыты на мобильных, видны на sm+ */}
        <span className="text-gray-600 p-1 border border-gray-300 rounded-full flex justify-center items-center hidden sm:flex">
          <FavoriteIcon />
        </span>
        <span className="text-gray-600 p-1 border border-gray-300 rounded-full flex justify-center items-center hidden sm:flex">
          <NotificationsIcon />
        </span>
        <span className="text-gray-600 p-1 border border-gray-300 rounded-full flex justify-center items-center hidden sm:flex">
          <SettingsIcon />
        </span>
      </div>
    </div>
    
  );
};

export default Header;
