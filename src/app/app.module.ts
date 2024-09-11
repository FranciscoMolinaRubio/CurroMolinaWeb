import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JavascriptService } from './javascript.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { CristalComponent } from './cristal/cristal.component';
import { TablaComponent } from './tabla/tabla.component';
import { GrafitoComponent } from './grafito/grafito.component';
import { MixtaComponent } from './mixta/mixta.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { GaleriaComponent } from './galeria/galeria.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbCollapseModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

const appRoutes: Routes = [

  { path: '', component: InicioComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'about', component: AboutComponent },
  { path: 'cristal', component: CristalComponent },
  { path: 'tabla', component: TablaComponent },
  { path: 'grafito', component: GrafitoComponent },
  { path: 'mixta', component: MixtaComponent },
  { path: 'galeria', component: GaleriaComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    ContactoComponent,
    FooterComponent,
    CristalComponent,
    TablaComponent,
    GrafitoComponent,
    MixtaComponent,
    GaleriaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    NgImageSliderModule,
    FontAwesomeModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxGalleryModule,
    HttpClientModule,
    NgbCollapseModule,  // Agrega el módulo NgbCollapseModule aquí
    NgbDropdownModule ,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right'
    }),
  ],
  providers: [
    JavascriptService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
