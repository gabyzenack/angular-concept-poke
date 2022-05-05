import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const apiUrl : string = environment.apiUrl;

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

    set pokemons(_pokemons: any[]) {
        this._pokemons = _pokemons;
    }

    getNext(next: string): Observable<any> {
        const url = `${apiUrl}?offset=${next}&limit=10`;
        return this.http.get(url);
    }

    getPokemon(name: string): Observable<any> {
        const url = `${apiUrl}${name}`;
        return this.http.get(url);
    }

}
