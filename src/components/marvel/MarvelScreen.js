import React from "react";
import { HeroList } from "../heroes/HeroList";

export const MarvelScreen = () => {
  return (
    <>
      <h2 className="text-4xl font-semibold">MarvelScreen</h2>
      <hr className="mt-4 h-1 bg-gray-300"/>
      <HeroList publisher={"Marvel Comics"} />
    </>
  );
};
