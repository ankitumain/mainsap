"use client";

import Image from "next/image";
import { forwardRef } from "react";

type ImageTrailProps = {
  images: number[];
};

const ImageTrail = forwardRef<HTMLDivElement, ImageTrailProps>(
  ({ images }, ref) => {
    return (
      <div ref={ref} className="absolute inset-0 pointer-events-none z-50">
        {images.map((num) => (
          <div
            key={num}
            className="trail-image absolute w-[100px] h-[150px] transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          >
            <Image
              className="absolute left-0 top-0 w-full h-full object-cover"
              src={`/${num}.webp`}
              alt={`trail ${num}`}
              width={100}
              height={150}
            />
          </div>
        ))}
      </div>
    );
  }
);

ImageTrail.displayName = "ImageTrail";

export default ImageTrail;
