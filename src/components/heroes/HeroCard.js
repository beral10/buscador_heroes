import React from "react";
import { Link } from "react-router-dom";

export const HeroCard = ({
  id,
  superhero,
  alter_ego,
  first_appearance,
  characters,
}) => {
  return (
    <div className="w-full border-2 border-gray-300 rounded-r-lg">
        <div className="flex flex-row">
            <div className="w-1/2 max-w-xs">
                <img src={ require(`../../../public/assets/heroes/${ id }.jpg`) } alt={ superhero }/>
            </div>
            <div className="flex flex-col gap-2 md:gap-3 w-1/2 pl-2 lg:pl-3 pr-1">
                <h4 className="text-xl md:text-2xl font-semibold"> { superhero } </h4>
                <p className="text-lg"> { alter_ego } </p>
                {
                    ( alter_ego !== characters ) && <p className="text-sm text-gray-500"> { characters } </p>
                }
                <p className="text-lg"> { first_appearance } </p>
                <Link to={`/hero/${ id }`} className="text-lg text-blue-600">
                Más...
                </Link>

            </div>
        </div>
    </div>
    )
};
