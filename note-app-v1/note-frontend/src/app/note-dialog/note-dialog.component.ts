import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Note } from '../core/model/note';

export interface NoteDialogInput {
  type: 'create' | 'update';
  note?: Note;
}

export interface NoteDialogOutput {
  type: 'create' | 'update';
  note: Note;
}

@Component({
  selector: 'app-note-dialog',
  templateUrl: './note-dialog.component.html',
  styleUrls: ['./note-dialog.component.scss'],
})
export class NoteDialogComponent implements OnInit {
  noteForm: FormGroup = this.formBuilder.group({
    title: ['', Validators.required],
    content: ['', Validators.required],
  });

  constructor(
    public dialogRef: MatDialogRef<NoteDialogComponent>,
    public formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public dialogInput?: NoteDialogInput
  ) {}

  ngOnInit(): void {
    const note = this.dialogInput?.note;
    const type = this.dialogInput?.type;
    console.log(this.dialogInput);
    if (type === 'update') {
      this.noteForm.setValue({
        title: note?.title,
        content: note?.content,
      });
    }
  }

  onClose(): void {
    this.dialogRef.close();
  }

  onCreate(): void {
    if (this.noteForm.valid) {
      const outputData: NoteDialogOutput = {
        type: 'create',
        note: {
          title: this.noteForm.value.title,
          content: this.noteForm.value.content,
        },
      };
      this.dialogRef.close(outputData);
    }
  }

  onUpdate(): void {
    if (this.noteForm.valid) {
      const outputData: NoteDialogOutput = {
        type: 'update',
        note: {
          id: this.dialogInput?.note?.id,
          title: this.noteForm.value.title,
          content: this.noteForm.value.content,
        },
      };
      this.dialogRef.close(outputData);
    }
  }
}
