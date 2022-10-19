export interface IPokemon {
    id: number;
    name: string;
    height: number;
    order: number;
    weight: number;
    images: string[];
    types: IPokemonType[];
}

export interface IPokemonType {
    name: string;
    url: string;
}