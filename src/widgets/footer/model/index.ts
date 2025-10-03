import { ISocial } from "../types/socials.interface";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { TbClockHour3 } from "react-icons/tb";

import { MdOutlineEmail } from "react-icons/md";

export const socials: ISocial[] = [
  {
    id: 1,
    title: "Address",
    text: "North  StDorchester Center",
    icon: FaLocationDot,
  },
  {
    id: 2,
    title: "EMAIL",
    text: "kingsmanbarbershop@gmail.com",
    icon: MdOutlineEmail,
  },
  {
    id: 3,
    title: "PHONE",
    text: "996999100165",
    icon: FaPhone,
  },
  {
    id: 4,
    title: "WORKING HOURS",
    text: "Mon - Fri: 10am - 6pm",
    icon: TbClockHour3,
  },
];
