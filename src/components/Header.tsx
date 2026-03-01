import { FiSearch } from "react-icons/fi";
import TuneIcon from "@mui/icons-material/Tune";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import { FaBars } from "react-icons/fa6";
import useSearchContext from "../context/SearchContext/searchContext";
import useSidebarContext from "../context/SideBarContext/sideBarContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { searchValue, setSearchValue } = useSearchContext();
  const { setIsSidebarOpen } = useSidebarContext();
  const navigate = useNavigate();

  return (
    <div className="w-full bg-white border-b border-gray-200 flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 md:px-16 py-4 gap-3 fixed top-0 z-50 shadow-sm">
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-4 w-full sm:w-auto">
        <span className="text-2xl sm:text-3xl font-semibold text-[#3563E9] order-1 text-center sm:text-left">
          MORENT
        </span>
        <span
          onClick={() => navigate("/cars")}
          className="text-xl cursor-pointer text-blue-700 order-2 mt-2 sm:mt-0 text-center sm:text-left"
        >
          Cars
        </span>
        <div className="relative w-full sm:w-[492px] order-3 mt-2 sm:mt-0">
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
      </div>
      <div className="flex gap-2 sm:gap-5 items-center order-first sm:order-none w-full sm:w-auto justify-between sm:justify-end mt-2 sm:mt-0">
        <span className="text-gray-600 p-1 border border-gray-300 rounded-full flex justify-center items-center sm:hidden cursor-pointer">
          <FaBars onClick={() => setIsSidebarOpen(true)} />
        </span>
        <img
          className="object-cover w-8 h-8 rounded-full"
          src="https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg"
          alt="user"
        />
        <span className="hidden sm:flex text-gray-600 p-1 border border-gray-300 rounded-full justify-center items-center cursor-pointer">
          <FavoriteIcon />
        </span>
        <span className="hidden sm:flex text-gray-600 p-1 border border-gray-300 rounded-full justify-center items-center cursor-pointer">
          <NotificationsIcon />
        </span>
        <span className="hidden sm:flex text-gray-600 p-1 border border-gray-300 rounded-full justify-center items-center cursor-pointer">
          <SettingsIcon />
        </span>
      </div>
    </div>
  );
};

export default Header;