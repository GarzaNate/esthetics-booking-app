import React from "react";

const Navbar = () => {
  const links = [
    {
      id: 1,
      link: "Home",
      href: "/#/",
    },
    {
      id: 2,
      link: "BookNow",
      href: "/#/booknow",
    },
    {
      id: 3,
      link: "Work",
      href: "/#/work",
    },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 text-white bg-black px-4">
      <div>
        <h1 className="text-4xl text-pink-400 font-signature ml-2">EM Esthetics</h1>
      </div>
      <div>
        <ul className="flex">
          {links.map(({ id, link, href }) => (
            <li
              key={id}
              className="px-4 cursor-pointer font-medium text-white hover:scale-105 duration-200"
            >
              <a href={href}>{link}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
