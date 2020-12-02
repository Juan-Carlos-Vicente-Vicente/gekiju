import { Component, OnInit } from '@angular/core';
import { SogetiService } from 'src/app/services/sogeti.service';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-datosv3',
  templateUrl: './datosv3.component.html',
  styleUrls: ['./datosv3.component.css']
})
export class Datosv3Component implements OnInit {

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

    anime.timeline({ loop: true })
      .add({
        targets: '.c2 .word',
        scale: [14, 1],
        opacity: [0, 1],
        easing: "easeInOutQuad",
        duration: 2250,
        delay: (el, i) => 150 * i
      }).add({
        targets: '.c2',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
      });

    anime.timeline({ loop: true })
      .add({
        targets: '.c2 .word',
        scale: [14, 1],
        opacity: [0, 1],
        easing: "easeOutCirc",
        duration: 800,
        delay: (el, i) => 800 * i
      }).add({
        targets: '.c2',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
      });

    anime({
      targets: ['.azulsuave', '.darkgreen', '.darkred', '.blanco']
      , translateX: '5rem'
      , rotate: 360
      , borderRadius: '50%'
      , duration: 3000
      , loop: false
    })

  }

}
