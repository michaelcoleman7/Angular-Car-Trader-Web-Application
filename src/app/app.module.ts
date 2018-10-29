import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from "@angular/forms";
import { MatInputModule,MatMenuModule,MatCardModule,MatButtonModule,MatIconModule,MatToolbarModule,MatExpansionModule} from '@angular/material';
import { CreateCarAdComponent } from './create-car-ad/create-car-ad.component';
import {PostadvertService} from './services/postadvert.service';

const appRoutes: Routes = [
  {
    path: 'createAd',
    component: CreateCarAdComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CreateCarAdComponent
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
    MatExpansionModule,
    MatMenuModule
  ],
  providers: [PostadvertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
