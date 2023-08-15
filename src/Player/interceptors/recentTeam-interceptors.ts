import {
  CallHandler,
  ExecutionContext,
  NestInterceptor,
  RequestTimeoutException,
  ServiceUnavailableException,
} from '@nestjs/common';
import { tap, of, catchError, throwError, timeout, TimeoutError } from 'rxjs';

export class RecentTeam implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler<any>) {
    const ctx = context.switchToHttp();

    const request = ctx.getRequest();
    const response = ctx.getResponse();

    // console.log('Line 13 ==> ', request);
    // console.log('Line 16 ==> ', response);

    if (request.headers['cache'] == 'true') {
      return of({
        message: 'returning cache value',
      });
    }

    return next.handle().pipe(
      timeout(2000),

      tap((result) => {
        console.log(result);
      }),

      catchError((err) => {
        if (err instanceof TimeoutError) {
          return throwError(() => new RequestTimeoutException());
        }
        return throwError(() => new ServiceUnavailableException());
      }),
    );
  }
}

// Observables are a design pattern and data structure commonly used in asynchronous programming.

// They are used to handle asynchronous streams of data, events, or values.

// Observables provide a way to represent sequences of data that can be observed over time.

// and they are commonly used in reactive programming.

// Observable:

// An observable is a representation of a sequence of values over time.

// It can emit values, errors, or a completion signal.

// Observables are like a stream of events that you can subscribe to in order to react to those events.

// RxJS,

// short for "Reactive Extensions for JavaScript," is a library.

// That provides a powerful set of tools for handling asynchronous and event-driven programming.

// Using observables.
