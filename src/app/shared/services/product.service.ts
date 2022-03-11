import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient
    ) { }
  public getProducts():Observable<object>{
    return this.http.get("http://localhost:4500/products");
  }

  public getProducts2(pattern:string):Observable<object>{
    return this.http.get("http://localhost:4500/products?type="+pattern);
  }
}
