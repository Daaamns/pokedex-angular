export type pokemonDetails = {
  abilities: Abilities[];
  base_experience: number;
  cries: Cries;
  forms: Forms[];
  game_indices: GameIndices[];
  height: number;
  held_items: HeldItems[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Moves[];
  name: string;
  order: number;
  past_abilities: [];
  past_types: [];
  species: Species;
  sprites: Sprites;
  stats: Stats[];
  types: Types[];
  weight: number;
};

type Abilities = {
  ability: AbilityDetails;
  is_hidden: boolean;
  slot: number;
};

type AbilityDetails = {
  name: string;
  url: string;
};

type Cries = {
  latest: string;
  legacy: string;
};

type Forms = {
  name: string;
  url: string;
};

type GameIndices = {
  game_index: number;
  version: Version;
};

type Version = {
  name: string;
  url: string;
};

type HeldItems = {
  item: Item;
  version_details: VersionDetails[];
};

type Item = {
  name: string;
  url: string;
};

type VersionDetails = {
  rarity: number;
  version: VersionOfItem;
};

type VersionOfItem = {
  name: string;
  url: string;
};

type Moves = {
  move: Move;
  version_group_details: VersionGroupDetails[];
};

type Move = {
  name: string;
  url: string;
};

type VersionGroupDetails = {
  level_learned_at: number;
  move_learn_metho: MoveLearn;
  version_group: VesrionGroup;
};

type MoveLearn = {
  name: string;
  url: string;
};

type VesrionGroup = {
  name: string;
  url: string;
};

type Species = {
  name: string;
  url: string;
};

type Sprites = {
  back_default: string;
  back_female: null;
  back_shiny: string;
  back_shiny_female: null;
  front_default: string;
  front_femal: null;
  front_shiny: string;
  front_shiny_female: null;
  other: Other;
  versions: Versions;
};

type Other = {
  dream_world: DreamWorld;
  home: Home;
  officialArtwork: OfficialArtwork;
  showdown: Showdown;
};

type DreamWorld = {
  front_default: string;
  front_female: null;
};

type Home = {
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
};

type OfficialArtwork = {
  front_default: string;
  front_shiny: string;
};

type Showdown = {
  back_defaul: string;
  back_female: null;
  back_shiny: null;
  back_shiny_female: string;
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
};

type Versions = {
  generationI: GenerationI;
  generationIi: GenerationII;
  generationIii: GenerationIII;
  generationIv: GenerationIV;
  generationV: GenerationV;
  generationVi: GenerationVi;
  generationVii: GenerationVii;
  generationViii: GenerationViii;
};

type GenerationI = {
  redBlue: RedBlue;
  yellow: Yellow;
};

type RedBlue = {
  back_default: string;
  back_gray: string;
  back_transparent: string;
  front_default: string;
  front_gray: string;
  front_transparent: string;
};

type Yellow = {
  back_default: string;
  back_gray: string;
  back_transparent: string;
  front_default: string;
  front_gray: string;
  front_transparent: string;
};

type GenerationII = {
  crystal: Crystal;
  gold: Gold;
  silver: Silver;
};

type Crystal = {
  back_default: string;
  back_shiny: string;
  back_shiny_transparent: string;
  back_transparent: string;
  front_default: string;
  front_shiny: string;
  front_shiny_transparent: string;
  front_transparent: string;
};
type Gold = {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
  front_transparent: string;
};
type Silver = {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
  front_transparent: string;
};

type GenerationIII = {
  emerald: Emerald;
  fireredLeafgreen: FireredLeafgreen;
  rubySapphire: RubySapphire;
};

type Emerald = {
  front_default: string;
  front_shiny: string;
};

type FireredLeafgreen = {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
};

type RubySapphire = {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
};

type GenerationIV = {
  diamondPearl: DiamondPearl;
  heartgoldSoulsilver: HeartgoldSoulsilver;
  platinum: Platinum;
};

type DiamondPearl = {
  back_default: string;
  back_female: null;
  back_shiny: string;
  back_shiny_female: null;
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
};

type HeartgoldSoulsilver = {
  back_default: string;
  back_female: null;
  back_shiny: string;
  back_shiny_female: null;
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
};

type Platinum = {
  back_default: string;
  back_female: null;
  back_shiny: string;
  back_shiny_female: null;
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
};

type GenerationV = {
  blackWhite: BlackWhite;
};

type BlackWhite = {
  animated: Animated;
  back_default: string;
  back_female: null;
  back_shiny: string;
  back_shiny_female: null;
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
};

type Animated = {
  back_default: string;
  back_female: null;
  back_shiny: string;
  back_shiny_female: null;
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
};

type GenerationVi = {
  omegarubyAlphasapphire: OmegarubyAlphasapphire;
  xY: xY;
};

type OmegarubyAlphasapphire = {
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
};

type xY = {
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
};

type GenerationVii = {
  icons: Icons;
  ultraSunUltraMoon: UltraSunUltraMoon;
};

type Icons = {
  front_default: string;
  front_female: null;
};

type UltraSunUltraMoon = {
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
};

type GenerationViii = {
  icons: IconsViii;
};

type IconsViii = {
  front_default: string;
  front_female: null;
};

type Stats = {
  base_stat: number;
  effort: number;
  stat: Stat;
};

type Stat = {
  name: string;
  url: string;
};

type Types = {
  slot: number;
  type: Type;
};

type Type = {
  name: string;
  url: string;
};
