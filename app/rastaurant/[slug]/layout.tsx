import RastaurantHeader from "./components/RastaurantHeader";

export default function RastaurantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <RastaurantHeader />

      <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
        {children}
      </div>
    </main>
  );
}
