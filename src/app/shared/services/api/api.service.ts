import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Quote } from '../../interfaces/quote.interface';
import { SymbolLookup } from '../../interfaces/symbol-lookup.interface';

@Injectable({providedIn: 'root'})
export class ApiService {
    constructor(private http: HttpClient) {}

    getSymbolLookup(name: string) : Observable<SymbolLookup> {
        return this.http.get<SymbolLookup>(`${environment.api_url}/search?q=${name}&token=${environment.api_token}`)
    }

    getQuote(symbol: string) : Observable<Quote> {
        return this.http.get<Quote>(`${environment.api_url}/quote?symbol=${symbol}&token=${environment.api_token}`)
    }
    
}