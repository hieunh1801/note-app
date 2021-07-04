import { Component, OnInit } from '@angular/core';
import { Note } from '../core/model/note';
import { NoteService } from '../core/service/note.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {
  NoteDialogComponent,
  NoteDialogOutput,
} from '../note-dialog/note-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
})
export class NotesComponent implements OnInit {
  notes?: Note[];
  currentNote?: Note;

  constructor(
    private noteService: NoteService,
    public dialog: MatDialog,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getNotes();
  }

  openSnackbar(message: string, action?: string) {
    this.snackbar.open(message, action);
  }
  openCreateNoteDialog(): void {
    const createNoteDialogRef = this.dialog.open(NoteDialogComponent, {
      width: '500px',
      data: {
        type: 'create',
      },
    });

    createNoteDialogRef.afterClosed().subscribe((result: NoteDialogOutput) => {
      if (result?.type === 'create') {
        this.createNote(result.note);
      }
    });
  }

  openUpdateNoteDialog(note: Note): void {
    this.currentNote = note;
    const updateNoteDialogRef = this.dialog.open(NoteDialogComponent, {
      width: '500px',
      data: {
        type: 'update',
        note: this.currentNote,
      },
    });
    updateNoteDialogRef.afterClosed().subscribe((result: NoteDialogOutput) => {
      if (result?.type === 'update') {
        this.updateNote(result.note);
      }
    });
  }
  getNotes(): void {
    this.noteService.getAll().subscribe((notes) => {
      this.notes = notes;
    });
  }
  createNote(note: Note): void {
    this.noteService.create(note).subscribe((note) => {
      this.getNotes();
      this.openSnackbar(note.title, 'created');
    });
  }
  updateNote(note: Note): void {
    this.noteService.update(note).subscribe((note) => {
      this.getNotes();
      this.openSnackbar(note.title, 'updated');
    });
  }
}
