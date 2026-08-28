import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-[#E7E8E7] text-black py-4 px-6 flex justify-end gap-6 font-bold shadow-md shadow-black/40 relative z-10">
      <div>
        <ul className="flex gap-6">
          <li className="hover:opacity-80">
            <Link to="/"> Home </Link>
          </li>
          <li className="hover:opacity-80">
            <Link to="Owner"> Owner </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}