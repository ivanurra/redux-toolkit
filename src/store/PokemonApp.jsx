import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemons } from "./slices/pokemon";

export const PokemonApp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <>
      <h1>PokemonApp</h1>
      <hr />
      <ul>
        <li>XXX</li>
        <li>XXX</li>
        <li>XXX</li>
      </ul>
    </>
  );
};
