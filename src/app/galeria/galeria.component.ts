import { Component, AfterViewInit } from '@angular/core';

// Declara la variable global $ para usar jQuery
declare var $: any; 

@Component({
  selector: 'app-galeria', // Selector del componente
  templateUrl: './galeria.component.html', // Ruta del archivo de plantilla
  styleUrls: ['./galeria.component.css'] // Ruta del archivo de estilos
})
export class GaleriaComponent implements AfterViewInit {

  constructor() {}

  // Método del ciclo de vida que se ejecuta después de que la vista del componente se ha inicializado
  ngAfterViewInit() {
    this.initializeNanoGallery(); // Inicializa la galería después de que la vista esté lista
  }

  // Configura y activa la galería NanoGallery2
  initializeNanoGallery() {
    $('#nanogallery2').nanogallery2({
      "thumbnailWidth": 500, // Ancho de las miniaturas
      "thumbnailHeight": "auto", // Altura de las miniaturas ajustada automáticamente
      "thumbnailBaseGridHeight": 100 // Altura base del grid de miniaturas
    });
  }
}

