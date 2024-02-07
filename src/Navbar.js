import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div >
      <nav className=" nav w-screen h-auto ">
        <div className="max-w-[1300px] mx-auto flex flex-row justify-between p-4">
          <div className="logo">
            <h1 className="font-bold text-3xl cursor-pointer  basis-1/2">
              Coin-ify
            </h1>
          </div>
          <div>
            <ul className="flex justify-center gap-12  text-xl ">
              <li>
                <NavLink to="#home">Home</NavLink>
              </li>
              <li>
                <NavLink to="#market">Market</NavLink>
              </li>
              <li>
                <NavLink to="#choose-us">Choose Us</NavLink>
              </li>
              <li>
                <NavLink to="#join">Join</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
