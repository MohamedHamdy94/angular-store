import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  getProducts(){
    return this.http.get<any>('https://fakestoreapi.com/products')
  }
    
  gitproductsById(id : any){
    return this.http.get(`https://fakestoreapi.com/products/${id}`);

  }
}
