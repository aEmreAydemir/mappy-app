import { Component, OnInit } from '@angular/core';
import { MappyApiService } from './mappy-api.service'
import { Place } from './place.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private mappyApiService: MappyApiService) { }

  title = 'mappy-app';

  locationInput: string = ""

  originPlace: Place = {
    name: "origin",
    latitude: 40.969830,
    longitude: 29.124198
  }
  radius: number = 100
  locationChosen = false

  locations: Place[] = []

  ngOnInit(): void {
  }

  onChoseLocation(event: any) {

    this.originPlace.latitude = event.coords.lat
    this.originPlace.longitude = event.coords.lng
    this.locationChosen = true

    console.log(this.originPlace)
    this.mappyApiService.getLocations(this.originPlace.longitude, this.originPlace.latitude, this.radius).then(res => {
      this.locations = res
      console.log(this.locations)
    });
  }

  search(input: string) {
    let inputLocation = input.split(",")
    let latitude = parseFloat(inputLocation[0])
    let longitude = parseFloat(inputLocation[1])
    let radius = parseInt(inputLocation[2])
    this.mappyApiService.getLocations(longitude, latitude, radius).then(res => {
      this.locations = res
      console.log(this.locations)
    });

    this.originPlace.latitude = latitude
    this.originPlace.longitude = longitude
    this.radius = radius
    this.locationChosen = true
  }

}
