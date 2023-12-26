import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };
  return (
    <div>
      <nav className="flex justify-around h-[80px]">
        <ul className="flex space-x-4 items-center">
          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/about">AboutUs</Link>
          </li>
          <li>
            <Link href="/userprofile">User Profile</Link>
          </li>
        </ul>

        <ul className="flex space-x-4 items-center">
          <li>
            <Link href="/register" className="text-green-600">
              Register
            </Link>
          </li>
          <li>
            <Link className="text-green-600" href="/login">
              Login
            </Link>
          </li>
          <li>
            <button className="text-green-600" onClick={handleLogout}>
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
