import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Datos } from '../datos';
import { DatosService } from '../datos.service';

interface Fecha {
  fecha: string,
  value: string
}

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})




export class CreateComponent implements OnInit {

  buildings!: any[];
  worcells!: any[];
  Sectors!: any[];
  costumers!: any[];

  fecha!: Fecha[];

    selectedFecha!: Fecha;

  

  datoForm: Datos = {
    building:"",
    workcellmanager:"",
    Sector:"",
    id: "",
    planl: 725,
    actuall: 725,
    deltal: 0,
    voll: "100%",
    linesplanl: 4,
    linesactuall: 4,
    linl: "100%",
    planm: 486,
    actualm: 486,
    deltam: 0,
    volm: "100%",
    linesplanm: 2,
    linesactualm: 2,
    linm: "100%",
    planmm: 253,
    actualmm: 253,
    deltamm: 0,
    volmm: "100%",
    linesplanmm: 3,
    linesactualmm: 3,
    linmm: "100%",
    planj: 477,
    actualj: 420,
    deltaj: 57,
    volj: "88%",
    linesplanj: 5,
    linesactualj: 3,
    linj: "60%",
    planv: 574,
    actualv: 540,
    deltav: 34,
    volv: "94%",
    linesplanv: 4,
    linesactualv: 2,
    linv: "50%",
    plans: 580,
    actuals: 500,
    deltas: 80,
    vols: "86%",
    linesplans: 3,
    linesactuals: 0,
    lins: "0%",
    pland: 242,
    actuald: 169,
    deltad: 73,
    vold: "70%",
    linespland: 3,
    linesactuald: 1,
    lind: "33%",
    internalcommitvol: 2438,
    frozenplan: 3337,
    actualw: 3093,
    deltaw: 244,
    planw: "93%",
    internalcommitlines: 6,
    linesactualw: 6,
    internalcommit: "100%",
    otd: "100%",
    comments: ""
};

  constructor(private datoService: DatosService,  private router:Router) { }

  ngOnInit(): void {

    this.buildings = [
      {label: 'B1', value: 'B1'},
      {label: 'B2', value: 'B2'},
      {label: 'B3', value: 'B3'},
      {label: 'B4', value: 'B4'},
      {label: 'B5', value: 'B5'},
      {label: 'B6', value: 'B6'},
      {label: 'B7', value: 'B7'}
    
  ];

  this.worcells = [
    {label: 'Ramon Escobedo', value: 'Ramon Escobedo'},
    {label: 'Jose Huerta', value: 'Jose Huerta'}
    
  ];

  this.Sectors = [
    {label: 'Telco', value: 'Telco'},
    {label: 'Industrial Sector', value: 'Industrial Sector'},
    {label: 'SmartHome', value: 'SmartHome'}

  ];

  this.costumers = [
    {label: 'Nokia', value: 'Nokia'}


  ];

  this.fecha = [
    {fecha: 'Semana 27', value: 'Semana 27'},
   
];


  }

  create(){
    this.datoService.create(this.datoForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/datos/home"])
      },
      error:(err) => {
        console.log(err);
      }
    })
  }

}
