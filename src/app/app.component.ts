import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'mappy-app';

  ngOnInit():void {
    let loader = new Loader({
      apiKey:'this is not my real key'
    });

    loader.load().then(() => {
      console.log("loaded map")

      const location = {
        lat:25.2744,
        lng:133.7751
      }
      
      let map: google.maps.Map = new google.maps.Map(document.getElementById('map')!, {
        center:location,
        zoom:6
      })

      const marker = new google.maps.Marker({
        position:location,
        map:map
      })

    })
  }

}
