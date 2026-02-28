const Footer = () => {
  return (
    <div className="bg-white mt-20 px-4 sm:px-10 md:px-32 py-10">
      <div className="flex flex-col md:flex-row justify-between flex-wrap gap-10">
        <div className="mb-10 md:mb-0 max-w-full md:max-w-xs">
          <span className="text-2xl sm:text-3xl font-semibold text-[#3563E9]">
            MORENT
          </span>
          <p className="text-gray-500 mt-2 text-sm sm:text-base">
            Our vision is to provide convenience and help increase your sales
            business.
          </p>
        </div>

        <div className="flex flex-wrap gap-10 md:gap-20 w-full md:w-auto">
          <div className="flex flex-col gap-5 min-w-[120px]">
            <span className="font-semibold">About</span>
            <span className="text-gray-500 text-sm sm:text-base">How it works</span>
            <span className="text-gray-500 text-sm sm:text-base">Featured</span>
            <span className="text-gray-500 text-sm sm:text-base">Partnership</span>
            <span className="text-gray-500 text-sm sm:text-base">Business Relation</span>
          </div>

          <div className="flex flex-col gap-5 min-w-[120px]">
            <span className="font-semibold">Community</span>
            <span className="text-gray-500 text-sm sm:text-base">Events</span>
            <span className="text-gray-500 text-sm sm:text-base">Blog</span>
            <span className="text-gray-500 text-sm sm:text-base">Podcast</span>
            <span className="text-gray-500 text-sm sm:text-base">Invite a friend</span>
          </div>

          <div className="flex flex-col gap-5 min-w-[120px]">
            <span className="font-semibold">Socials</span>
            <span className="text-gray-500 text-sm sm:text-base">Discord</span>
            <span className="text-gray-500 text-sm sm:text-base">Instagram</span>
            <span className="text-gray-500 text-sm sm:text-base">Twitter</span>
            <span className="text-gray-500 text-sm sm:text-base">Facebook</span>
          </div>
        </div>
      </div>

      <div className="border-t border-t-gray-200 mt-10 pt-10">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            <span className="text-gray-600 text-sm sm:text-base">
              © 2022 MORENT. All rights reserved.
            </span>
          </div>
          <div className="flex gap-5 text-gray-600 text-sm sm:text-base flex-wrap justify-center">
            <span>Privacy & Policy</span>
            <span>Terms & Condition</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;