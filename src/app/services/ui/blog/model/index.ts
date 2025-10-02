import bg from "@public/blogBg.svg";
import bg2 from "@public/blogbg2.svg";
import bg3 from "@public/blogBg3.svg";
import bg4 from "@public/blogBg4.svg";
import { Blog } from "../types/blog.interface";

export const blogsData: Blog[] = [
  {
    id: 1,
    title: "Vel Pellentesque",
    text: "Duis porta ligula rhoncus euismod pretium nisi tellus",
    button: "READ MORE",
    image: bg,
  },
  {
    id: 2,
    title: "Porta Consequat",
    text: "Duis porta ligula rhoncus euismod pretium nisi tellus",
    button: "READ MORE",
    image: bg2,
  },
  {
    id: 3,
    title: "Fringilla Augue",
    text: "Duis porta ligula rhoncus euismod pretium nisi tellus",
    button: "READ MORE",
    image: bg3,
  },
  {
    id: 4,
    title: "Libero Vestibulum",
    text: "Duis porta ligula rhoncus euismod pretium nisi tellus",
    button: "READ MORE",
    image: bg4,
  },
];
