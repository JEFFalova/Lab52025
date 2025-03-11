import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './services/data.service';// DataService is a service that you use to fetch data (e.g., student and weather data)
import { CommonModule } from '@angular/common';// CommonModule provides common directives like ngIf and ngFor

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
// Declare variables to hold the student and weather data
  students:any[]=[];// array for student data
  weather : any[]=[];// array for weather data
  temperature: any = "";// A variable to store the temperature value (in Celsius after conversion)

  constructor(private dataService:DataService){}
  
  // ngOnInit lifecycle hook to initialize data when the component is created
  ngOnInit(): void {
    // Fetch student data from the DataService when the component initializes
    this.dataService.getStudentData().subscribe(
      (data)=>{
         // On successful response, assign the student data to the 'students' array
        // Assuming the 'students' data comes in the format of an object with a 'students' property
      //console.log(data);
      this.students = data.students;
      //this.adress = data.adress;
      }
    );

    // Fetch weather data from the DataService when the component initializes
    this.dataService.getWeatherData().subscribe(
      (data)=>{
        this.weather = data.weather;
        this.temperature = (data.main.temp - 273 ).toFixed(2);
  
      }
    );

  }

  
}
