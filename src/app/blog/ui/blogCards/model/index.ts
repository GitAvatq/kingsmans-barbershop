import { Blog } from "@/app/services/ui/blog/types/blog.interface";
import modernArt from "@public/modernArt.webp";
import topHairstyle from "@public/topHairstyle.jpg";
import beard from "@public/beard.webp";
import ritual from "@public/ritual.png";
import tools from "@public/tools.png";
import routine from "@public/routine.webp";
import history from "@public/history.jpg";
import styleMan from "@public/styleMan.webp";
import experience from "@public/experience.jpg";

export const blog: Blog[] = [
  {
    id: 1,
    title: "The Art of Modern Barbering",
    text: "Discover how classic barber techniques meet modern trends in men's grooming.",
    button: "READ MORE",
    image: modernArt,
  },
  {
    id: 2,
    title: "Top 5 Hairstyles for 2025",
    text: "From skin fades to textured crops – see what styles are dominating this year.",
    button: "READ MORE",
    image: topHairstyle,
  },
  {
    id: 3,
    title: "Beard Care Essentials",
    text: "The best tips and products every man needs to keep his beard healthy and stylish.",
    button: "READ MORE",
    image: beard,
  },
  {
    id: 4,
    title: "Why Grooming Is a Ritual",
    text: "It's not just about looking good – grooming builds confidence and discipline.",
    button: "READ MORE",
    image: ritual,
  },
  {
    id: 5,
    title: "Tools Every Barber Trusts",
    text: "Explore the must-have tools that help barbers create precise and sharp looks.",
    button: "READ MORE",
    image: tools,
  },
  {
    id: 6,
    title: "Men’s Haircare Routine",
    text: "Simple daily steps to keep your hair strong, healthy, and well-groomed.",
    button: "READ MORE",
    image: routine,
  },
  {
    id: 7,
    title: "The History of Barbershops",
    text: "From ancient traditions to modern lounges – the evolution of men’s grooming spaces.",
    button: "READ MORE",
    image: history,
  },
  {
    id: 8,
    title: "Style Guide for Gentlemen",
    text: "Hair, beard, and outfit – how to match it all for a confident, modern look.",
    button: "READ MORE",
    image: styleMan,
  },
  {
    id: 9,
    title: "Kingsman Experience",
    text: "Step into our barbershop and feel the difference – precision, style, and ritual.",
    button: "READ MORE",
    image: experience,
  },
];
