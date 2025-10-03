import topHairstyle from "@public/topHairstyle.jpg";
import beard from "@public/beard.webp";
import ritual from "@public/ritual.png";
import tools from "@public/tools.png";
import { Blog } from "../types/blog.interface";

export const blogsData: Blog[] = [
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
];
