import { Phone, Plane, Radio } from "lucide-react";
import Image from "next/image";
import React from "react";

const IconImages = () => {
  return (
    <div className="max-w-6xl mx-auto py-12">
      <div className="flex justify-between w-10/12 m-auto items-center pb-8 border-b border-black">
        <FeatureIcon Icon={Phone} title="FIVE - STAR SUPPORT" />
        <FeatureIcon Icon={Plane} title="NO - HASSLE RETURNS" />
        <FeatureIcon Icon={Radio} title="SOCIALLY CONSCIOUS" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <ProductCard image="/imgs/girl.webp" title="Girl Model" />
        <ProductCard image="/imgs/boy.webp" title="Boy Model" />
      </div>
    </div>
  );
};

function FeatureIcon({
  Icon,
  title,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  title: string;
}) {
  return (
    <div className="group flex flex-col items-center cursor-pointer text-center">
      <Icon className="w-12 h-12 text-gray-700 group-hover:animate-bounce transition-transform duration-700" />
      <p className="font-semibold mt-2">{title}</p>
    </div>
  );
}

function ProductCard({ image, title }: { image: string; title: string }) {
  return (
    <div className="relative group overflow-hidden rounded-sm">
      <Image
        src={image}
        alt={title || "Product Image"}
        width={600}
        height={350}
        className="w-full h-auto object-cover"
      />
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-90 group-hover:scale-100"></div>
    </div>
  );
}

export default IconImages;
