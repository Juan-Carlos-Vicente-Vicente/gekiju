import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SogetiService } from 'src/app/services/sogeti.service';

@Component({
  selector: 'app-tabletv1',
  templateUrl: './tabletv1.component.html',
  styleUrls: ['./tabletv1.component.css']
})
export class Tabletv1Component implements OnInit {

  @ViewChild("cajanombre") cajanombre: ElementRef;
  @ViewChild("cajapass") cajapass: ElementRef;

  public nom: String;
  public pass: String;
  public loging: String;
  public usuarios: Array<any>;
  constructor(private _service: SogetiService) {
    this.loging = "false";
  }

  mostrarLogin() {
    this.nom = this.cajanombre.nativeElement.value;
    this.pass = this.cajapass.nativeElement.value;

    if (this.cajanombre.nativeElement.value == "" && this.loging == "false") {
      console.log("Nombre vacio.");
      this.usuarios = [];
    } else {
      console.log(this.nom + " - " + this.pass);
      if (this.nom == "S2VTournament" && this.pass == "sogetispain") {
        this.loging = "true";
        this.mostrarEmpleados();
        console.log(this.loging);

      } else {
        console.log("Contraseña incorrecto");

      }
    }
  }

  mostrarEmpleados() {
    this._service.verUsuariosSogeti().subscribe(response => {
      //console.log(response);
      this.usuarios = response;
    })
  }

  ngOnInit(): void {

  }

}
