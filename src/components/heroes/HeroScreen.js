import React, { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../../selectors/getHeroById";

export const HeroScreen = () => {
  let { heroeId } = useParams();

  const goToBack = useNavigate();

  const hero = useMemo(() => getHeroById(heroeId), [heroeId]);

  if (!hero) {
    return <Navigate to={"/"} />;
  }

  const { superhero, publisher, alter_ego, first_appearance, characters } =
    hero;

  const handleReturn = () => {
    goToBack(-1);
  };

  return (
    <div>
      <h2 className="text-3xl font-semibold">
        HeroScreen of <b>{`${superhero}`}</b>
      </h2>
      <hr className="mt-4 h-1 bg-gray-300" />
      <div className="flex flex-col md:flex-row gap-5 justify-center md:justify-start items-center md:items-start mt-8 sm:text-xl">
        <div className="border-4 border-yellow-600 p-1 bg-gray-300 rounded-md animate__animated animate__fadeInLeft max-w-sm">
          <img
            src={require(`../../../public/assets/heroes/${heroeId}.jpg`)}
            alt={superhero}
            className="w-full"
          />
        </div>
        <div className="flex flex-col gap-3 md:px-3">
          <h3 className="text-center text-xl md:text-2xl font-semibold text-blue-700"> {superhero} </h3>
          <ul className="flex flex-col gap-3">
            <li>
              <b>Alter ego:</b> {alter_ego}
            </li>
            <li>
              <b>Publisher:</b> {publisher}
            </li>
            <li>
              <b>First appearance:</b> {first_appearance}
            </li>
          </ul>
          <h4><b>Characters:</b></h4>
          <p> {characters} </p>
          <button
            className="border-2 border-blue-600 py-2 px-4 hover:border-blue-400 font-semibold rounded-md text-xl"
            onClick={handleReturn}
          >
            Return
          </button>
        </div>
      </div>
    </div>
  );
};
