import { Injectable } from '@angular/core';
import { IProduct } from './product';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
@Injectable({
providedIn: 'root'
})
export class ProductService {
    private productUrl = 'api/products/products.json';

    constructor(private http: HttpClient) { }


    getProduct(): Observable <IProduct[]> {

        return this.http.get<IProduct[]>(this.productUrl).pipe(tap(data =>
            console.log('All:' + JSON.stringify(data))),
            catchError(this.handelError)
        );

    }
    private handelError(err: HttpErrorResponse) {

        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error occured: ${err.error.message}`;
        } else {
          errorMessage = `server returned code : ${err.status},error messege is : ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);

    }


}
