import { Component, OnInit } from '@angular/core';


interface Componente{
  icon:string;
  name:string;
  redirectTo:string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {


  componentes:any[]=[
    {
      icon:'american-football-outline',
      name:'Action Sheet',
      redirectTo:'/action-sheet'
    },
    {
      icon:'alert-circle-outline',
      name:'Alert',
      redirectTo:'/alert'
    },
    {
      icon:'beaker-appstore',
      name:'Avatar',
      redirectTo:'/avatar'
    },
    {
      icon:'radio-button-off-outline',
      name:'Button',
      redirectTo:'/button'
    },
    {
      icon:'card-outline',
      name:'Cards',
      redirectTo:'/card'
    },
    {
      icon:'checkmark-circle-outline',
      name:'Check',
      redirectTo:'/check'
    },
    {
      icon:'calendar-outline',
      name:'DateTime',
      redirectTo:'/date-time'
    },
    {
      icon:'car-outline',
      name:'Fab',
      redirectTo:'/fab'
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}

