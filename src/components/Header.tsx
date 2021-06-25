import { useState } from "react";
import { MenuIcon } from "@heroicons/react/solid";
import { Switch } from "@headlessui/react";
import { supabase } from "../supabaseClient";

function Header() {
  const [isDropdownOpen, setDropdownState] = useState(false);

  return (
    <header className="p-2">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="font-oswald font-extrabold text-2xl">Questionator</h1>

        <div className="block sm:hidden">
          <button
            className="focus:outline-none"
            onClick={() => setDropdownState(!isDropdownOpen)}
          >
            <MenuIcon className="h-7 w-7" />
          </button>
        </div>
        <div className="hidden sm:flex">
          {/* eslint-disable-next-line */}
          <a
            href={supabase.auth.session() ? "#" : "/register"}
            className="px-4 font-oswald font-extrabold"
          >
            {supabase.auth.session() ? "Account" : "Register"}
          </a>
        </div>
      </div>

      <div
        className={`sm:hidden py-2 ${
          isDropdownOpen ? "flex" : "hidden"
        } flex-col border-b-4`}
      >
        {/* eslint-disable-next-line */}
        <a
          href={supabase.auth.session() ? "#" : "/register"}
          className="pl-2 py-2 font-oswald font-extrabold"
        >
          {supabase.auth.session() ? "Account" : "Register"}
        </a>
      </div>
    </header>
  );
}

export default Header;
