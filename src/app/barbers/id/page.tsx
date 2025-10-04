import React from "react";
import Image from "next/image";
import { FaInstagram, FaTelegramPlane, FaStar } from "react-icons/fa";

const BarbersDetails = () => {
  return (
    <div className="relative bg-[url(/barbers-details.svg)] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-[1240px] mx-auto px-5 py-12">
        <div
          className="
            flex flex-col md:flex-row gap-8 
            bg-[url('/barber-bg.jpg')] bg-cover bg-center 
            rounded-xl p-6 text-white shadow-lg
          "
        >
          <div className="flex-shrink-0 rounded-xl overflow-hidden w-full md:w-[300px] h-[400px] shadow-md">
            <Image
              src="/barber walpaper 1.svg"
              alt="Alex Johnson"
              width={400}
              height={544}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="flex flex-col justify-between flex-1">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400">
                Alex Johnson
              </h2>

              <p className="mt-4 text-base sm:text-lg leading-relaxed opacity-90">
                Professional barber with 10 years of experience. Passionate
                about creating modern, sharp, and stylish haircuts. Committed to
                providing personalized grooming services and making every client
                feel confident and fresh.
              </p>

              <ul className="mt-6 space-y-2 text-base sm:text-lg">
                <li>
                  <span className="font-semibold">Status:</span> Kingsman Barber
                </li>
                <li>
                  <span className="font-semibold">Age:</span> 44 years
                </li>
                <li>
                  <span className="font-semibold">Experience:</span> 5 years
                </li>
              </ul>

              <div className="flex items-center gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className="text-yellow-400 text-xl sm:text-2xl"
                  />
                ))}
              </div>
            </div>

            <div className="mt-8">
              <button
                className="
                  px-8 py-3 
                  bg-yellow-400 text-black rounded-lg font-medium 
                  text-base sm:text-lg
                "
              >
                Book Now
              </button>

              <div className="flex items-center gap-6 mt-6 text-2xl sm:text-3xl">
                <a href="#" rel="noopener noreferrer" className="text-pink-500">
                  <FaInstagram />
                </a>
                <a href="#" rel="noopener noreferrer" className="text-sky-400">
                  <FaTelegramPlane />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarbersDetails;
