import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotesComponent} from "./notes/notes.component";
import {NoteDetailComponent} from "./note-detail/note-detail.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: "notes",
    component: NotesComponent,
  },
  {
    path: "notes/detail",
    component: NoteDetailComponent,
  },
  { path: '',   redirectTo: '/notes', pathMatch: 'full' },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
