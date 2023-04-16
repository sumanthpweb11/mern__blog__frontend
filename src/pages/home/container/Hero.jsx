import { BiSearch } from "react-icons/bi";
import { Images } from "../../../constants";

const Hero = () => {
  return (
    <section className="container mx-auto flex flex-col px-5 py-5 lg:flex-row lg:gap-1">
      {/* LEFT SIDE -- HERO IMAGE FOR LARGE DEVIVES */}
      <div className="mt-10 lg:w-1/2 ">
        <h1 className="font-roboto text-3xl text-center font-bold text-dark-soft md:text-5xl lg:text-4xl xl:text-5xl lg:text-left lg:max-w-[540px]">
          Read The most Interesting Articles
        </h1>
        <p className="text-dark-light mt-4 text-center md:text-xl lg:text-base xl:text-xl lg:text-left">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo rerum
          magni, beatae assumenda nostrum minima omnis incidunt nisi esse soluta
          quibusdam odio optio impedit nulla.
        </p>
        {/* INPUT */}
        <div className="flex flex-col px-1 gap-y-2.5 lg:mt-6 xl:mt-10 mt-10 relative">
          <div className="relative">
            <BiSearch className="absolute left-3 top-2 -transalate-y-1/2 w-6 h-6 text-[#959EAD] " />
            <input
              className="placeholder:font-bold font-semibold text-dark-soft placeholder:text-[#959EAD] rounded-lg pl-12 pr-3 w-full py-2 md:py-3 focus:outline-none shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] "
              type="text"
              placeholder="Search article..."
            />
          </div>
          <button className="w-full bg-primary text-white font-semibold rounded-lg px-5 py-2 md:absolute md:right-2 md:top-1 md:-transalate-y-1/2 md:w-fit md:py-2">
            Search
          </button>
        </div>
        {/* INPUT */}

        {/* POPULAR TAGS */}
        <div className="mt-4 px-1 flex flex-col lg:items-center lg:flex-row lg:flex-nowrap lg:gap-x-4 lg:mt-7">
          <span className="text-dark-light font-semibold italic lg:text-sm xl:text-base">
            Popular Tags
          </span>
          <ul className="flex flex-wrap gap-x-2.5 gap-y-2.5 mt-3 lg:text-sm xl:text-base">
            <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
              Design
            </li>
            <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
              User Interfaces
            </li>
            <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
              User Experiences
            </li>
          </ul>
        </div>
        {/* POPULAR TAGS */}
      </div>
      {/* LEFT SIDE -- HERO IMAGE FOR LARGE DEVIVES */}
      {/* RIGHT SIDE -- HERO IMAGE FOR LARGE DEVIVES */}
      <div className="hidden lg:block lg:w-1/2 ">
        <img
          className="w-full"
          src={Images.Hero}
          alt="users are reading articles"
        />
      </div>
      {/* RIGHT SIDE -- HERO IMAGE FOR LARGE DEVIVES */}
    </section>
  );
};

export default Hero;
