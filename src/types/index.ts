export type PokeUrl = {
  name: string;
  url: string;
};

export type Abilities = {
  ability: PokeUrl;
  is_hidden: boolean;
  slot: number;
};

export type GameIndices = {
  game_index: number;
  version: PokeUrl;
};

export type VersionGroupDetails = {
  level_learned_at: number;
  move_learn_method: PokeUrl;
  version_group: PokeUrl;
};

export type Moves = {
  move: PokeUrl;
  version_group_details: Array<VersionGroupDetails>;
};

export type Stats = {
  base_stat: number;
  effort: number;
  stat: PokeUrl;
};

export type Types = {
  slot: number;
  type: PokeUrl;
};

export type Pokemon = {
  abilities: Array<Abilities>;
  game_indices: Array<GameIndices>;
  height: number;
  held_items: Array<string>;
  id: number;
  is_default: true;
  location_area_encounters: string;
  moves: Array<Moves>;
  name: string;
  order: number;
  past_types: Array<string>;
  species: PokeUrl;
  sprites: {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
    other: {
      dream_world: {
        front_default: string | null;
        front_female: string | null;
      };
      home: {
        front_default: string | null;
        front_female: string | null;
        front_shiny: string | null;
        front_shiny_female: string | null;
      };
      'official-artwork': {
        front_default: string | null;
      };
    };
    versions: {
      'generation-i': {
        'red-blue': {
          back_default: string | null;
          back_gray: string | null;
          back_transparent: string | null;
          front_default: string | null;
          front_gray: string | null;
          front_transparent: string | null;
        };
        yellow: {
          back_default: string | null;
          back_gray: string | null;
          back_transparent: string | null;
          front_default: string | null;
          front_gray: string | null;
          front_transparent: string | null;
        };
      };
      'generation-ii': {
        crystal: {
          back_default: string | null;
          back_shiny: string | null;
          back_shiny_transparent: string | null;
          back_transparent: string | null;
          front_default: string | null;
          front_shiny: string | null;
          front_shiny_transparent: string | null;
          front_transparent: string | null;
        };
        gold: {
          back_default: string | null;
          back_shiny: string | null;
          front_default: string | null;
          front_shiny: string | null;
          front_transparent: string | null;
        };
        silver: {
          back_default: string | null;
          back_shiny: string | null;
          front_default: string | null;
          front_shiny: string | null;
          front_transparent: string | null;
        };
      };
      'generation-iii': {
        emerald: {
          front_default: string | null;
          front_shiny: string | null;
        };
        'firered-leafgreen': {
          back_default: string | null;
          back_shiny: string | null;
          front_default: string | null;
          front_shiny: string | null;
        };
        'ruby-sapphire': {
          back_default: string | null;
          back_shiny: string | null;
          front_default: string | null;
          front_shiny: string | null;
        };
      };
      'generation-iv': {
        'diamond-pearl': {
          back_default: string | null;
          back_female: string | null;
          back_shiny: string | null;
          back_shiny_female: string | null;
          front_default: string | null;
          front_female: string | null;
          front_shiny: string | null;
          front_shiny_female: string | null;
        };
        'heartgold-soulsilver': {
          back_default: string | null;
          back_female: string | null;
          back_shiny: string | null;
          back_shiny_female: string | null;
          front_default: string | null;
          front_female: string | null;
          front_shiny: string | null;
          front_shiny_female: string | null;
        };
        platinum: {
          back_default: string | null;
          back_female: string | null;
          back_shiny: string | null;
          back_shiny_female: string | null;
          front_default: string | null;
          front_female: string | null;
          front_shiny: string | null;
          front_shiny_female: string | null;
        };
      };
      'generation-v': {
        'black-white': {
          animated: {
            back_default: string | null;
            back_female: string | null;
            back_shiny: string | null;
            back_shiny_female: string | null;
            front_default: string | null;
            front_female: string | null;
            front_shiny: string | null;
            front_shiny_female: string | null;
          };
          back_default: string | null;
          back_female: string | null;
          back_shiny: string | null;
          back_shiny_female: string | null;
          front_default: string | null;
          front_female: string | null;
          front_shiny: string | null;
          front_shiny_female: string | null;
        };
      };
      'generation-vi': {
        'omegaruby-alphasapphire': {
          front_default: string | null;
          front_female: string | null;
          front_shiny: string | null;
          front_shiny_female: string | null;
        };
        'x-y': {
          front_default: string | null;
          front_female: string | null;
          front_shiny: string | null;
          front_shiny_female: string | null;
        };
      };
      'generation-vii': {
        icons: {
          front_default: string | null;
          front_female: string | null;
        };
        'ultra-sun-ultra-moon': {
          front_default: string | null;
          front_female: string | null;
          front_shiny: string | null;
          front_shiny_female: string | null;
        };
      };
      'generation-viii': {
        icons: {
          front_default: string | null;
          front_female: string | null;
        };
      };
    };
  };
  stats: Array<Stats>;
  types: Array<Types>;
  weight: number;
};

export type Pokemons = {
  count: number;
  next: string;
  previous: string;
  results: Pokemon[];
};
