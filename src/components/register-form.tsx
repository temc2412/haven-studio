"use client";

import Button from "./button";
import InputWithLabel from "./input-layout";
import Image from "next/image";
import Link from "next/link";

export default function RegisterForm() {
  return (
    <div className="flex w-4/6 shadow-2xl">
      <div className="w-2/4 relative">
        <Image
          src="https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="prueba"
          fill
          objectFit="cover"
          objectPosition="100% 100%"
        ></Image>
      </div>
      <form className="w-2/4 py-8 px-16" action="">
        <h1 className="flex justify-center mb-8 text-2xl text-gray-800">
          Completa y se parte de Haven
        </h1>
        <InputWithLabel type="text" label="USUARIO" />
        <InputWithLabel type="email" label="EMAIL" />
        <InputWithLabel type="tel" label="TELEFONO" />
        <InputWithLabel type="password" label="CONTRASEÑA" />
        <InputWithLabel type="password" label="REPITE TU CONTRASEÑA" />
        <div className="mt-8 flex justify-center">
          <Button
            buttonType="submit"
            buttonClass="bg-purple-400 hover:bg-purple-700"
            onClick="VideoPlaybackQuality()"
          >
            REGISTRARSE
          </Button>
          <Button
            buttonType="reset"
            buttonClass="bg-gray-500 hover:bg-gray-700"
            onClick="VideoPlaybackQuality()"
          >
            LIMPIAR
          </Button>
        </div>
        <Link
          className="mt-8 flex justify-center text-purple-800 hover:text-purple-500"
          href="../login/"
        >
          Ya tengo cuenta en Haven Studio
        </Link>
      </form>
    </div>
  );
}
