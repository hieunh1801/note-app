import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SharedModule} from "./shared/shared.module";
import { NoteDetailComponent } from './note-detail/note-detail.component';
import { NotesComponent } from './notes/notes.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {MaterialModule} from "./shared/material.module";
import { NoteDialogComponent } from './note-dialog/note-dialog.component';
import {MatFormFieldModule} from "@angular/material/form-field";


@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    NoteDetailComponent,
    NotesComponent,
    PageNotFoundComponent,
    NoteDialogComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MaterialModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
