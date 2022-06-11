import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Place } from "./place.model";

@Injectable({
    providedIn: 'root'
})

export class MappyApiService {

    constructor(private http: HttpClient) {}

    private mappyApiEndPoint = 'http://localhost:8080/'

    public getLocations(lng: number, ltd: number, radius: number): Promise<Place[]> {
        return this.http.get<Place[]>(this.mappyApiEndPoint + 'api/map/places', { params: { longitude: lng, latitude: ltd, radius: radius } }).toPromise();
    }
}