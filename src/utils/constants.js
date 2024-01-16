import { DeliveryBlue, TravelBlue, printBlue, truckFast } from "../assets";
import { facebook, instagram, twitter } from "../assets/icons";

export const services = [
  {
    imgURL: DeliveryBlue,
    label: "Logistics",
    subtext: ["Pickup", "Delivery", "Errands"],
    link: "/dispatch",
  },
  {
    imgURL: printBlue,
    label: "Printing and Publishing",
    subtext: ["Graphics design", "General printing"],
    link: "/publishing",
  },
  {
    imgURL: TravelBlue,
    label: "Transport",
    subtext: ["Interstate travelling", "Hire me (Vehicle)"],
    link: "/travels",
  },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/dispatch", label: "Logistice" },
  { href: "/publishing", label: "Printing & Publishing" },
  { href: "/travels", label: "Transport" },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Dispatch services", link: "/dispatch" },
      { name: "Design and publishing", link: "/publishing" },
      { name: "Interstate travels", link: "/travels" },
    ],
  },

  {
    title: "Get in touch",
    links: [
      { name: "customer@nike.com", link: "mailto:customer@nike.com" },
      { name: "+2348090987851", link: "https://wa.me/+2348090987851" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
