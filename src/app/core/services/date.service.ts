import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DateService {
  public readonly dateFormats = [
    'MM/DD/YYYY',
    'DD/MM/YYYY',
    'YYYY/DD/MM',
    'YYYY/MM/DD',
  ];
  private _format$!: BehaviorSubject<string>;
  private _format!: string;
  constructor() {
    this._format$ = new BehaviorSubject<string>(this.dateFormats[0]);
    const [initialFormat] = this.dateFormats;
    this._format = initialFormat;
  }

  public get format(): string {
    return this._format;
  }

  public set format(value: string) {
    this._format$.next(value);
    this._format = value;
  }

  public get format$(): Observable<string> {
    return this._format$.asObservable();
  }
}
