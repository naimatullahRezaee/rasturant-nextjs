import NavBar from "../../components/Navbar";
import RastaurantDescription from "./components/RastaurantDescription";
import RastaurantHeader from "./components/RastaurantHeader";
import RastaurantImages from "./components/RastaurantImages";
import RastaurantNavBar from "./components/RastaurantNavBar";
import RastaurantRating from "./components/RastaurantRating";
import RastaurantReviews from "./components/RastaurantReviews";
import RastaurantTitle from "./components/RastaurantTitle";
import ReservationCard from "./components/ReservationCard";

export default function RestaurantDetails() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <NavBar />

        <RastaurantHeader />

        <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
          <div className="bg-white w-[70%] rounded p-3 shadow">
            <RastaurantNavBar />
            <RastaurantTitle />

            <RastaurantRating />

            <RastaurantDescription />

            <RastaurantImages />

            <RastaurantReviews />
          </div>
          <div className="w-[27%] relative text-reg">
            <ReservationCard />
          </div>
        </div>
      </main>
    </main>
  );
}
