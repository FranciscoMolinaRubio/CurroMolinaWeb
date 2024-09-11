import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from '@kolkov/ngx-gallery'; 
import 'hammerjs'; 

@Component({
  selector: 'app-tabla', 
  templateUrl: './tabla.component.html', 
  styleUrl: './tabla.component.css' 
})
export class TablaComponent implements OnInit { // Declaración de la clase del componente que implementa OnInit.
  galleryOptions: NgxGalleryOptions[] = []; // Propiedad que almacenará las opciones de la galería.
  galleryImages: NgxGalleryImage[] = []; // Propiedad que almacenará las imágenes de la galería.

  constructor() { } // Constructor vacío, no se realiza ninguna inicialización aquí.

  ngOnInit() { // Método de ciclo de vida de Angular, se ejecuta al inicializar el componente.

    // Configuración de las opciones de la galería para diferentes tamaños de pantalla.
    this.galleryOptions = [
      {
        width: '1200px', // Ancho de la galería.
        height: '1000px', // Altura de la galería.
        thumbnailsColumns: 7, // Número de columnas para los thumbnails (imágenes en miniatura).
        imageAnimation: NgxGalleryAnimation.Slide, // Animación de transición de las imágenes.
        preview: true,  // Habilita la vista previa de imágenes.
        previewCloseOnClick: true, // Cierra la vista previa al hacer clic.
        previewCloseOnEsc: true, // Cierra la vista previa al presionar Esc.
        previewZoom: true, // Habilita el zoom en la vista previa.
        previewRotate: true, // Habilita la rotación de la imagen en la vista previa.
        previewDescription: true, // Muestra la descripción de la imagen en la vista previa.
        arrowPrevIcon: 'fa fa-chevron-circle-left text-light', // Icono personalizado para la flecha de anterior.
        arrowNextIcon: 'fa fa-chevron-circle-right text-light', // Icono personalizado para la flecha de siguiente.
        thumbnailsMoveSize: 4 // Número de miniaturas que se desplazan al hacer clic en las flechas.
      },
      {
        breakpoint: 800, // Configuración para pantallas con ancho de menos de 800px.
        width: '100%', // Ancho de la galería ajustado al 100% del contenedor.
        height: '600px', // Altura de la galería.
        imagePercent: 80, // Porcentaje del espacio para la imagen.
        thumbnailsPercent: 20, // Porcentaje del espacio para los thumbnails.
        thumbnailsMargin: 20, // Margen entre los thumbnails.
        thumbnailMargin: 3, // Margen entre cada thumbnail.
        thumbnailsMoveSize: 4 // Número de miniaturas que se desplazan al hacer clic en las flechas.
      },
      {
        breakpoint: 480, // Configuración para pantallas con ancho de menos de 480px.
        preview: true, // Habilita la vista previa de imágenes.
        arrowPrevIcon: "fas fa-chevron-left", // Icono de la flecha de anterior para esta resolución.
        arrowNextIcon: "fas fa-chevron-right", // Icono de la flecha de siguiente para esta resolución.
        thumbnailMargin: 3, // Margen entre cada thumbnail.
        thumbnailsMoveSize: 4 // Número de miniaturas que se desplazan al hacer clic en las flechas.
      }
    ];

    // Definición de las imágenes que se mostrarán en la galería.
    this.galleryImages = [
      {
        small: './assets/Cuadros/thumbs/abedul.jpg',
        medium: './assets/Cuadros/abedul.jpg',
        big: './assets/Cuadros/abedul.jpg',
        description: "Abedules. 81x40 cm.",
      },
      {
        small: './assets/Cuadros/thumbs/abedules vertical.jpg',
        medium: './assets/Cuadros/abedules vertical.jpg',
        big: './assets/Cuadros/abedules vertical.jpg',
        description: "Bosque. 110x100 cm.",
      },
      {
        small: './assets/Cuadros/thumbs/AcantiladoRojo.jpg',
        medium: './assets/Cuadros/AcantiladoRojo.jpg',
        big: './assets/Cuadros/AcantiladoRojo.jpg',
        description: "Acantilado Rojo. 122x100 cm.",
      },
      {
        small: './assets/Cuadros/thumbs/Almendro.jpg',
        medium: './assets/Cuadros/Almendro.jpg',
        big: './assets/Cuadros/Almendro.jpg',
        description: "Almendro. 122x60 cm.",
      },
      {
        small: './assets/Cuadros/thumbs/arbolesplata2.jpg',
        medium: './assets/Cuadros/arbolesplata2.jpg',
        big: './assets/Cuadros/arbolesplata2.jpg',
        description: "Invierno sobre plata. 122x60 cm.",
      },
      {
        small: './assets/Cuadros/arbolmuerto.jpg',
        medium: './assets/Cuadros/arbolmuerto.jpg',
        big: './assets/Cuadros/arbolmuerto.jpg',
        description: "Árbol muerto Segundo. 122x100 cm.",
      },
      {
        small: './assets/Cuadros/thumbs/ARBOLACO3.jpg',
        medium: './assets/Cuadros/ARBOLACO3.jpg',
        big: './assets/Cuadros/ARBOLACO3.jpg',
        description: "Árbol muerto. 122x100 cm.",
      },
      {
        small: './assets/Cuadros/thumbs/chinesse.jpg',
        medium: './assets/Cuadros/big/transparente.jpg',
        big: './assets/Cuadros/chinesse.jpg',
        description: "Transparente. 122x40 cm.",
      },
      {
        small: './assets/Cuadros/peces.jpg',
        medium: './assets/Cuadros/peces.jpg',
        big: './assets/Cuadros/peces.jpg',
        description: "Dos peces. 120x45 cm.",
      },
      {
        small: './assets/Cuadros/thumbs/florJapo.jpg',
        medium: './assets/Cuadros/big/florjapo.jpg',
        big: './assets/Cuadros/florJapo.jpg',
        description: "Ramas y aluminio. 180x60 cm.",
      },
      {
        small: './assets/Cuadros/thumbs/ElenaTerminado.jpg',
        medium: './assets/Cuadros/ElenaTerminado.jpg',
        big: './assets/Cuadros/ElenaTerminado.jpg',
        description: "Elena. 130x50 cm.",
      },
      {
        small: './assets/Cuadros/thumbs/HojasOroPeq.jpg',
        medium: './assets/Cuadros/HojasOroPeq.jpg',
        big: './assets/Cuadros/HojasOroPeq.jpg',
        description: "Bosque sobre plata. 122x80 cm.",
      },
      {
        small: './assets/Cuadros/thumbs/Invierno.jpg',
        medium: './assets/Cuadros/Invierno.jpg',
        big: './assets/Cuadros/Invierno.jpg',
        description: "Invierno. 100x80 cm.",
      },
      {
        small: './assets/Cuadros/thumbs/magnoliodef3.jpg',
        medium: './assets/Cuadros/magnoliodef3.jpg',
        big: './assets/Cuadros/magnoliodef3.jpg',
        description: "Flor del magnolio. 100x60 cm.",
      },
      {
        small: './assets/Cuadros/thumbs/castaño.jpg',
        medium: './assets/Cuadros/castaño.jpg',
        big: './assets/Cuadros/castaño.jpg',
        description: "Castaño. 120x50 cm.",
      },
      {
        small: './assets/Cuadros/thumbs/petalos1.jpg',
        medium: './assets/Cuadros/petalos1.jpg',
        big: './assets/Cuadros/petalos1.jpg',
        description: "Pétalos. 73x60 cm.",
      },
      {
        small: './assets/Cuadros/thumbs/solo.jpg',
        medium: './assets/Cuadros/solo.jpg',
        big: './assets/Cuadros/solo.jpg',
        description: "Otoño. 125x60 cm.",
      },
      {
        small: './assets/Cuadros/thumbs/TheSinister.jpg',
        medium: './assets/Cuadros/TheSinister.jpg',
        big: './assets/Cuadros/TheSinister.jpg',
        description: "The Sinister. 81x40 cm.",
      },
      {
        small: './assets/Cuadros/ramas.jpg',
        medium: './assets/Cuadros/ramas.jpg',
        big: './assets/Cuadros/ramas.jpg',
        description: "Ramas. 81x40 cm.",
      },
      {
        small: './assets/Cuadros/BosqueOroB.jpg',
        medium: './assets/Cuadros/BosqueOroB.jpg',
        big: './assets/Cuadros/BosqueOroB.jpg',
        description: "Bosque dorado. 120x60 cm.",
      },
      {
        small: './assets/Cuadros/thumbs/bosquedorado.jpg',
        medium: './assets/Cuadros/bosquedorado.jpg',
        big: './assets/Cuadros/bosquedorado.jpg',
        description: "Sobre azul prusia. 81x40 cm.",
      },
      {
        small: './assets/Cuadros/manos2.jpg',
        medium: './assets/Cuadros/manos2.jpg',
        big: './assets/Cuadros/manos2.jpg',
        description: "Estudio de las manos de Susana #2. 70x70 cm.",
      },
      {
        small: './assets/Cuadros/RevisionTangYin.jpg',
        medium: './assets/Cuadros/big/revisionbig.jpg',
        big: './assets/Cuadros/RevisionTangYin.jpg',
        description: "Estudio de un pergamino de Tang Yin. 100x40 cm.",
      },
      {
        small: './assets/Cuadros/miniaturas.jpg',
        medium: './assets/Cuadros/miniaturas.jpg',
        big: './assets/Cuadros/miniaturas.jpg',
        description: "Estudios. 30x20 cm.",
      },
      {
        small: './assets/Cuadros/thumbs/cuadro1.jpg',
        medium: './assets/Cuadros/cuadro1.jpg',
        big: './assets/Cuadros/cuadro1.jpg',
        description: "Primero a la manera de Gloria Petyarre. 120x60 cm."
      },
      {
        small: './assets/Cuadros/Diosa.jpg',
        medium: './assets/Cuadros/big/diosacarpa.jpg',
        big: './assets/Cuadros/Diosa.jpg',
        description: "Diosa Carpa. 122x122 cm.",
      },
      {
        small: './assets/Cuadros/thumbs/hojas.jpg',
        medium: './assets/Cuadros/hojas.jpg',
        big: './assets/Cuadros/hojas.jpg',
        description: "Hojas. 70x40 cm.",
      },
      {
        small: './assets/Cuadros/thumbs/completo1.jpg',
        medium: './assets/Cuadros/completo1.jpg',
        big: './assets/Cuadros/completo1.jpg',
        description: "Nuevo bosque de abedules. 120x60 cm.",
      },
      {
        small: './assets/Cuadros/pequeña.jpg',
        medium: './assets/Cuadros/big/pequeñabig.jpg',
        big: './assets/Cuadros/pequeña.jpg',
        description: "Pequeña estampa japonesa. 35x35 cm.",
      }
    ];
  }
}
