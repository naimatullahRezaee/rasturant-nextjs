import Link from "next/link";

export default function RastaurantNavBar() {
  return (
    <nav className="flex text-reg border-b pb-2">
      <Link href="/rastaurant/milestone-grill" className="mr-7">
        Overview
      </Link>
      <Link href="/rastaurant/milestone-grill/menu" className="mr-7">
        Menu
      </Link>
    </nav>
  );
}
