const Footer = () => {
  return (
    <div className="bg-white mt-20 px-4 md:px-32 py-10">
      <div className="flex flex-col md:flex-row justify-between flex-wrap gap-10">
        <div className="mb-10 md:mb-0">
          <span className="text-2xl sm:text-3xl font-semibold text-[#3563E9]">
            MORENT
          </span>
          <p className="text-gray-500 mt-2 w-70">
            Our vision is to provide convenience and help increase your sales
            business.
          </p>
        </div>

        <div className="flex flex-wrap gap-10 md:gap-20 ">
          <div className="flex flex-col gap-5">
            <span className="font-semibold">About</span>
            <span className="text-gray-500 ">How it works</span>
            <span className="text-gray-500 ">Featured</span>
            <span className="text-gray-500 ">Partnership</span>
            <span className="text-gray-500 ">Business Relation</span>
          </div>

          <div className="flex flex-col gap-5">
            <span className="font-semibold">Community</span>
            <span className="text-gray-500 ">Events</span>
            <span className="text-gray-500 ">Blog</span>
            <span className="text-gray-500 ">Podcast</span>
            <span className="text-gray-500 "> Invite a frined</span>
          </div>

          <div className="flex flex-col gap-5">
            <span className="font-semibold">Socials</span>
            <span className="text-gray-500 ">Discord</span>
            <span className="text-gray-500 ">Instagram</span>
            <span className="text-gray-500 ">Twittew</span>
            <span className="text-gray-500 "> Facebook</span>
          </div>
        </div>
      </div>
      <div className="border-t border-t-gray-200 mt-10 pt-10">
        <div className="flex justify-between w-full">


        <div>
          <span className="text-gray-600">
            © 2022 MORENT. All rights reserved.
          </span>
        </div>
        <div className="flex gap-5">
          <span>Privacy & Policy</span>
          <span>Terms & Condition</span>
        </div>
              </div>
      </div>
    </div>
  );
};

export default Footer;
