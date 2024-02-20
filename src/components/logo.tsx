import { quicksand } from "@/components/fonts";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <div className="mt-2">
      <Link
        href=""
        className={`${quicksand.className} flex flex-col w-60 items-center p-2`}
      >
        <Image
          src="/mariposa.svg"
          width={40}
          height={50}
          alt="Logo Haven provisional"
        />
        <div className="flex flex-row items-end">
          <p className="text-4xl">Haven</p>
          <p>Studio</p>
        </div>
      </Link>
    </div>
  );
}
