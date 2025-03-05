import { Phone, Plane, Radio } from "lucide-react";
import Image from "next/image";
import React from "react";

const IconImages = () => {
  return (
    <div className="max-w-6xl mx-auto py-12">
      <div className="flex justify-between w-10/12 m-auto border-current border-black items-center pb-8">
        <FeatureIcon Icon={Phone} title="FIVE - STAR SUPPORT" />
        <FeatureIcon Icon={Plane} title="NO - HASSLE RETURNS" />
        <FeatureIcon Icon={Radio} title="SOCIALLY CONSCIOUS" />
      </div>

      {/* products section  */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <ProductCard image="/imgs/girl.webp" title="" />
        <ProductCard image="/imgs/boy.webp" title="" />
      </div>
    </div>
  );
};

function FeatureIcon({ Icon, title }: { Icon: any; title: string }) {
  return (
    <div className="group flex flex-col items-center cursor-pointer text-center border-b-2">
      <Icon className="w-12 h-12 text-gray-700 group-hover:animate-bounce duration-700" />
      <p className="font-semibold mt-2">{title}</p>
    </div>
  );
}

function ProductCard({ image, title }: { image: string; title: string }) {
  return (
    <div className="relative group">
      <Image
        src={image}
        alt={title}
        width={600}
        height={350}
        className="w-full rounded-sm"
      />
      <div className="absolute group-hover:inset-0 group-hover:opacity-100 opacity-0 duration-500 scale-90 bg-black/50"></div>
    </div>
  );
}
export default IconImages;