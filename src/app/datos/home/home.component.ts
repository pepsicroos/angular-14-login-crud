import { Component, OnInit } from '@angular/core';
import { Datos } from '../datos';
import { DatosService } from '../datos.service';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';

declare var window: any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
  
})
export class HomeComponent implements OnInit {

  allDatos: Datos[] = [];
  cols!: any[];
  dato!: Datos;
  productDialog!: boolean;

  deleteModal: any;
  idTodelete: string = '';

  buildings!: any[];
  worcells!: any[];
  Sectors!: any[];
  costumers!: any[];
  

  datoForm: Datos = {
    building:"",
    workcellmanager:"",
    Sector:"",
    id: "",
    planl: 0,
    actuall: 0,
    deltal: 0,
    voll: "",
    linesplanl: 0,
    linesactuall: 0,
    linl: "",
    planm: 0,
    actualm: 0,
    deltam: 0,
    volm: "",
    linesplanm: 0,
    linesactualm: 0,
    linm: "",
    planmm: 0,
    actualmm: 0,
    deltamm: 0,
    volmm: "",
    linesplanmm: 0,
    linesactualmm: 0,
    linmm: "",
    planj: 0,
    actualj: 0,
    deltaj: 0,
    volj: "",
    linesplanj: 0,
    linesactualj: 0,
    linj: "",
    planv: 0,
    actualv: 0,
    deltav: 0,
    volv: "",
    linesplanv: 0,
    linesactualv: 0,
    linv: "",
    plans: 0,
    actuals: 0,
    deltas: 0,
    vols: "",
    linesplans: 0,
    linesactuals: 0,
    lins: "",
    pland: 0,
    actuald: 0,
    deltad: 0,
    vold: "",
    linespland: 0,
    linesactuald: 0,
    lind: "",
    internalcommitvol: 0,
    frozenplan: 0,
    actualw: 0,
    deltaw: 0,
    planw: "",
    internalcommitlines: 0,
    linesactualw: 0,
    internalcommit: "",
    otd: "",
    comments: ""
};
  

  
 
  constructor(private datoService: DatosService, private router:Router,private route: ActivatedRoute,) {}

  ngOnInit(): void {
    this.get();

    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );

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

  

  

  

    
  }

  get() {
    this.datoService.get().subscribe((data) => {
      this.allDatos = data;
    });
  }

  

  editDato(dato: Datos) {
    this.dato = {...dato};
    this.productDialog = true;
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

getById(id: string) {
  this.datoService.getById(id).subscribe((data) => {
    this.datoForm = data;
  });
}

update() {
  this.datoService.update(this.datoForm)
  .subscribe({
    next:(data) => {
      this.router.navigate(["/datos/home"]);
    },
    error:(err) => {
      console.log(err);
    }
  })
}

openDeleteModal(id: string) {
  this.idTodelete = id;
  this.deleteModal.show();
}

delete() {
  this.datoService.delete(this.idTodelete).subscribe({
    next: (data) => {
      this.allDatos = this.allDatos.filter(_ => _.id != this.idTodelete)
      this.deleteModal.hide();
    },
  });
}

  

  

}
