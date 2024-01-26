import {
  DeliveryBlue,
  TravelBlue,
  handShake,
  printBlue,
  spidgenius2,
  truckFast,
} from "../assets";
import { facebook, instagram, twitter } from "../assets/icons";

export const insights = [
  {
    imgUrl: handShake,
    title: "The launch of the Metaverse makes Elon musk ketar-ketir",
    subtitle:
      "Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Diam maecenas sed enim ut sem viverra alique.",
  },
  {
    imgUrl: spidgenius2,
    title: "7 tips to easily master the madness of the Metaverse",
    subtitle:
      "Vitae congue eu consequat ac felis donec. Et magnis dis parturient montes nascetur ridiculus mus. Convallis tellus id interdum",
  },
  {
    imgUrl: handShake,
    title: "With one platform you can explore the whole world virtually",
    subtitle:
      "Quam quisque id diam vel quam elementum. Viverra nam libero justo laoreet sit amet cursus sit. Mauris in aliquam sem",
  },
];

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
  { href: "/logistics", label: "Logistics" },
  { href: "/publishing", label: "Printing & Publishing" },
  { href: "/travels", label: "Transport" },
];

export const sectionLinks = [
  { href: "#partnership", label: "Partnership", subHref: "#contactUs" },
  { href: "#career", label: "Career", subHref: "#contactUs" },
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
    title: "Join us",
    links: [
      { name: "Partnership", link: "/dispatch" },
      { name: "Career", link: "/publishing" },
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

export const logisticsFeatures = [
  "Pickup, delivery and errands anywhere in Lagos state",
  "We ensure your product/item is safe and intact with our experienced riders",
  "⁠Fast and Accurate service delivery",
  "⁠Reliable and effective communication",
];

export const pressFeatures = [
  "Creative graphics that looks real",
  "Quality and sharp printing at a cheap price",
  "⁠We handle printing from the scratch and deliver finished work to you at your door",
  "We print all kinds of corporate sovenirs for organizations",
  "We manage a consistent graphics for companies’ social media",
];

export const transportFeatures = [
  "Interstate travelling",
  "Hire me",
  "Group interstate picnic",
];
