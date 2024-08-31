import { Link } from "react-router-dom";

function MainNav() {
  return (
    <span className="flex items-center">
      <div className="flex  hidden md:block space-x-8 font-bold text-1xl text-orange-500 ">
        <Link to={"/"} className="hover:border-b-4 hover:border-b-orange-500">
          Home
        </Link>
        <Link to={"/statistics"} className="hover:border-b-4 hover:border-b-orange-500">
          Statistics
        </Link>
      </div>
    </span>
  );
}

export default MainNav;
