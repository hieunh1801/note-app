import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  logs: string[] = [];

  constructor() {
  }

  public add(log: string) {
    this.logs.push(log);
  }

  public clear(log: string) {
    this.logs = [];
  }
}
