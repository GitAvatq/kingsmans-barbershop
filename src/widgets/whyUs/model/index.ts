import { SlMustache } from "react-icons/sl";
import { FiScissors } from "react-icons/fi";
import { Card, Model } from "../types/interface.card";
import { TbRazorElectric } from "react-icons/tb";
import { GiBeard } from "react-icons/gi";
import { SiRollsroyce } from "react-icons/si";
import { TbRazor } from "react-icons/tb";

export const model: Model = {
  title: "Why Us",
  details:
    "We've created the perfect destination for men's style and grooming.",
};

export const cardData: Card[] = [
  {
    id: 1,
    cardTitle: "HAIRCUT & BEARD TRIM",
    cardDetails:
      "The haircut is tailored to your face shape and lifestyle, giving structure and freshness. The beard is shaped with precision, defining clean lines while keeping its natural fullness.",
    icon: FiScissors,
  },
  {
    id: 2,
    cardTitle: "MUSTACHE TRIM",
    cardDetails:
      "Mustache trimming adds the final touch, emphasizing neatness and individuality. Finished with premium grooming products for healthy hair and a polished appearance.",
    icon: SlMustache,
  },
  {
    id: 3,
    cardTitle: "FADE & STYLE",
    cardDetails:
      "Modern fades and styling tailored to your look. Sharp transitions, clean edges, and a finish with professional products.",
    icon: TbRazorElectric,
  },
  {
    id: 4,
    cardTitle: "BEARD SHAPING & CARE",
    cardDetails:
      "Focused beard service: shaping, trimming, and conditioning. Keeps your beard strong, healthy, and perfectly defined.",
    icon: GiBeard,
  },
  {
    id: 5,
    cardTitle: "ROYAL GROOMING PACKAGE",
    cardDetails:
      "The haircut is tailored to your face shape and lifestyle, giving structure and freshness. The beard is shaped with precision, defining clean lines while keeping its natural fullness.",
    icon: SiRollsroyce,
  },
  {
    id: 6,
    cardTitle: "CLASSIC SHAVE",
    cardDetails:
      "A traditional hot towel shave with a straight razor. Relaxing, precise, and finished with soothing aftercare for a clean and fresh feel.",
    icon: TbRazor,
  },
];
