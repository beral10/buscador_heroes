import React from "react";
import { useRouteError } from "react-router-dom";

export const ErrorScreen = () => {
  const error = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen gap-20 p-6">
      <p className="text-center text-5xl font-bold text-red-800">
        {error.statusText || error.message}
      </p>
      <img src={require("../../img/dont_cry.png")} alt="Imagen Error" />
    </div>
  );
};
