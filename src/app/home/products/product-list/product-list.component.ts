import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product';
import { ProductService } from '../product.service';

@ Component({
    selector: 'pm-productlist',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent  implements OnInit {
    pageTitle: String = 'Product List';
    imageWidth: Number = 50;
    imageMargin: Number = 2 ;
    showImage: Boolean = false;
   _listFilter: String;
     errorMessage: String;

 get ListFilter(): String {
    return this._listFilter;
  }

 set listFilter(v: String) {
    this._listFilter = v;
    this.filteredProduct = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }
  filteredProduct: IProduct[];

  products: IProduct[] ;

      constructor(private productService: ProductService) {
      }

     toggleImage(): void {
        this.showImage = !this.showImage;
      }
      ngOnInit(): void {
       this.productService.getProduct().subscribe(
         products => {
         this .products = products,
        this.filteredProduct = this.products;
      },

         error => this.errorMessage = <any>error,

       );
      }
      onRatingClicked(message: String): void {
        this.pageTitle = 'Product List :' + message;
        }

        performFilter(filterBy: String): IProduct[] {
          filterBy = filterBy.toLocaleLowerCase();
          return this.products.filter (( product: IProduct) =>
          product.productName.toLocaleLowerCase().indexOf ('filterBy') !== -1);

        }

      }
