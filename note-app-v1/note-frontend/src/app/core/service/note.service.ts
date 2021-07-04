import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {LoggerService} from "./logger.service";
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {Note} from "../model/note";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  backendUrl: string = environment.backendUrl;

  private static handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

  constructor(private http: HttpClient, private logger: LoggerService) {

  }

  getAll(): Observable<Note[]> {
    const url = this.backendUrl + "/notes";
    return this.http.get<Note[]>(url).pipe(
      retry(3),
      catchError(NoteService.handleError)
    );
  }

  getById(id: number): Observable<Note> {
    const url = this.backendUrl + `/notes/${id}`;
    return this.http.get<Note>(url).pipe(
      retry(3),
      catchError(NoteService.handleError)
    );
  }

  create(note: Note): Observable<Note> {
    const url = this.backendUrl + `/notes`;
    return this.http.post<Note>(url, note).pipe(
      catchError(NoteService.handleError)
    );
  }

  update(note: Note): Observable<Note> {
    const id = note.id;
    if (!id) {
      throwError("Not found id").pipe(
        catchError(NoteService.handleError)
      )
      ;
    }

    const url = this.backendUrl + `/notes/${id}`;
    return this.http.put<Note>(url, note).pipe(
      catchError(NoteService.handleError)
    );
  }

  delete(id: number): Observable<Note> {
    const url = this.backendUrl + `/notes/${id}`;
    return this.http.delete<Note>(url).pipe(
      catchError(NoteService.handleError)
    );
  }
}
