import React, { useMemo } from "react";
import { getHeroesByPublisher } from "../../selectors/getHeroesByPublisher";
import { HeroCard } from "./HeroCard";

export const HeroList = ({ publisher }) => {

  const heroes = useMemo(() => getHeroesByPublisher(publisher), [ publisher ]);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 animate__animated animate__fadeIn">
      {
        heroes.map((hero) => (
          <HeroCard 
            key={hero.id}
              {...hero} 
          />
        ))
      }
    </div>
  );
};
