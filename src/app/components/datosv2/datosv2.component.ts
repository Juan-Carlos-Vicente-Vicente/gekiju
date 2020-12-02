import { Component, OnInit } from '@angular/core';
import { SogetiService } from 'src/app/services/sogeti.service';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-datosv2',
  templateUrl: './datosv2.component.html',
  styleUrls: ['./datosv2.component.css']
})
export class Datosv2Component implements OnInit {

  public usuarios: Array<any>;
  constructor(private _service: SogetiService) {

  }

  mostrarEmpleados() {
    this._service.verUsuariosSogeti().subscribe(response => {
      this.usuarios = response;
    })
  }
  ngOnInit(): void {
    this.mostrarEmpleados();
    var textWrapper = document.querySelector('.ml3');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({ loop: true })
      .add({
        targets: '.ml3 .letter',
        opacity: [0, 1],
        easing: "easeInOutQuad",
        duration: 2250,
        delay: (el, i) => 150 * (i + 1)
      }).add({
        targets: '',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
      })
  }

}
