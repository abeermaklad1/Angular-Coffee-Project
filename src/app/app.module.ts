import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HeaderComponent} from './components/Header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SliderComponent } from './components/slider/slider.component';
import { ContainerComponent } from './components/container/container.component';
import { FooterComponent } from './components/Footer/footer.component';
import { LoginComponent } from './components/login/login.component';
//import { BrowserModule } from '@angular/platform-browser';
//import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SliderngComponent } from './components/sliderng/sliderng.component';
import { TableComponent } from './components/table/table.component';
import { LightboxDirective } from './Model/lightbox.directive';
import { ProfileComponent } from './components/profile/profile.component';
import { ReactiveformComponent } from './components/reactiveform/reactiveform.component';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import {HttpClientModule} from '@angular/common/http'
import { TestService } from './services/test.service';
import { DetailsComponent } from './components/details/details.component';
import { DetailProComponent } from './components/detail-pro/detail-pro.component';

let routes:Routes = [
  {path: '', component: SliderComponent},
  {path: 'home', component: SliderComponent},
  {path: 'profile', component: ProfileComponent},
  // {path: 'profile/:id', component: ProfileComponent},
  {path: 'login', component: ReactiveformComponent},
  {path: 'buy', component: LoginComponent},
  {path: 'details', component: DetailsComponent},
  {path: 'details/:id', component: DetailProComponent},

  {path: '**', component: ErrorComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    SliderComponent,
    ContainerComponent,
    FooterComponent,
    LoginComponent,
    SliderngComponent,
    TableComponent,
    LightboxDirective,
    ProfileComponent,
    ReactiveformComponent,
    ErrorComponent,
    DetailsComponent,
    DetailProComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes), 
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    TestService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
