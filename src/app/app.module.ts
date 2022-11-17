import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataHubModule } from './data-hub/data-hub.module';
import { HomeComponent } from './DataHub/home/home.component';
import { CreateComponent } from './DataHub/create/create.component';
import { EditComponent } from './DataHub/edit/edit.component';
import { AboutComponent } from './DataHub/about/about.component';
import { ResumeComponent } from './DataHub/resume/resume.component';
import { ContactComponent } from './DataHub/contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'flash-messages-angular';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateComponent,
    EditComponent,
    AboutComponent,
    ResumeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    DataHubModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FlashMessagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
