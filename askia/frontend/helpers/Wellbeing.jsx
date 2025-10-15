import { Link } from "react-router-dom";

const WellbeingCard = ({ data }) => {
  return (
    <div className="flex flex-col justify-start items-start bg-white dark:bg-neutral-900 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
      {/* Image Section */}
      <div className="w-full h-[180px] sm:h-[250px]">
        <img
          src={data.image}
          alt={data.name}
          loading="lazy"
          className="w-full h-full object-contain rounded-t-2xl transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-2 capitalize">
          {data.name}
        </h3>

        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-justify">
          {data.description}
        </p>

        <Link
          to={data.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center font-semibold text-ask-primary hover:text-ask-secondary transition-colors duration-200"
        >
          <span className="underline underline-offset-4">Learn More</span>
          <span className="ml-1 text-lg">→</span>
        </Link>
      </div>
    </div>
  );
};

export default WellbeingCard;
