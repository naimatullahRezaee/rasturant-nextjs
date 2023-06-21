import NavBar from "../../components/Navbar";
import RastaurantDescription from "./components/RastaurantDescription";
import RastaurantHeader from "./components/RastaurantHeader";
import RastaurantImages from "./components/RastaurantImages";
import RastaurantNavBar from "./components/RastaurantNavBar";
import RastaurantRating from "./components/RastaurantRating";
import RastaurantReviews from "./components/RastaurantReviews";
import RastaurantTitle from "./components/RastaurantTitle";
import ReservationCard from "./components/ReservationCard";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export interface RestaurantDetials {
  id: number;
  name: string;
  description: string;
  images: string[];
  slug: string;
}

export const fetchRestaurantBySlug = async (
  slug: string
): Promise<RestaurantDetials> => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      id: true,
      name: true,
      description: true,
      images: true,
      slug: true,
    },
  });
  if (!restaurant) {
    throw new Error("Restaurant not found");
  }
  return restaurant;
};

export default async function RestaurantDetails({
  params,
}: {
  params: { slug: string };
}) {
  const restaurant = await fetchRestaurantBySlug(params.slug);
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
