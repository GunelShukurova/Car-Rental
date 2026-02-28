import { FiSearch } from "react-icons/fi";
import TuneIcon from "@mui/icons-material/Tune";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";

const Header = () => {
  return (
    <div className="w-full h-[104px] border border-gray-200 bg-white flex justify-between items-center px-4 sm:px-8 md:px-16">
      <div className="flex gap-4 sm:gap-6 md:gap-10 flex-1 relative">
        <span className="text-2xl sm:text-3xl font-semibold text-[#3563E9]">MORENT</span>
        <input
          placeholder="Search something here"
          type="text"
          className="flex-1 sm:flex-none w-full sm:w-[492px] h-[40px] sm:h-[44px] border border-gray-400 rounded-full px-10"
        />
        <span className="absolute top-1/2 left-14 sm:left-45 -translate-y-1/2 text-lg text-gray-600">
          <FiSearch />
        </span>
        <span className="absolute top-1/2 left-[145px] sm:left-[620px] -translate-y-1/2 text-lg text-gray-600">
          <TuneIcon />
        </span>
      </div>
      <div className="flex gap-2 sm:gap-5 items-center">
        <span className="text-gray-600 p-1 border border-gray-300 rounded-full flex justify-center items-center">
          <FavoriteIcon />
        </span>
        <span className="text-gray-600 p-1 border border-gray-300 rounded-full flex justify-center items-center">
          <NotificationsIcon />
        </span>
        <span className="text-gray-600 p-1 border border-gray-300 rounded-full flex justify-center items-center">
          <SettingsIcon />
        </span>
        <img
          className="object-cover w-8 h-8 rounded-full"
          src="https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;