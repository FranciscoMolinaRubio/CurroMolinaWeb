import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from '@kolkov/ngx-gallery';
import 'hammerjs';  // Importa HammerJS para soporte de gestos en dispositivos móviles

@Component({
  selector: 'app-cristal',
  templateUrl: './cristal.component.html',
  styleUrls: ['./cristal.component.css']
})
export class CristalComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[] = [];  // Configuración de la galería de imágenes
  galleryImages: NgxGalleryImage[] = [];    // Imágenes para la galería

  constructor() { }

  ngOnInit() {
    this.galleryOptions = [
      {
        width: '1200px',                 // Tamaño de la imagen principal
        height: '1000px',
        thumbnailsColumns: 7,            // Número de columnas en la vista de miniaturas
        imageAnimation: NgxGalleryAnimation.Slide, // Animación de transición entre imágenes
        preview: true,                   // Habilita la vista previa
        previewCloseOnClick: true,       // Cierra la vista previa al hacer clic
        previewCloseOnEsc: true,         // Cierra la vista previa al presionar Esc
        previewZoom: true,               // Habilita el zoom en la vista previa
        previewRotate: true,             // Habilita la rotación en la vista previa
        previewDescription: true,        // Muestra la descripción en la vista previa
        arrowPrevIcon: 'fa fa-chevron-circle-left text-light', // Icono para la flecha izquierda
        arrowNextIcon: 'fa fa-chevron-circle-right text-light', // Icono para la flecha derecha
        thumbnailsMoveSize: 4            // Número de miniaturas a mover al hacer clic en las flechas
      },
      {
        breakpoint: 800,                 // Configuración para pantallas menores de 800px
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 3,
        thumbnailsMoveSize: 4
      },
      {
        breakpoint: 480,                 // Configuración para pantallas menores de 480px
        preview: true,
        arrowPrevIcon: "fas fa-chevron-left",
        arrowNextIcon: "fas fa-chevron-right",
        thumbnailMargin: 3,
        thumbnailsMoveSize: 4
      }
    ];

    this.galleryImages = [
      {
        small: './assets/Cuadros/thumbs/defgolonmarta1.jpg',
        medium: './assets/Cuadros/defgolonmarta1.jpg',
        big: './assets/Cuadros/defgolonmarta1.jpg',
        description: "Golondrina Dáurica #2. 30x30 cm.",
      },
      {
        small: './assets/Cuadros/thumbs/garza2.jpg',
        medium: './assets/Cuadros/garza2.jpg',
        big: './assets/Cuadros/garza2.jpg',
        description: "Garza. 30x30 cm.",
      },
      {
        small: './assets/Cuadros/thumbs/golodrinaatardecer.jpg',
        medium: './assets/Cuadros/golodrinaatardecer.jpg',
        big: './assets/Cuadros/golodrinaatardecer.jpg',
        description: "Atardecer. 30x30 cm.",
      },
      {
        small: './assets/Cuadros/thumbs/mano1.jpg',
        medium: './assets/Cuadros/mano1.jpg',
        big: './assets/Cuadros/mano1.jpg',
        description: "Mano. 30x30 cm.",
      },
      {
        small: './assets/Cuadros/thumbs/Sin título-2.jpg',
        medium: './assets/Cuadros/Sin título-2.jpg',
        big: './assets/Cuadros/Sin título-2.jpg',
        description: "Pequeño bosque. 25x30 cm.",
      },
      {
        small: './assets/Cuadros/thumbs/puto1.jpg',
        medium: './assets/Cuadros/big/puto.jpg',
        big: './assets/Cuadros/puto1.jpg',
        description: "Golondrina Dáurica. 30x30 cm.",
      },
      {
        small: './assets/Cuadros/thumbs/daurica.jpg',
        medium: './assets/Cuadros/daurica.jpg',
        big: './assets/Cuadros/daurica.jpg',
        description: "Golondrina Dáurica #3. 30x30 cm.",
      },
      {
        small: './assets/Cuadros/thumbs/textura1.jpg',
        medium: './assets/Cuadros/textura1.jpg',
        big: './assets/Cuadros/textura1.jpg',
        description: "Textura #1. 30x30 cm.",
      },
      {
        small: './assets/Cuadros/thumbs/japonesa.jpg',
        medium: './assets/Cuadros/big/diosaGaleria.jpg',
        big: './assets/Cuadros/japonesa.jpg',
        description: "Diosa. 30x30 cm.",
      },
      {
        small: './assets/Cuadros/thumbs/bosqueabedulescristal.jpg',
        medium: './assets/Cuadros/bosqueabedulescristal.jpg',
        big: './assets/Cuadros/bosqueabedulescristal.jpg',
        description: "Abedules. 25x30 cm.",
      },
      {
        small: './assets/Cuadros/thumbs/carloslucia.jpg',
        medium: './assets/Cuadros/carloslucia.jpg',
        big: './assets/Cuadros/carloslucia.jpg',
        description: "Textura #2. 30x30 cm.",
      },
      {
        small: './assets/Cuadros/thumbs/azul.jpg',
        medium: './assets/Cuadros/azul.jpg',
        big: './assets/Cuadros/azul.jpg',
        description: "Azul. 30x30 cm.",
      },
      {
        small: './assets/Cuadros/thumbs/pajaroplata2.jpg',
        medium: './assets/Cuadros/pajaroplata2.jpg',
        big: './assets/Cuadros/pajaroplata2.jpg',
        description: "Plata. 30x30 cm.",
      },
      {
        small: './assets/Cuadros/thumbs/carpa1.jpg',
        medium: './assets/Cuadros/big/carpagaleria.jpg',
        big: './assets/Cuadros/carpa1.jpg',
        description: "Carpa. 30x30 cm.",
      },
      {
        small: './assets/Cuadros/thumbs/carpa.jpg',
        medium: './assets/Cuadros/carpa.jpg',
        big: './assets/Cuadros/carpa.jpg',
        description: "Carpa segunda. 30x30 cm.",
      },
      {
        small: './assets/Cuadros/Abejaruco.jpg',
        medium: './assets/Cuadros/big/abejarucobig.jpg',
        big: './assets/Cuadros/Abejaruco.jpg',
        description: "Abejaruco. 30x30 cm.",
      }

    ]
  }
}