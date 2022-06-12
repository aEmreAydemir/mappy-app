import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Place } from "./place.model";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root',
})

export class MappyApiService {

    constructor(private http: HttpClient) { }

    private mappyApiEndPoint = environment.mappyApiEndPoint;

    public getLocations(lng: number, ltd: number, radius: number): Promise<Place[]> {
        return this.http.get<Place[]>(this.mappyApiEndPoint + 'api/map/places', { params: { longitude: lng, latitude: ltd, radius: radius } }).toPromise();
    }

    public getGoogleMapsKey(): Observable<string> {
        return this.http.get<string>(this.mappyApiEndPoint + 'api/map/key');
    }
}