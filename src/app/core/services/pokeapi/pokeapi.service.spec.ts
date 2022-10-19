import { TestBed } from '@angular/core/testing';
import { Pokemon } from 'pokenode-ts';
import { IPokemon } from '../../domain';

import { PokeApiService } from './pokeapi.service';

describe('PokeApiService', () => {
    let service: PokeApiService;
    let servicePrivate: any;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(PokeApiService);
        servicePrivate = service;
    });

    test('should be created', () => {
        expect(service).toBeTruthy();
        expect(servicePrivate.pokeMainClient).toBeTruthy();
    });

    describe('getPokemon', () => {
        let pokemon: Pokemon | undefined;

        beforeEach(() => {
            const promise = new Promise((resolve, reject) => {
                process.nextTick(() =>
                    pokemon
                        ? resolve(pokemon)
                        : reject({
                            error: `Pokémon not found.`,
                        })
                );
            });
            jest.spyOn(servicePrivate.pokeMainClient.pokemon, 'getPokemonById').mockReturnValue(promise);
        });

        test('returns a pokemon', async () => {
            expect.assertions(2);

            pokemon = {
                id: 0,
                name: '',
                height: 0,
                order: 0,
                weight: 0,
                sprites: {
                    front_default: '',
                    back_default: ''
                },
                types: [
                    {
                        type: {
                            name: '',
                            url: ''
                        }
                    }
                ]
            } as any;

            await expect(servicePrivate.pokeMainClient.pokemon.getPokemonById('0')).resolves.toEqual(pokemon);
            service.getPokemon('0').subscribe((response) => {
                expect(response).toEqual({
                    id: 0,
                    name: '',
                    height: 0,
                    order: 0,
                    weight: 0,
                    images: [
                        '',
                        ''
                    ],
                    types: [
                        {
                            name: '',
                            url: ''
                        }
                    ]
                });
            });
        });

        test('does not return a pokemon', async () => {
            expect.assertions(2);
            pokemon = undefined;
            
            await expect(servicePrivate.pokeMainClient.pokemon.getPokemonById('0')).rejects
                .toEqual({
                    error: `Pokémon not found.`,
                });
            service.getPokemon('0')
                .subscribe(
                    (pokemon) => {
                        expect(pokemon).toBeUndefined();
                    },
                    (error) => {
                        expect(error).toBe('Something bad happened; please try again later.');
                    }
                );
        });
    });
});
