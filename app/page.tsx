"use client";
import Image from "next/image";
import { Inter } from "@next/font/google";
import NavBar from "./components/Navbar";
import Header from "./components/Header";
import RastaurantCard from "./components/RastaurantCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <NavBar />

        <main>
          <Header />

          <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
            <RastaurantCard />
          </div>
        </main>
      </main>
    </main>
  );
}
