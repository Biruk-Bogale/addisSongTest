import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";

function Header() {
  return (
    <div className="border-b-2 border-b-orange-500  py-3 sticky top-0 z-50 backdrop-blur-md bg-red/30 ">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to={"/"}
          className="text-3xl font-bold tracking-tight text-orange-500 pr-3"
        >
          Addis Song
        </Link>

        <div className="md:hidden">
          <MobileNav />
        </div>

        <div className="hidden md:block ">
          <MainNav />
        </div>
      </div>
    </div>
  );
}

export default Header;
