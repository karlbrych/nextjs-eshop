"use client";
import { title } from "process";
import { NavBarType } from "../types/navbar-types";
import Image from "next/image";
import Link from "next/link";
export default function Navbar({
  title,
  routes,
  img,
  onClickHeader,
}: NavBarType) {
  return (
    <div className="flex xl:flex-row flex-col items-center bg-gray-500 xl:h-30 h-48 p-5 gap-5">
      <h1
        className="text-2xl text-red-600 font-bold cursor-pointer xl:mb-0 mb-4"
        onClick={() => onClickHeader?.(title)}
      >
        {title}
      </h1>

      {img && <Image src={img} alt="Logo" width={100} height={100} />}

      <nav>
        <ul className="flex xl:flex-row flex-col">
          {routes.map((value, index) => (
            <li key={index} className="px-4">
              <Link href={value.url}>{value.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
