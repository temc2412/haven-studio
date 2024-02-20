import SearchBox from "./search-box";
import Link from "next/link";
import { inter } from "@/components/fonts";

export default function SearchLogin() {
  return (
    <div
      className={
        "w-full bg-purple-400 flex justify-between px-20 py-2 items-center"
      }
    >
      <Link className="text-white font-semibold" href="../login/">
        Ingresa a Haven Studio
      </Link>
      <SearchBox />
    </div>
  );
}
