import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import Carousel from "../../helpers/Carousel";

const Hero = () => {
  return (
    <section className="container mx-auto">
      <div className="flex flex-col md:flex-row gap-4 py-4">
        {/* Left side texts*/}
        <div className="flex gap-4 py-8 justify-center items-center flex-2">
          {/* Rooted */}
          <div>
            <span className="block text-6xl font-black font-nunito text-ask-primary tracking-wider line italic">
              Rooted in Nature, <br />
              Built for Wellness.
            </span>
            <span className="text-2xl tracking-wider font-medium">
              Our trusted herbs to help your body <br /> reset, cleanse and
              restore naturally.
            </span>
            <div className="flex gap-4 py-6 items-center">
              <Link className="rounded-4xl px-6 py-3 text-2xl text-white bg-ask-primary">
                Explore Our Remedies
              </Link>
              <p className="flex gap-6 justify-start items-center">
                <span className="text-md block">
                  <span className="font-bold">Not sure where to start?</span>
                  <br />
                  Tell us how you're feeling.
                </span>
                <span className="bg-ask-primary rounded-full p-3">
                  <FaWhatsapp className="h-8 w-8 text-white hover:text-green-400 transition" />
                </span>
              </p>
            </div>
          </div>
        </div>
        {/* Hero Carousel */}
        <div className="relative flex-1">
          <Carousel has />
        </div>
      </div>
    </section>
  );
};

export default Hero;
