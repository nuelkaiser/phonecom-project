import React from "react";
import ProductCardProps from "./ProductCard.props";
import ProductImg from "../../assets/images/product-image.png";
import Image from "next/image";
import { P } from "../shared/headings/Heading";

const ProductCard: React.FC<ProductCardProps> = ({
  className,
  productimage,
  productname,
  productprice,
  ...rest
}) => {
  return (
    <div
      className={`bg-white rounded-md w-full items-center py-6 px-5 ${className}`}
    >
      <div className="flex justify-center">
        <Image src={ProductImg} alt="product" />
      </div>

      <div className="mt-3">
        <p className="text-[#606060] text-xs lg:max-w[250px] lg:text-sm">
          {productname}
        </p>
        <P className=" mt-3 font-bold">{productprice}</P>
      </div>
    </div>
  );
};

export default ProductCard;
