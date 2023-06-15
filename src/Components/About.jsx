import React from "react";
import Jesus1 from "../assets/jesus1.png";
import Jesus from "../assets/jesus4.png";

const About = () => {
  return (
    <section className="py-[50px] w-full bg-black">
      <div className="container grid lg:grid-cols-2 justify-between items-center gap-10">
        <article>
          <h1 className="md:text-6xl text-6xl font-bold">
            about the <span className="text-orange-500">holy</span> raptor gang
          </h1>{" "}
          <img src={Jesus} alt="" className="md:hidden" />
          <div className="flex flex-col gap-4 mt-14">
            <p className="text-xl">
              <span className="text-orange-500">According</span> to the beliefs
              of some, God created the holy raptor as a powerful and majestic
              creature. The raptor was designed to be a symbol of strength,
              courage, and wisdom. It was also created to be a protector of the
              natural world and all its inhabitants.
            </p>

            <p className="text-xl">
              <span className="text-orange-500">God</span> imbued the raptor
              with incredible speed, agility, and intelligence. Its sharp talons
              and powerful beak were designed to help it hunt and defend itself
              against predators. Its keen eyesight and hearing allowed it to
              detect prey from great distances.
            </p>
            <p className="text-xl">
              As the holy raptor soared through the skies, it became a symbol of
              God's power and majesty. Its beauty and grace inspired awe and
              reverence in all who beheld it. And as it hunted and protected the
              natural world, it became a symbol of God's love and care for all
              of creation.
            </p>
            <p className="text-xl">
              In some traditions, the holy raptor is also seen as a symbol of
              spiritual transformation and rebirth. Just as the raptor sheds its
              old feathers and grows new ones, so too can humans shed their old
              ways and be transformed into something new and beautiful.
            </p>
            <p className="text-xl">
              Overall, the holy raptor is a powerful symbol of God's love,
              power, and wisdom, and a reminder of our own potential for
              transformation and growth.
            </p>
          </div>
        </article>
        <img src={Jesus1} alt="" />
      </div>
    </section>
  );
};

export default About;
