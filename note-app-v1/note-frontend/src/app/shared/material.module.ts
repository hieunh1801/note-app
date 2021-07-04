import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
@NgModule({
  exports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatDialogModule,
    MatChipsModule,
    MatInputModule,
    MatSnackBarModule,
  ],
})
export class MaterialModule {}
