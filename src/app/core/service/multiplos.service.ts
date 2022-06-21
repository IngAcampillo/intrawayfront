import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import {
  HttpClient,
  HttpEvent,
  HttpHeaders,
  HttpRequest,
} from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { RespuestaServicio } from './respuestaServicio';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class MultiplosService extends RestService<RespuestaServicio,String>{

  constructor(public  http:HttpClient) {
    super("fizzbuzz", "id", http);
  }


  
 
}
