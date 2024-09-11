import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from '@kolkov/ngx-gallery';
import 'hammerjs';

@Component({
  selector: 'app-mixta',
  templateUrl: './mixta.component.html',
  styleUrl: './mixta.component.css'
})
  
export class MixtaComponent implements OnInit {
  // Definición de opciones para la galería
  galleryOptions: NgxGalleryOptions[] = [];
  // Definición de imágenes para la galería
  galleryImages: NgxGalleryImage[] = [];

  // Método ngOnInit que se ejecuta cuando se inicializa el componente
  ngOnInit() {
    // Configuración de opciones de la galería de imágenes
    this.galleryOptions = [
      {
        width: '1200px',  // Ancho de la galería
        height: '1000px', // Alto de la galería
        thumbnailsColumns: 7, // Número de columnas de miniaturas
        imageAnimation: NgxGalleryAnimation.Slide, // Tipo de animación de imágenes
        preview: true,  // Permite vista previa
        previewCloseOnClick: true, // Cierra la vista previa al hacer clic
        previewCloseOnEsc: true, // Cierra la vista previa al presionar "Esc"
        previewZoom: true, // Permite hacer zoom en la vista previa
        previewRotate: true, // Permite rotar la imagen en la vista previa
        previewDescription: true, // Muestra la descripción de la imagen en la vista previa
        arrowPrevIcon: 'fa fa-chevron-circle-left text-light', // Ícono de la flecha de retroceso
        arrowNextIcon: 'fa fa-chevron-circle-right text-light', // Ícono de la flecha de avance
        thumbnailsMoveSize: 4 // Número de miniaturas que se desplazan en el carrusel
      },
      {
        // Opciones para pantallas con ancho de 800px o menos
        breakpoint: 800,
        width: '100%', // Ancho de la galería al 100% del contenedor
        height: '600px', // Alto de la galería
        imagePercent: 80, // Porcentaje de imagen en relación con el contenedor
        thumbnailsPercent: 20, // Porcentaje de miniaturas en relación con el contenedor
        thumbnailsMargin: 20, // Margen entre miniaturas
        thumbnailMargin: 3, // Margen de miniaturas
        thumbnailsMoveSize: 4 // Número de miniaturas que se desplazan en el carrusel
      },
      {
        // Opciones para pantallas con ancho de 480px o menos
        breakpoint: 480,
        preview: true, // Permite vista previa
        arrowPrevIcon: "fas fa-chevron-left", // Ícono de la flecha de retroceso
        arrowNextIcon: "fas fa-chevron-right", // Ícono de la flecha de avance
        thumbnailMargin: 3, // Margen de miniaturas
        thumbnailsMoveSize: 4 // Número de miniaturas que se desplazan en el carrusel
      }
    ];

    // Configuración de las imágenes para la galería (pendiente de completarse)
    this.galleryImages = [
      {
        small: './assets/Cuadros/thumbs/AbstraccionRoja.jpg',
        medium: './assets/Cuadros/AbstraccionRoja.jpg',
        big: './assets/Cuadros/AbstraccionRoja.jpg',
        description: "Abstraccion Roja. 120x100 cm.",
      },
      {
        small: './assets/Cuadros/thumbs/Collage.jpg',
        medium: './assets/Cuadros/Collage.jpg',
        big: './assets/Cuadros/Collage.jpg',
        description: "Susana. 122x122 cm.",
      },
      {
        small: './assets/Cuadros/thumbs/collagealargado.jpg',
        medium: './assets/Cuadros/collagealargado.jpg',
        big: './assets/Cuadros/collagealargado.jpg',
        description: "Collage Segundo. 122x60 cm.",
      },
      {
        small: './assets/Cuadros/daVinci.jpg',
        medium: './assets/Cuadros/big/daVinci.jpg',
        big: './assets/Cuadros/daVinci.jpg',
        description: "DaVinci. 122x122 cm.",
      },
      {
        small: './assets/Cuadros/thumbs/Globo.jpg',
        medium: './assets/Cuadros/big/Globo.jpg',
        big: './assets/Cuadros/Globo.jpg',
        description: "Globo. 122x100 cm.",
      },
      {
        small: './assets/Cuadros/big/huracan.jpg',
        medium: './assets/Cuadros/big/huracan.jpg',
        big: './assets/Cuadros/huracan2.jpg',
        description: "Huracán. 2 x 60x60 cm.",
      },
      {
        small: './assets/Cuadros/thumbs/pareja1.jpg',
        medium: './assets/Cuadros/big/pareja1.jpg',
        big: './assets/Cuadros/pareja1.jpg',
        description: "Pareja. 2 x 122x45 cm.",
      },
      {
        small: './assets/Cuadros/skyline.jpg',
        medium: './assets/Cuadros/big/skyline.jpg',
        big: './assets/Cuadros/skyline.jpg',
        description: "Ciudad. 122x90 cm.",
      },
      {
        small: './assets/Cuadros/thumbs/PaisajeNieve.jpg',
        medium: './assets/Cuadros/PaisajeNieve.jpg',
        big: './assets/Cuadros/PaisajeNieve.jpg',
        description: "Nieve. 122x100 cm.",
      },
      {
        small: './assets/Cuadros/thumbs/CECI.jpg',
        medium: './assets/Cuadros/CECI.jpg',
        big: './assets/Cuadros/CECI.jpg',
        description: "Globos. 100x50 cm.",
      },
      {
        small: './assets/Cuadros/full3.jpg',
        medium: './assets/Cuadros/big/full3.jpg',
        big: './assets/Cuadros/full3.jpg',
        description: "Pequeño paseo. 122x122 cm.",
      },
      {
        small: './assets/Cuadros/guerrero.jpg',
        medium: './assets/Cuadros/big/guerrero.jpg',
        big: './assets/Cuadros/guerrero.jpg',
        description: "Guerrero. 100x80 cm.",
      },
      {
        small: './assets/Cuadros/thumbs/espejito.jpg',
        medium: './assets/Cuadros/espejito.jpg',
        big: './assets/Cuadros/espejito.jpg',
        description: "Espejo. 25x25 cm.",
      },
      {
        small: './assets/Cuadros/thumbs/arboljaponesreenmarcado.jpg',
        medium: './assets/Cuadros/arboljaponesreenmarcado.jpg',
        big: './assets/Cuadros/arboljaponesreenmarcado.jpg',
        description: "Estampa sobre papel. 50x40 cm.",
      },
      {
        small: './assets/Cuadros/thumbs/Cristina.jpg',
        medium: './assets/Cuadros/big/cristina.jpg',
        big: './assets/Cuadros/Cristina.jpg',
        description: "Cristina. 120x100 cm.",
      },
      {
        small: './assets/Cuadros/thumbs/Angel.jpg',
        medium: './assets/Cuadros/Angel.jpg',
        big: './assets/Cuadros/Angel.jpg',
        description: "Ángel. 125x125 cm.",
      },
      {
        small: './assets/Cuadros/thumbs/OrangeCrush.jpg',
        medium: './assets/Cuadros/OrangeCrush.jpg',
        big: './assets/Cuadros/OrangeCrush.jpg',
        description: "OrangeCrush. 100x100 cm.",
      },
      {
        small: './assets/Cuadros/thumbs/dance1.jpg',
        medium: './assets/Cuadros/dance1.jpg',
        big: './assets/Cuadros/dance1.jpg',
        description: "Danza. 70x50 cm.",
      }
    ];
  }
}

