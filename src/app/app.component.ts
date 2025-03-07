import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  students:any[]=[];
  weather : any[]=[];
  temperature: any = "";

  constructor(private dataService:DataService){}
  
  ngOnInit(): void {
    this.dataService.getStudentData().subscribe(
      (data)=>{
      //console.log(data);
      this.students = data.students;
      //this.adress = data.adress;
      }
    );

    this.dataService.getWeatherData().subscribe(
      (data)=>{
        this.weather = data.weather;
        this.temperature = (data.main.temp - 273 ).toFixed(2);
  
      }
    );

  }

  
}
