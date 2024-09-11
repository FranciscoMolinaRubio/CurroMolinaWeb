import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from '@kolkov/ngx-gallery';
import 'hammerjs';

@Component({
  selector: 'app-grafito',
  templateUrl: './grafito.component.html',
  styleUrls: ['./grafito.component.css']
})
export class GrafitoComponent implements OnInit {
  // Configuración de opciones para la galería de imágenes
  galleryOptions: NgxGalleryOptions[] = [];
  // Array para almacenar las imágenes de la galería
  galleryImages: NgxGalleryImage[] = [];

  constructor() { }

  ngOnInit() {
    // Configuración inicial de las opciones de la galería
    this.galleryOptions = [
      {
        width: '1200px', // Ancho de la galería
        height: '1000px', // Altura de la galería
        thumbnailsColumns: 7, // Número de columnas en la vista de miniaturas
        imageAnimation: NgxGalleryAnimation.Slide, // Tipo de animación para las imágenes
        preview: true,  // Habilitar la vista previa de imágenes
        previewCloseOnClick: true, // Cerrar vista previa al hacer clic
        previewCloseOnEsc: true, // Cerrar vista previa al presionar Esc
        previewZoom: true, // Habilitar el zoom en la vista previa
        previewRotate: true, // Habilitar la rotación en la vista previa
        previewDescription: true, // Mostrar descripciones en la vista previa
        arrowPrevIcon: 'fa fa-chevron-circle-left text-light', // Icono para el botón de anterior
        arrowNextIcon: 'fa fa-chevron-circle-right text-light', // Icono para el botón de siguiente
      },
      {
        breakpoint: 800, // Configuración para pantallas con un ancho menor a 800px
        width: '100%', // Ancho de la galería
        height: '600px', // Altura de la galería
        imagePercent: 80, // Porcentaje de ancho ocupado por las imágenes
        thumbnailsPercent: 20, // Porcentaje de ancho ocupado por las miniaturas
        thumbnailsMargin: 20, // Margen entre las miniaturas
        thumbnailMargin: 3 // Margen de cada miniatura
      },
      {
        breakpoint: 480, // Configuración para pantallas con un ancho menor a 480px
        preview: true, // Habilitar la vista previa de imágenes
        arrowPrevIcon: "fas fa-chevron-left", // Icono para el botón de anterior
        arrowNextIcon: "fas fa-chevron-right", // Icono para el botón de siguiente
        thumbnailMargin: 3 // Margen de cada miniatura
      }
    ];

    // Inicialización de las imágenes de la galería
    this.galleryImages = [
      {
        small: './assets/Cuadros/thumbs/montañadef1.jpg',
        medium: './assets/Cuadros/montañadef1.jpg',
        big: './assets/Cuadros/montañadef1.jpg',
        description: "Denali. 69x49 cm.",
      },
      {
        small: './assets/Cuadros/thumbs/arbolpaco1.jpg',
        medium: './assets/Cuadros/big/arbolpacobig.jpg',
        big: './assets/Cuadros/arbolpaco1.jpg',
        description: "Árbol. 70x45 cm.",
      },
      {
        small: './assets/Cuadros/thumbs/gota.jpg',
        medium: './assets/Cuadros/gota.jpg',
        big: './assets/Cuadros/gota.jpg',
        description: "Gota. 70x40 cm.",
      },
      {
        small: './assets/Cuadros/thumbs/gota2.jpg',
        medium: './assets/Cuadros/gota2.jpg',
        big: './assets/Cuadros/gota2.jpg',
        description: "Gota #2. 70x40 cm.",
      },

      {
        small: './assets/Cuadros/thumbs/pablodefinitivo.jpg',
        medium: './assets/Cuadros/big/pablobig.jpg',
        big: './assets/Cuadros/pablodefinitivo.jpg',
        description: "Mi hermano. 30x41 cm.",
      },
      {
        small: './assets/Cuadros/thumbs/arbolapiz.jpg',
        medium: './assets/Cuadros/big/arbolapizbig.jpg',
        big: './assets/Cuadros/arbolapiz.jpg',
        description: "Árbol seco. 30x41 cm.",
      },
      {
        small: './assets/Cuadros/thumbs/ola.jpg',
        medium: './assets/Cuadros/ola.jpg',
        big: './assets/Cuadros/ola.jpg',
        description: "Ola Número 9. 68x57 cm.",
      }
    ];
  }
}