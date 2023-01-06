import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CalendarHelper {

  constructor(
  ) { }

  addDays(date: Date, days: number): Date {
    date.setDate(date.getDate() + days);
    return date;
  }
}
