import React from "react";
import { copyrightSign } from "../assets/icons";
import { footerLinks, socialMedia } from "../utils/constants";
import { spidgeniusremovebg } from "../assets/index";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className=" bg-black px-[64px] py-[40px] max-md:px-[20px]"
      id="contactUs"
    >
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col ">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={spidgeniusremovebg} alt="logo" width={150} height={46} />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Join us in redefining the landscape of dispatch, travel, and
            publishing. Let Spidgenius be your companion.
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia?.map((icon, index) => {
              return (
                <div
                  className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
                  key={index}
                >
                  <img src={icon?.src} alt={icon?.alt} width={24} height={24} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-1 justify-around lg:gap-10 gap-20 flex-wrap max-md:justify-start">
          {footerLinks?.map((section, index) => {
            return (
              <div key={index}>
                <h4 className="text-white">{section?.title}</h4>
                <ul>
                  {section?.links?.map((link, index) => {
                    return (
                      <li
                        key={index}
                        className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer"
                      >
                        <Link
                          to={link?.link}
                          target={
                            link?.name === "+2348090987851" ? "_blank" : ""
                          }
                        >
                          {link?.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="copyright"
            width={20}
            height={20}
            className="rounded-full m-0"
          />{" "}
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer max-md:mt-[20px]">
          Terms & Conditions
        </p>
      </div>
    </footer>
  );
};

export default Footer;
