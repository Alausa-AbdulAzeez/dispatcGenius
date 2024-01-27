import {
  DeliveryBlue,
  TravelBlue,
  handShake,
  printBlue,
  sAim,
  sMission,
  sObjective,
  sVision,
  spidgenius2,
  truckFast,
} from "../assets";
import { facebook, instagram, twitter } from "../assets/icons";

export const insights = [
  {
    id: 1,
    imgUrl: handShake,
    title: "The launch of the Metaverse makes Elon musk ketar-ketir",
    content:
      "Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Diam maecenas sed enim ut sem viverra alique.",
    date: "9th of January, 2024",
  },
  {
    id: 2,
    imgUrl: spidgenius2,
    title: "7 tips to easily master the madness of the Metaverse",
    content:
      "Vitae congue eu consequat ac felis donec. Et magnis dis parturient montes nascetur ridiculus mus. Convallis tellus id interdum",
    date: "19th of January, 2024",
  },
  {
    id: 3,
    imgUrl: handShake,
    title: "With one platform you can explore the whole world virtually",
    content:
      "Quam quisque id diam vel quam elementum. Viverra nam libero justo laoreet sit amet cursus sit. Mauris in aliquam sem",
    date: "5th of July 2023",
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
export const aimsAndObjectives = [
  {
    imgURL: sAim,
    label: "Aims",
    subtext: [
      "To render essential logistics and printing services with promptness and accuracy ",
    ],
    link: "",
  },
  {
    imgURL: sObjective,
    label: "Objective",
    subtext: ["To ensure customers are satisfied and well served"],
    link: "",
  },
  {
    imgURL: sMission,
    label: "Mission",
    subtext: [
      "To close the gap between the stages of production and distribution and enhance speed delivery with accuracy",
    ],
    link: "",
  },
  {
    imgURL: sVision,
    label: "Vision",
    subtext: [
      "To become a top leader in the integration of production and distribution with quality services that stands out. While making navigation within nations and states easy globally.",
    ],
    link: "",
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
