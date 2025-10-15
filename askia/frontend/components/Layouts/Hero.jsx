import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import Carousel from "../../helpers/Carousel";
import ProductCard from "../Products/ProductCard";
import FAQSection from "../../helpers/FaqSection";
import { dummyCovid, faqs, reviewsData } from "../../helpers/data";
import ReviewCard from "../../helpers/ReviewCard";
import WellbeingCard from "../../helpers/Wellbeing";

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
const whyAskImage = ["/images/LandingPage/greenGrass.png"];

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
      <div className="text-center bg-gray-100 py-8 px-8">
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

      {/* Why Askia Remedies */}
      <div className="my-8 mx-8 sm:mx-16 lg:mx-42 h-auto min-h-[100px]  text-center">
        <h2 className="text-ask-secondary text-2xl font-nunito font-bold my-4">
          Why Askia Remedies
        </h2>
        <div className="relative">
          <Carousel
            autoScroll={true}
            images={whyAskImage}
            height={300}
            hasBodyNav={true}
          />
          <div className="absolute z-0 flex flex-col items-center justify-center font-nunito inset-0">
            <p className="text-md sm:text-2xl mb-8 font-bold text-white">
              Pure, Organic Solutions
            </p>
            <p className="text-sm sm:text-xl text-white font-light">
              Our products are crafted <br /> with natural,
              <br className="hidden sm:block" /> organic ingredients to support
              your health and wellness.
            </p>
            <div className="p-2 my-4">
              <img
                src="/icons/HeroSection/greenGrassIcon.svg"
                alt="green grass icon"
                className="w-12 h-12"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 my-4">
        <FAQSection faqs={faqs} />
      </div>

      {/* Discount */}
      <div className=" flex flex-col sm:flex-row py-4 px-16 my-4 justify-center items-center">
        <div className="flex flex-col justify-center items-start sm:flex-2 text-ask-primary font-nunito">
          <p className="font-black text-md mb-2 sm:text-xl tracking-wide ">
            Get 20% off
          </p>
          <p className="text-sm">On your first order from our website</p>
        </div>
        <button className="w-full mx-8 py-1 px-4 sm:flex-1 bg-ask-primary text-white rounded-xl">
          Claim your offer
        </button>
      </div>

      {/* Review Section */}
      <div className="bg-gray-100 my-10 py-4">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-nunito font-black text-ask-primary dark:text-white">
            What the cured are saying
          </h2>
          <h3 className="mt-2 text-lg text-black font-nunito dark:text-gray-300">
            Over <span className="font-black">10,000</span> people cured by our
            products
          </h3>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-gray-50">
          <ReviewCard reviews={reviewsData} />
        </div>
      </div>

      {/* Secret of wellbeing */}
      <div className="my-10 py-4">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-nunito font-black text-ask-primary dark:text-white">
            Unlock the secrets of wellbeing
          </h2>
          <h3 className="mt-2 text-lg text-black font-nunito dark:text-gray-300">
            Your guide to a healthier and happier life
          </h3>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-gray-50">
          {dummyCovid.map((cov, index) => (
            <WellbeingCard key={index} data={cov} />
          ))}
        </div>
      </div>

      {/* Daily Health & Wellness advice */}
      <div className="my-10 py-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-nunito font-black text-ask-primary dark:text-white">
            Daily Health & Wellness Advice
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
            Stay informed and motivated with daily wellness insights, helpful
            tips, and expert advice to keep you healthy and inspired.
          </p>
        </div>

        {/* Local Video Section */}
        <div className="bg-gray-50 p-6 rounded-xl shadow-sm my-8 mx-4 sm:mx-8">
          <div className="max-w-5xl mx-auto">
            <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-neutral-700">
              <video
                className="w-full h-full object-cover"
                src="/videos/health-tips.mp4"
                controls
                poster="/images/LandingPage/wellnessAdvice.png"
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="text-center text-gray-500 dark:text-gray-400 text-sm mt-3">
              Watch our latest wellness advice video
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
