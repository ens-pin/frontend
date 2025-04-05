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
          <Link href="/get-started">
            <button className="ml-4 px-6 py-2 rounded-full bg-white text-black hover:bg-white/80 transition">
              View Document
            </button>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-4">
        {/* Use Cases */}
        <div>
          <h3 className="font-semibold">Use Cases</h3>
          <ul className="mt-2 space-y-1">
            <li>
              <span className="text-blue-500 font-bold">AI</span>{" "}
              <span className="text-xs bg-blue-500 text-white px-2 py-0.5 rounded-full">
                NEW
              </span>
            </li>
            <li>Data / DePIN</li>
            <li>RWA</li>
            <li>Gaming</li>
            <li>Dapps</li>
            <li>NFTs</li>
          </ul>
        </div>

        {/* XXX Section */}
        <div>
          <h3 className="font-semibold">XXX</h3>
          <p className="text-gray-400">XXX</p>
        </div>

        {/* Developers */}
        <div>
          <h3 className="font-semibold">Developers</h3>
          <ul className="mt-2 space-y-1">
            <li>Developers Hub</li>
            <li>
              <a href="#" className="text-blue-400">
                Docs ↗
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-400">
                Source Code ↗
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-400">
                Courses ↗
              </a>
            </li>
          </ul>
        </div>

        {/* Ecosystem */}
        <div>
          <h3 className="font-semibold">Ecosystem</h3>
          <ul className="mt-2 space-y-1">
            <li>Partners</li>
            <li>Roadmap</li>
            <li>
              <a href="#" className="text-blue-400">
                Staking ↗
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-400">
                Block Explorer ↗
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-400">
                XXX ↗
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
