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
            The Holy Raptor Gang was formed as a powerful and majestic united
            force. Originating in 2006 from the most controversial memes in
            4chan history.
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
