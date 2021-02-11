import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {



  fechaNaci:Date=new Date();

  customYearValues=[2025,2018];

  CustomPickerOptions={
    buttons:[
      {
        text:'Hola',
        handler:(event)=>{
          console.log(event);
        }
      },
      {
        text:'Mundo',
        handler:()=>{
          console.log('log')
        }
      }
    ]
  }
  constructor() { }

  ngOnInit() {
  }

  cambioFecha(event){
    console.log(event);
    console.log(new Date(event.detail.value));
  }
}
