import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { FilterPipe } from './pipes/filtre.pipe';
import { MovieService } from './services/movies.service';
import { DialogComponent } from './movies/dialog/dialog.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, MoviesComponent, FilterPipe, DialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent, DialogComponent],
})
export class AppModule {}
