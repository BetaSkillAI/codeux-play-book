import React from "react";

type HeroMosaicProps = {
  images: string[];
  overlayClassName?: string;
};

const HeroMosaic: React.FC<HeroMosaicProps> = ({ images, overlayClassName }) => {
  const rowA = [...images, ...images].slice(0, Math.max(6, images.length));
  const rowB = [...images].reverse();
  const rowC = [...images, ...images].slice(0, Math.max(5, images.length));

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <style>
        {`
          @keyframes mosaic-left-local {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes mosaic-right-local {
            0%   { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
        `}
      </style>

      <div className="absolute inset-0 bg-hero-stripes" />

      <div className="absolute inset-0 opacity-50 pointer-events-none">
        <div className="flex gap-3 absolute left-0 top-[18%] w-[200%]" style={{ animation: "mosaic-left-local 30s linear infinite" }}>
          {rowA.concat(rowA).map((src, idx) => (
            <img key={`a-${idx}`} src={src} alt="" className="h-40 w-auto object-cover rounded-xl" />
          ))}
        </div>
        <div className="flex gap-3 absolute left-0 top-1/2 -translate-y-1/2 w-[200%]" style={{ animation: "mosaic-right-local 36s linear infinite" }}>
          {rowB.concat(rowB).map((src, idx) => (
            <img key={`b-${idx}`} src={src} alt="" className="h-44 w-auto object-cover rounded-xl" />
          ))}
        </div>
        <div className="flex gap-3 absolute left-0 bottom-[12%] w-[200%]" style={{ animation: "mosaic-left-local 42s linear infinite" }}>
          {rowC.concat(rowC).map((src, idx) => (
            <img key={`c-${idx}`} src={src} alt="" className="h-36 w-auto object-cover rounded-xl" />
          ))}
        </div>
      </div>

      <div className={overlayClassName ?? "absolute inset-0 bg-black/35"} />
    </div>
  );
};

export default HeroMosaic;


