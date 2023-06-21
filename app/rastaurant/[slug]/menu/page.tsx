import Menu from "../components/Menu";
import RastaurantHeader from "../components/RastaurantHeader";
import RastaurantNavBar from "../components/RastaurantNavBar";

export default function RastaurntMenu() {
  return (
    <div className="bg-white w-[100%] rounded p-3 shadow">
      <RastaurantNavBar />
      <Menu />
    </div>
  );
}
