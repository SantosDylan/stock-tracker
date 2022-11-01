import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CompanyProfile } from '../../interfaces/company-profile.interface';

@Injectable({providedIn: 'root'})
export class ApiService {
    constructor(private http: HttpClient) {}

    getCompanyProfile(symbol: string) : Observable<CompanyProfile> {
        return this.http.get<CompanyProfile>(`${environment.api_url}/stock/profile2?symbol=${symbol}&token=${environment.api_token}`)
    }

}