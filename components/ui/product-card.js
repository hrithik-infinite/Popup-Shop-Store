"use client";

import Image from "next/image";

const ProductCard = ({ data }) => {
  return (
    <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image src={data?.images?.[0]?.url} alt="Image" fill />
      </div>
    </div>
  );
};
export default ProductCard;
