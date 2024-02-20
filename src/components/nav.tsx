"use client";

import { inter } from "@/components/fonts";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { name: "Home", href: "/" },
  { name: "Servicios", href: "../pages/services" },
  { name: "Reserva", href: "../pages/booking" },
  { name: "Domicilio", href: "../pages/outhome" },
  { name: "Cursos", href: "../pages/courses" },
  { name: "Insumos", href: "../pages/supplies" },
  { name: "Nosotros", href: "../pages/us" },
  { name: "contacto", href: "../pages/contact" },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <div className={`${inter.className} flex flex-row w-full justify-center`}>
      {links.map((link) => {
        const adjustedHref = link.href.startsWith("../pages")
          ? `/${link.href.substring(3)}` // Eliminamos el "../" y agregamos un "/"
          : link.href;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "mt-4 px-16 flex items-center justify-center hover:bg-purple-100 hover:text-purple-600 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-purple-100 text-purple-600": pathname === adjustedHref,
              }
            )}
          >
            <p>{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
}
