import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceServiceColisService {
  host="http://localhost:8080/"
  constructor(private client:HttpClient) { }
}
