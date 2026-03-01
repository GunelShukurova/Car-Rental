const Footer = () => {
  return (
<footer className="bg-white px-4 sm:px-10 md:px-32 py-10 w-full">
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
            <ul className="text-gray-500 text-sm sm:text-base space-y-1">
              <li>How it works</li>
              <li>Featured</li>
              <li>Partnership</li>
              <li>Business Relation</li>
            </ul>
          </div>
          <div className="flex flex-col gap-5 min-w-[120px]">
            <span className="font-semibold">Community</span>
            <ul className="text-gray-500 text-sm sm:text-base space-y-1">
              <li>Events</li>
              <li>Blog</li>
              <li>Podcast</li>
              <li>Invite a friend</li>
            </ul>
          </div>
          <div className="flex flex-col gap-5 min-w-[120px]">
            <span className="font-semibold">Socials</span>
            <ul className="text-gray-500 text-sm sm:text-base space-y-1">
              <li>Discord</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Facebook</li>
            </ul>
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
          <ul className="flex gap-5 text-gray-600 text-sm sm:text-base flex-wrap justify-center">
            <li>Privacy & Policy</li>
            <li>Terms & Condition</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
