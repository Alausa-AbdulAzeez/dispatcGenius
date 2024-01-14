import { truckFast } from "../assets";
import { facebook, instagram, twitter } from "../assets/icons";

export const services = [
  {
    imgURL: truckFast,
    label: "Dispatch services",
    subtext: "Swift, Secure, Reliable: Your parcels, our priority.",
  },
  {
    imgURL: truckFast,
    label: "Publishing",
    subtext:
      "From Imagination to Reality: Transforming ideas into stunning prints.",
  },
  {
    imgURL: truckFast,
    label: "Inter-state travels",
    subtext:
      "Beyond Borders, Beyond Expectations: Travel with comfort and confidence.",
  },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/dispatch", label: "Dispatch" },
  { href: "/printing", label: "Printing" },
  { href: "/travels", label: "Travels" },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Dispatch services", link: "/" },
      { name: "Design and publishing", link: "/" },
      { name: "Interstate travels", link: "/" },
    ],
  },

  {
    title: "Get in touch",
    links: [
      { name: "customer@nike.com", link: "mailto:customer@nike.com" },
      { name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
