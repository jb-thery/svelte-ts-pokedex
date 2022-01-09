import { derived, readable, writable } from 'svelte/store';
import type { Pokemon } from '../types';

export const itemsPerPage = readable<number>(10);

export const allPokemons = writable<Array<Pokemon>>([]);
export const currentPage = writable<number>(0);
export const pokemons = writable<Array<Pokemon>>([]);

export const paginatedPokemons = derived(
  [pokemons, itemsPerPage, currentPage],
  ([$pokemons, $itemsPerPage, $currentPage]) => {
    return $pokemons.slice(
      $currentPage * $itemsPerPage,
      $currentPage * $itemsPerPage + $itemsPerPage
    );
  }
);
