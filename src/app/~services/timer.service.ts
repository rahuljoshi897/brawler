import { Injectable } from '@angular/core';

import { Observable, timer } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class TimerService {

/**
 * Starts timer and returns elapsed time each second.
 */
  public start(): Observable<number> {
    return timer(1000,1000);
  }
}