import Link from "next/link";

export default function RastaurantNavBar({ slug }: { slug: string }) {
  return (
    <nav className="flex text-reg border-b pb-2">
      <Link href={`/rastaurant/${slug}`} className="mr-7">
        Overview
      </Link>
      <Link href={`/rastaurant/${slug}/menu`} className="mr-7">
        Menu
      </Link>
    </nav>
  );
}
