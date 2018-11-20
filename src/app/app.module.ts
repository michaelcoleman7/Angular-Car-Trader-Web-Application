import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from "@angular/forms";
import { MatInputModule,MatCardModule,MatButtonModule,MatIconModule,MatToolbarModule,MatExpansionModule} from '@angular/material';
import { CreateCarAdComponent } from './create-car-ad/create-car-ad.component';
import {PostadvertService} from './services/postadvert.service';
import { ListAdDetailsComponent } from './list-ad-details/list-ad-details.component';
import { EditCarAdComponent } from './edit-car-ad/edit-car-ad.component';
import { LoginComponent } from './login/login.component';
import { ListUserAdsComponent } from './list-user-ads/list-user-ads.component';
import { HomeComponent } from './home/home.component';

//route paths for navigation
const appRoutes: Routes = [
  {
    path: 'createAd',
    component: CreateCarAdComponent
  },
  {
    path: 'listAds',
    component: ListAdDetailsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'userAds/:email',//route path with parameter
    component: ListUserAdsComponent
  },
  {
    path: 'editAds/:id',//route path with parameter
    component: EditCarAdComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '**', //catch all other routes not specified and redirect to home
    redirectTo: '/home', 
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CreateCarAdComponent,
    ListAdDetailsComponent,
    EditCarAdComponent,
    LoginComponent,
    ListUserAdsComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule
  ],
  providers: [PostadvertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
