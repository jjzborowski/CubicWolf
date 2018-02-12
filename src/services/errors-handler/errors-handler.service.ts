import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class ErrorsHandlerService {

  constructor() {}

  HttpError(error: HttpErrorResponse) {
    switch (error.status) {
      case 404: {
        console.log('There is no project with given id');
      } break;
      default: {
        console.log('We encountered an unknown error');
      }
    }
  }

}
