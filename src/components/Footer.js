import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import XIcon from "@mui/icons-material/X";
import React from "react";

const socialMedia = [FacebookIcon, XIcon, InstagramIcon, PinterestIcon];

const linkHeading = [
  "For designers",
  "Hire Designers",
  "Company",
  "Directories",
  "Design resources",
];
const linkArray = [
  [
    "Go Pro!",
    "Explore design work",
    "Design blog",
    "Overtime podcast",
    "Playoffs",
    "Weekly Warm-Up",
    "Refer a Friend",
    "Code of conduct",
  ],
  ["Post a job opening", "Post a freelance project", "Search for designers"],
  [
    "About",
    "Careers",
    "Support",
    "Media kit",
    "Testimonials",
    "API",
    "Terms of service",
    "Privacy policy",
    "Cookie policy",
  ],
  [
    "Design jobs",
    "Designers for hire",
    "Freelance designers for hire",
    "Tags",
    "Places",
    "Design assets",
    "Dribbble Marketplace",
  ],
  [
    "Freelancing",
    "Design Hiring",
    "Design Portfolio",
    "Design Education",
    "Creative Process",
    "Design Industry Trends",
    "Creative Market",
    "Fontspring",
    "Font Squirrel",
  ],
];

const Footer = () => {
  return (
    <footer className="flex flex-col mt-20 px-14 pt-16 bg-neutral-100">
      <div className="flex pb-16 flex-col gap-10 md:flex-row">
        <div className="flex flex-col  md:w-1/5">
          <a href="#" className="text-lg font-bold text-pink-500 mr-2">
            dribbble.
          </a>
          <p className="text-gray-600 py-5">
            Dribbble is the world's leading community for creatives to share,
            grow, and get hired.
          </p>
          <ul className="flex gap-5">
            {socialMedia.map((Icon, index) => (
              <li key={index} className="text-gray-600 hover:text-gray-800">
                <Icon />
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-wrap w-full md:w-4/5 md:gap-10">
          {linkHeading.map((heading, index) => (
            <div key={index} className="flex flex-col w-1/2 md:w-1/5  lg:w-1/6">
              <h1 className="text-lg font-bold text-gray-800 mb-2">
                {heading}
              </h1>
              <ul>
                {linkArray[index].map((link, index) => (
                  <li
                    key={index}
                    className="flex md:flex-col hover:cursor-pointer text-gray-500 hover:text-gray-800 mb-2"
                  >
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t p-10 flex justify-between gap-10">
        <p className="text-gray-500 mb-2 text-sm md:text-lg">
          &copy; 2023 Dribbble. All rights reserved.
        </p>
        <p className="text-gray-500 text-sm md:text-lg">
          <span className="text-gray-700 font-bold ">1,234,567</span> shots
          dribbbled
        </p>
      </div>
    </footer>
  );
};

export default Footer;
