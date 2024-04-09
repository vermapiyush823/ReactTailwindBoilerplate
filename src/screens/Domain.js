import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import des1 from "../assets/des-1.svg";
import des2 from "../assets/des-2.svg";
import des3 from "../assets/des-3.svg";
import Button from "../components/button";

const domainOptions = [
  {
    id: 1,
    image: des1,
    text: "I'm a designer looking to share my work",
    description:
      "Dribbble is the world’s leading community for creatives to share, grow, and get hired.",
  },
  {
    id: 2,
    image: des2,
    text: "I'm looking to hire a designer",
    description:
      "Find the perfect designer for your project and collaborate on our platform which is built for design.",
  },
  {
    id: 3,
    image: des3,
    text: "I'm looking for design inspiration",
    description:
      "With over 7 million shots from a vast community of designers, Dribbble is the leading source for design inspiration.",
  },
];

const Domain = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (id) => {
    setSelectedOption(id);
  };

  return (
    <>
      <div className="m-10">
        <Link
          to="/profile-setup"
          className="p-3 bg-gray-100 h-3 w-3 rounded-md"
        >
          <ChevronLeftIcon className="" />
        </Link>
      </div>
      <div className="flex flex-col items-center">
        <div className="mb-4 text-center text-3xl font-bold">
          What brings you to Dribbble?
        </div>
        <div className="mb-8 text-center text-gray-600">
          Select the options that best describe you. Don't worry, you can
          explore other options later.
        </div>
        <div className="flex flex-wrap md:gap-10 mt-24 items-center justify-center">
          {domainOptions.map((option) => (
            <div
              key={option.id}
              onClick={() => handleOptionClick(option.id)}
              className={`px-5 rounded-2xl cursor-pointer ${
                selectedOption === option.id
                  ? "border-[3px] border-pink-500"
                  : "bg-white"
              }   w-80 h-80 relative mb-12`}
            >
              <div
                className={`${
                  selectedOption === option.id
                    ? "transform translate-y-[-50px]"
                    : ""
                } flex flex-col items-center justify-center w-full h-full transition-transform duration-300 ease-in-out`}
              >
                <img src={option.image} alt="design" className="w-48 h-48" />
                <p className="text-xl font-bold text-center text-gray-800 mt-1">
                  {option.text}
                </p>
                {selectedOption !== option.id && (
                  <div className="w-6 h-6 border border-gray-300 rounded-full mt-2"></div>
                )}
                {selectedOption === option.id && (
                  <div className="text-md text-gray-600 mt-4 text-center">
                    {option.description}
                  </div>
                )}
                {selectedOption === option.id && (
                  <div>
                    <svg
                      className="w-7 h-7 text-pink-500  z-10"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="md:mt-16 mb-4 text-xl font-bold text-gray-700">
          Anything else? You can select multiple
        </div>
        <Link to="/verification">
          <Button text={"Finish"} />
        </Link>
        <div className="mt-2 text-sm text-gray-600">or Press RETURN</div>
      </div>
    </>
  );
};

export default Domain;
