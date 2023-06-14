import React from "react";
import Logo from "../assets/logo.png";

const Hero = () => {
  return (
    <section className="py-[100px] w-full ">
      <div className="container grid gap-10 lg:grid-cols-2 justify-between items-center">
        <article className="flex flex-col gap-4">
          <h1 className="md:text-8xl text-7xl font-bold">
            Holy <span className="text-orange-500">Raptor</span> Gang
          </h1>
          <p className="font-lato text-xl">
            According to the beliefs of some, God created the holy raptor as a
            powerful and majestic creature. The raptor was designed to be a
            symbol of strength, courage, and wisdom. It was also created to be a
            protector of the natural world and all its inhabitants.
          </p>

          <a
            href=""
            className="px-6 py-2 bg-transparent border-2 border-orange-500 w-max text-3xl text-orange-500"
          >
            ape now
          </a>
        </article>
        <img src={Logo} alt="" className="rounded-full" />
      </div>
    </section>
  );
};

export default Hero;
