import { Injectable } from '@angular/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import * as moment from 'moment';
import { DateService } from '../core/services/date.service';

@Injectable()
export class CustomDateAdapter extends MomentDateAdapter {
  constructor(private dateService: DateService) {
    super('en-US');
    dateService.format$.subscribe();
  }
  public override format(date: moment.Moment): string {
    const { format } = this.dateService;

    return date.format(format);
  }
}
