import { Injectable } from '@angular/core';// Injectable decorator is used to mark this class as one that can be injected as a service
import { HttpClient } from '@angular/common/http';// HttpClient is used to make HTTP requests
import { Observable } from 'rxjs'; // Observable is the return type of HTTP requests in Angular


@Injectable({
  providedIn: 'root'
})
export class DataService {
  // Injecting HttpClient into the constructor to enable making HTTP requests
  constructor(private httpClient:HttpClient) { }

   // Method to get student data from a remote server using an HTTP GET request
  getStudentData():Observable<any>{
        // Makes an HTTP GET request to the specified URL and returns the result as an Observable
    return this.httpClient.get('https://www.jsonblob.com/api/jsonblob/1347498620747964416')
  }

  // Method to get weather data from OpenWeather API
  getWeatherData():Observable<any>{
    // Makes an HTTP GET request to the OpenWeather API with a hardcoded city (Galway)
    // The 'appid' is the API key required to access the service
    return this.httpClient.get('https://api.openweathermap.org/data/2.5/weather?q=Galway&appid=6a66416403ed8e5e6e762cb8c261f303')
  }
}
