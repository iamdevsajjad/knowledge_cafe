import React from "react";

const Navbar = () => {
  return (
    <header className="py-2 sticky top-0 z-20 bg-white ">
      <div className="fullNav  flex justify-between container mx-auto">
        <div className="text text-black my-auto">
          <h1 className="font-semibold text-2xl">Knowledge cafe</h1>
        </div>
        <div className="img w-12">
          <img src="https://i.ibb.co/vXKvyMn/profile.png" alt="" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
