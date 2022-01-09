import Http from '../services/http';
import type { Pokemon, Pokemons } from '../types';

export const getPokemons = async () => {
  try {
    return await Http.get<Pokemons>('/pokemon?limit=10');
  } catch (error) {
    console.error(error);
  }
};

export const getPokemon = async (name: string) => {
  try {
    return await Http.get<Pokemon>(`/pokemon/${name}`);
  } catch (error) {
    console.error(error);
  }
};
