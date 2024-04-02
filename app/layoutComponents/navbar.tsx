"use client";
import * as React from "react";
import { useContext } from "react";
import { useRouter } from "next/navigation";

interface NavbarProps {}

const Navbar: React.FunctionComponent<NavbarProps> = (props) => {
  const router = useRouter();

  return (
    <nav>
      <div className="flex flex-row justify-between font-bold mt-4 text-white mb-4 px-6">
        <div className="flex flex-row items-center gap-6 ">
          {/* <a href="/" className="">
            <img
              src={logo.src}
              alt="logo"
              className="w-9 h-9 object-fill rounded-full"
            />
          </a> */}
          <div
            onClick={() => {
              router.push("/");
            }}
            className="text-xl cursor-pointer"
          >
            List DnD
          </div>
          {/* <a href="/Home/web3" className="text-xl">
            Web3
          </a>
          <a href="/Home/gamefiHub" className="text-xl">
            GameFiHub
          </a> */}
          {/* <a href="/AddNewWebInfo" className="text-xl">
            AddNewWebInfo
          </a> */}
          <div
            className="cursor-pointer text-xl"
            onClick={() => {
              router.push("/anyPosition");
            }}
          >
            Any Position DnD
          </div>
          <div
            className="cursor-pointer text-xl"
            onClick={() => {
              router.push("/absorb");
            }}
          >
            Absorb to Grid
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
