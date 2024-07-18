import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center w-full card">
      <div className="flex flex-col justify-center items-center lg:w-[80vw] py-2 w-full">
        <h1 className="font-medium text-center">
          Developed By{" "}
          <a href="/" className="underline">
            Priyanshu Chahar
          </a>
        </h1>
        <h2 className="font-medium text-center">
          Developed with Simplicity in Mind
        </h2>
      </div>
    </footer>
  );
};

export default Footer;