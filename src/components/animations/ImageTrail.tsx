"use client";

import { forwardRef } from "react";

type ImageTrailProps = {
  images: number[];
};

const ImageTrail = forwardRef<HTMLDivElement, ImageTrailProps>(
  ({ images }, ref) => {
    return (
      <div ref={ref} className="absolute inset-0 pointer-events-none">
        {images.map((num) => (
          <div
            key={num}
            className="trail-image absolute w-[100px] h-[150px] transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          >
            <img
              className="absolute left-0 top-0 w-full h-full object-cover"
              src={`${num}.jpg`}
              alt={`trail ${num}`}
            />
          </div>
        ))}
      </div>
    );
  }
);

export default ImageTrail;
