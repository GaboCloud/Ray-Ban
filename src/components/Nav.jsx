import { RiShoppingBag3Line } from "react-icons/ri";
import RayBan from "../assets/Ray_Ban_logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const ROUTES = ["Inicio", "Servicios", "Precios", "Contácto"];
export function Nav({ onClickShopping }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex flex-wrap items-center justify-between lg:flex-row z-10 relative">
      {/* Logo */}
      <a href="#">
        <RayBan className="h-32 w-32" />
      </a>

      {/* burger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden p-2 focus:ring-2 focus:ring-gray-200 rounded-lg hover:bg-gray-100"
      >
        <RxHamburgerMenu className="h-6 w-6" />
      </button>

      {/* menu list */}

      <div className={`${!isOpen && "hidden"} z-20 w-full lg:w-auto lg:block`}>
        <ul className="flex flex-col lg:flex-row bg-white/20 text-md backdrop-blur-md shadow-xl rounded-2xl p-4 border border-white/30 lg:space-x-8">
          {ROUTES.map((route, i) => {
            return (
              <li
                className="py-4 lg:py-1 px-3 hover:underline hover:decoration-4 hover:text-red-600 hover:cursor-pointer rounded-full hover:font-black underline-offset-8 font-semibold"
                key={route}
              >
                {route}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Shoping Cart */}
      <div
        onClick={onClickShopping}
        className="fixed bottom-4 left-4 lg:static md:pr-2 btn-press"
      >
        <div className="cursor-pointer flex flex-center h-12 w-12 rounded-full bg-red-600 shadow-lg text-white hover:animate-bounce text-xl">
          <RiShoppingBag3Line />
        </div>
      </div>
    </nav>
  );
}
