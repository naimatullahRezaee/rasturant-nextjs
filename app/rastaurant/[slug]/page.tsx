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
    <>
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
    </>
  );
}
