import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import Carousel from "../../helpers/Carousel";
import ProductCard from "../Products/ProductCard";

const featuredProducts = [
  {
    image: "/images/products/flusher.png",
    name: "Flusher",
    price: "200",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel magnam unde ducimus, sit optio dolorem quo facere sunt harum reiciendis eligendi voluptates.",
    reviewCount: 50,
  },
  {
    image: "/images/products/tea.png",
    name: "Tea",
    price: "200",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel magnam unde ducimus, sit optio dolorem quo facere sunt harum reiciendis eligendi voluptates.",
    reviewCount: 50,
  },
  {
    image: "/images/products/honey.png",
    name: "Honey",
    price: "200",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel magnam unde ducimus, sit optio dolorem quo facere sunt harum reiciendis eligendi voluptates.",
    reviewCount: 50,
  },
];
const productVerification = [
  {
    name: "nafdac",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel magnam unde ducimus, sit optio dolorem quo facere sunt harum reiciendis eligendi voluptates laboriosam accusamus inventore iste tempore temporibus obcaecati. Eius.",
    image: "/images/LandingPage/nafdacVerification.png",
  },
  {
    name: "nafdac",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel magnam unde ducimus, sit optio dolorem quo facere sunt harum reiciendis eligendi voluptates laboriosam accusamus inventore iste tempore temporibus obcaecati. Eius.",
    image: "/images/LandingPage/nafdacVerification.png",
  },
  {
    name: "son",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel magnam unde ducimus, sit optio dolorem quo facere sunt harum reiciendis eligendi voluptates laboriosam accusamus inventore iste tempore temporibus obcaecati. Eius.",
    image: "/images/LandingPage/sonVerification.png",
  },
  {
    name: "son",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel magnam unde ducimus, sit optio dolorem quo facere sunt harum reiciendis eligendi voluptates laboriosam accusamus inventore iste tempore temporibus obcaecati. Eius.",
    image: "/images/LandingPage/sonVerification.png",
  },
];

const Hero = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-4 py-4">
          {/* Left side texts*/}
          <div className="flex gap-8 p-8 justify-center items-center flex-2">
            {/* Rooted */}
            <div>
              <span className="block text-2xl lg:text-6xl font-black font-nunito text-ask-primary tracking-wider italic">
                Rooted in Nature, <br />
                Built for Wellness.
              </span>
              <span className="text-sm lg:text-2xl mb-6 mt-2 block tracking-wider font-medium">
                Our trusted herbs to help your body <br /> reset, cleanse and
                restore naturally.
              </span>
              <div className="flex flex-col sm:flex-row gap-4 py-6 items-center">
                <Link className="rounded-4xl px-6 py-3 lg:text-2xl text-white bg-ask-primary">
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
          <div className="relative flex-1 p-4">
            <Carousel />
          </div>
        </div>
      </div>
      {/* Accolades */}
      <div className="bg-gray-100 grid grid-cols-2 lg:grid-cols-4 gap-8 items-center py-8 px-8 w-full text-center">
        {/* Cured thousands icon */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <img
            src="/icons/HeroSection/seedling.svg"
            className="w-12 h-12 text-green-500"
            alt="Seedling"
          />
          <p className="text-2xl font-bold leading-tight">
            1000+
            <span className="block text-sm font-light tracking-tighter">
              CURED BY THOUSANDS
            </span>
          </p>
        </div>

        {/* Leaf Natural */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <img
            src="/icons/HeroSection/leafCorrect.svg"
            className="w-12 h-12 text-green-500"
            alt="Leaf Natural"
          />
          <p className="text-2xl font-bold leading-tight">
            100%
            <span className="block text-sm font-light tracking-tighter">
              NATURAL NO CHEMICAL
            </span>
          </p>
        </div>

        {/* NAFDAC icon */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <img
            src="/icons/HeroSection/nafdacMarked.svg"
            className="w-12 h-12 text-green-500"
            alt="NAFDAC"
          />
          <p className="text-2xl font-bold leading-tight">
            NAFDAC
            <span className="block text-sm font-light tracking-tighter">
              APPROVED
            </span>
          </p>
        </div>

        {/* Awards icon */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <img
            src="/icons/HeroSection/medal.svg"
            className="w-12 h-12 text-green-500"
            alt="Awards"
          />
          <p className="text-2xl font-bold leading-tight">
            100+
            <span className="block text-sm font-light tracking-tighter">
              AWARDS
            </span>
          </p>
        </div>
      </div>

      {/* New Arrivals */}
      <div className="flex flex-col items-center justify-center my-10 gap8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 p-10 justify-stretch">
          {featuredProducts.map((prod, index) => (
            <ProductCard
              key={index}
              name={prod.name}
              image={prod.image}
              description={prod.description}
              price={prod.price}
              reviewCount={prod.reviewCount}
            />
          ))}
        </div>
        <Link
          to="/products"
          className="text-center text-ask-secondary text-xl font-semibold"
        >
          View All
        </Link>
      </div>

      {/* Product verification */}
      <div className="text-center py-8 px-8 bg-amber-100">
        <h2 className="font-bold text-2xl font-nunito text-ask-secondary italic tracking-wide">
          Premium & Verified Products
        </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center  w-full my-10 text-center">
          {productVerification.map((prod, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center gap-4"
            >
              <div className="p-4 text-center">
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="w-auto h-[100px]"
                />
              </div>
              <p className="text-sm tracking-tight text-center">
                {prod.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
