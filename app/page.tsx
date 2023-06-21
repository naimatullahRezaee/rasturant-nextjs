"use client";
import { Inter } from "@next/font/google";
import Header from "./components/Header";
import RastaurantCard from "./components/RastaurantCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Header />

      <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
        <RastaurantCard />
      </div>
    </main>
  );
}
