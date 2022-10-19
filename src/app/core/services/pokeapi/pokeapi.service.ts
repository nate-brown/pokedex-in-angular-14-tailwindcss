import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, from, map, catchError, throwError } from 'rxjs';
import { MainClient } from 'pokenode-ts';

import { IPokemon } from '../../domain';

@Injectable({
    providedIn: 'root'
})
export class PokeApiService {
    private pokeMainClient: MainClient;

    constructor() {
        this.pokeMainClient = new MainClient({
            cacheOptions: { maxAge: 5000, exclude: { query: false } }
        });
    }

    /**
     * Get a pokémon by id.
     * @param {string} id
     * @returns Observable
     */
    getPokemon(id: string): Observable<IPokemon> {
        return from(
            this.pokeMainClient.pokemon.getPokemonById(parseInt(id, 10))
        ).pipe(
            map((pokemon) => ({
                id: pokemon.id,
                name: pokemon.name,
                height: pokemon.height,
                order: pokemon.order,
                weight: pokemon.weight,
                images: [
                    `${pokemon.sprites.front_default}`,
                    `${pokemon.sprites.back_default}`
                ],
                types: pokemon.types.map((type) => ({ name: type.type.name, url: type.type.url }))
            })),
            catchError(this.handleError)
        );
    }

    /**
     * Handle http errors.
     * @param  {HttpErrorResponse} error
     */
    private handleError(error: HttpErrorResponse) {
        if (error.status === 0) {
            console.error('An error occurred:', error.error);
        } else {
            console.error(
                `API returned code ${error.status}, body was: `,
                error.error
            );
        }

        return throwError(
            () => new Error('Something bad happened; please try again later.')
        );
    }
}
