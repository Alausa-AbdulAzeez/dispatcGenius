import { truckFast } from "../assets";
import { facebook, instagram, twitter } from "../assets/icons";

export const services = [
  {
    imgURL: truckFast,
    label: "Dispatch services",
    subtext: "Swift, Secure, Reliable: Your parcels, our priority.",
    link: "/dispatch",
  },
  {
    imgURL: truckFast,
    label: "Publishing",
    subtext:
      "From Imagination to Reality: Transforming ideas into stunning prints.",
    link: "/publishing",
  },
  {
    imgURL: truckFast,
    label: "Inter-state travels",
    subtext:
      "Beyond Borders, Beyond Expectations: Travel with comfort and confidence.",
    link: "/travels",
  },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/dispatch", label: "Dispatch" },
  { href: "/publishing", label: "Publishing" },
  { href: "/travels", label: "Travels" },
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
