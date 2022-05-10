import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const apiUrl: string = environment.apiUrl;

@Injectable({
    providedIn: 'root'
})

export class PokemonService {

    private _pokemons: any[] = [];

    constructor(private http: HttpClient) {
    }

    get pokemons(): any[] {
        return this._pokemons;
    }

    set pokemons(pokemons: any[]) {
        this._pokemons = pokemons;
    }

    getNext(limit: number, nextUrl?: string): Observable<any> {
        const url = nextUrl || `${apiUrl}?offset=$0&limit=${limit}`;
        return this.http.get(url);
    }

    getPokemonDetail(url: string): Observable<any> {
        return this.http.get(url);
    }

}
