import Link from "next/link";
import React from "react";
import Image from "next/image";
import github from "@/public/github.svg";

export const Footer = () => {
  return (
    <footer className="bg-[#121212] text-white p-8 rounded-2xl border border-gray-700 mx-4 md:mx-auto max-w-7xl">
      <div className="flex justify-between items-center">
        <div>
          <Image
            className="mr-5"
            src="/4.svg"
            alt="logo"
            width={100}
            height={60}
            priority
          />
        </div>
        <div className="">
          <Link href="https://github.com/orgs/ens-pin/repositories">
            <button className="ml-4 px-6 py-2 rounded-full bg-white text-black hover:bg-white/80 transition">
              View Document
            </button>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-4">

        {/* Developers */}
        <div>
          <h3 className="font-semibold">Developers</h3>
          <ul className="mt-2 space-y-1">
            <li>Developers Hub</li>
            <li>
              <a href="/docs" className="text-blue-400">
                Docs ↗
              </a>
            </li>
            <li>
              <a href="https://github.com/ens-pin" className="text-blue-400">
                Source Code ↗
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
        <div className="flex space-x-4">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Notice</a>
          <a href="#">Cookies Notice</a>
        </div>
        <p>© 2025 ENS Pin</p>
        <div className="flex space-x-4">
          <a href="https://github.com/ens-pin"><Image src={github} alt="github" width={30} height={30}/></a>
        </div>
      </div>
    </footer>
  );
};
