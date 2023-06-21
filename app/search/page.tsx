import React from "react";
import NavBar from "../components/Navbar";
import Header from "./components/Header";
import SearchSideBar from "./components/SearchSideBar";
import RastaurantCard from "../components/RastaurantCard";
import SearchRestaurantCard from "./components/SearchRastaurantCard";

export default function Search() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <NavBar />

        <Header />
        <div className="flex py-4 m-auto w-2/3 justify-between items-start">
          <SearchSideBar />

          <div className="w-5/6">
            <SearchRestaurantCard />
          </div>
        </div>
      </main>
    </main>
  );
}
