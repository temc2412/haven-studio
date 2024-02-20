"use client";

import { useFormState, useFormStatus } from "react-dom";
import Button from "./button";
import InputWithLabel from "./input-layout";
import Image from "next/image";

export default function LoginForm() {
  return (
    <div className="flex w-4/6 shadow-2xl">
      <div className="w-2/4 relative">
        <Image
          src="https://images.unsplash.com/photo-1604654894611-6973b376cbde?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="prueba"
          fill
          objectFit="cover"
          objectPosition="30% 100%"
        ></Image>
      </div>
      <form className="w-2/4 py-8 px-16" action="">
        <h1 className="flex justify-center mb-8 text-2xl text-gray-800">
          Inicia Sesion
        </h1>
        <InputWithLabel type="text" label="USUARIO" />
        <InputWithLabel type="password" label="CONTRASEÑA" />
        <div className="mt-8 flex justify-center">
          <Button
            buttonType="submit"
            buttonClass="bg-purple-400 hover:bg-purple-700"
            onClick="VideoPlaybackQuality()"
          >
            INGRESAR
          </Button>
          <Button
            buttonType="reset"
            buttonClass="bg-gray-500 hover:bg-gray-700"
            onClick="VideoPlaybackQuality()"
          >
            LIMPIAR
          </Button>
        </div>
        <a
          className="mt-8 flex justify-center text-gray-400 hover:text-gray-700"
          href="#"
        >
          Olvide mi contraseña.
        </a>
        <a
          className="mt-4 flex justify-center text-purple-400 hover:text-purple-700"
          href="../register/"
        >
          Crea tu cuenta en Haven Studio.
        </a>
      </form>
    </div>
  );
}
