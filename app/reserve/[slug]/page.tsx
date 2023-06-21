import Link from "next/link";
import NavBar from "../../components/Navbar";
import ReserveHeader from "./components/ReserveHeader";
import ReserveForm from "./components/ReserveForm";

export default function Reservation() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <NavBar />

        <div className="border-t h-screen">
          <div className="py-9 w-3/5 m-auto">
            {/* HEADER */}
            <ReserveHeader />
            {/* HEADER */} {/* FORM */}
            <ReserveForm />
          </div>
        </div>
      </main>
    </main>
  );
}
