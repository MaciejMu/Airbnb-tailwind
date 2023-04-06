import { Inter } from "next/font/google";
import Baner from "../src/components/Baner";
import { ExploreNearby } from "../src/components/ExploreNearby";
import { LiveAnywere } from "../src/components/LiveAnywere";
import { LargeCard } from "../src/components/LargeCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Baner></Baner>
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <ExploreNearby />
        <LiveAnywere />
        <LargeCard
          title="The Greatest Ourdoors"
          description="Wishlist created by Airbnb"
          buttonText="Get Inspired"
          img="https://a0.muscache.com/im/pictures/2da67c1c-0c61-4629-8798-1d4de1ac9291.jpg?im_w=1440"
        />
      </main>
    </>
  );
}
