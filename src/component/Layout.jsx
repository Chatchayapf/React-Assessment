import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-[#E7E8E7]">
      <Navbar />

      <div className="p-6 max-w-4xl mx-auto w-full">
        <Outlet />
      </div>
    </div>
  );
}
