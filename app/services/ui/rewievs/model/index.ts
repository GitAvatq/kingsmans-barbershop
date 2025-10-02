import { Review } from "../types/rewievs.interface";
import clientImg from "../../../../../public/gigachad.png";
import client from "../../../../../public/gigachad-rthn.png";

export const reviewsData: Review[] = [
  {
    id: 1,
    name: "GLEN SPARKLE",
    location: "MIAMI",
    text: "Vestibulum commodo sapien non elit porttitor, vitae volutpat nibh mollis. Nulla porta risus id neque.",
    image: clientImg,
  },
  {
    id: 2,
    name: "JASON DOE",
    location: "NEW YORK",
    text: "Aliquam erat volutpat. Etiam tristique libero ut eros fermentum, sit amet dapibus nulla varius.",
    image: client,
  },
  {
    id: 3,
    name: "MICHAEL SMITH",
    location: "LOS ANGELES",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    image: clientImg,
  },
];
