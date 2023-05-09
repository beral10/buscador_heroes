import React, { useMemo } from "react";
import queryString from 'query-string';
import { HeroCard } from "../heroes/HeroCard";
import { useForm } from "../hooks/useForm";
import { useLocation, useNavigate } from "react-router-dom";
import { getHeroesByName } from "../../selectors/getHeroesByName";

export const SearchScreen = () => {
  
  const navigate = useNavigate();

  const location = useLocation();  
  const { q = '' } = queryString.parse( location.search );
  
  const [ formValues, handleInputChange ] = useForm({
    searchText: q
  });
  const { searchText } = formValues;

  const heroesFiltered = useMemo(() => getHeroesByName( q ), [ q ]);

  const handleSearch = ( e ) => {
    e.preventDefault();
    navigate(`?q=${ searchText }`);
  }

  return (
    <div>
      <h1 className="text-3xl font-semibold text-center py-2">Search Hero</h1>
      <hr className="h-1 w-d bg-gray-700 rounded-lg mb-10"/>
      <div className="flex flex-col md:flex-row gap-10 w-full">
        <div className="flex flex-col md:w-1/2">
          <h4 className="font-semibold text-2xl py-2">Search Form</h4>
          <form 
            onSubmit={ handleSearch }
            className="flex flex-col gap-5"
          >
            <input 
              type="text" 
              placeholder="Find your hero" 
              name="searchText"
              value={ searchText }
              autoComplete="off"
              onChange={ handleInputChange }
              className="block px-3 py-2 ocus:border-2 focus:border-orange-700 outline-none text-xl text-cyan-800 border-2 border-cyan-500 rounded-lg align-middle" 
            />
            <button 
              type="submit" 
              className="py-2 px-3 rounded-xl border border-sky-800 bg-sky-600 hover:bg-sky-500 text-white text-xl w-full"
            >
              Search...
            </button>
          </form>
        </div>
        <div className="md:w-1/2">
          <h4 className="font-semibold text-2xl py-2">Results</h4>
          <hr className="mb-10"/>

          {
            ( q === '' )
              && 
                <div className="text-center text-xl text-white text-semibold bg-cyan-600 py-2 rounded-lg">
                  Search a hero
                </div>
          }

          { 
            ( q !== '' && heroesFiltered.length === 0 )
              && 
                <div className="text-center text-xl text-white text-semibold bg-red-400 py-2 px-1 rounded-lg">
                  There is no a hero with <b>{ q }</b> 
                </div>
          }

          {heroesFiltered.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </div>
  );
};
