import FeaturedCard from "@/components/Home/FeaturedCard";
import HeroSection from "@/components/Home/HeroSection"
import IconImages from "@/components/Home/IconImages"
import NewArrival from "@/components/Home/NewArrival"


export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <IconImages />
      <NewArrival />
      <HeroSection />
      <div className="py-8">
        <FeaturedCard />
      </div>
    </div>
  );
}