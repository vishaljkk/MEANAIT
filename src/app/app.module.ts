import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VideocenterComponent } from './videocenter/videocenter.component';
import { VideolistComponent } from './videolist/videolist.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';
import {FormsModule} from '@angular/forms';
import { SafePipe } from './safe.pipe';
import { HttpClientModule } from '@angular/common/http';
import { VideoService } from './video.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VideocenterComponent,
    VideolistComponent,
    VideoDetailComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    VideoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
