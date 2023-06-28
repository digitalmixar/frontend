import Image from "next/image";
import React from "react";

const Products = ({ data }) => {
  return (
    <div className="bg-primary-900 text-primary-100">
      <div className="flex justify-center px-20 py-24">
        <div className="flex flex-col items-center space-y-16">
          <h3 className="text-4xl font-bold tracking-wide">{data.heading}</h3>
          <ul className="flex flex-wrap space-y-12 divide-primary-700 lg:flex-nowrap lg:space-y-0 lg:divide-x">
            <li className="flex w-52 shrink-0 grow flex-col items-center space-y-3">
              <Image
                alt="icon"
                layout="fixed"
                src="/icons/cart-icon.svg"
                width={50}
                height={50}
              />
              <span className="inline-block max-w-[120px] text-center">
                Ecommerce
              </span>
            </li>
            <li className="flex w-52 shrink-0 grow flex-col items-center space-y-3">
              <Image
                alt="icon"
                layout="fixed"
                src="/icons/magnifier-icon.svg"
                width={50}
                height={50}
              />
              <span className="inline-block max-w-[120px] text-center">
                Web Sites
              </span>
            </li>
            <li className="flex w-52 shrink-0 grow flex-col items-center space-y-3">
              <Image
                alt="icon"
                layout="fixed"
                src="/icons/squares-icon.svg"
                width={50}
                height={50}
              />
              <span className="inline-block max-w-[120px] text-center">
                Custom made Software
              </span>
            </li>
            <li className="flex w-52 shrink-0 grow flex-col items-center space-y-3">
              <Image
                alt="icon"
                layout="fixed"
                src="/icons/circles-icon.svg"
                width={50}
                height={50}
              />
              <span className="inline-block max-w-[120px] text-center">
                Apps
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Products;
