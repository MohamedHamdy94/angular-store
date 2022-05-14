import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  faStar=faStar;
  faStarHalfStroke=faStarHalfStroke;
  products: any;
  searchKey: string = '';
  category: any;
  constructor(
    private router: Router,
    private api: ApiService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.api.getProducts().subscribe((res) => {
      this.products = res;
      this.category = res;
      this.products.forEach((a: any) => {
        if (
          a.category === "women's clothing" ||
          a.category === "men's clothing"
        ) {
          a.category = 'fashion';
        }
        Object.assign(a, { quantity: 1, total: a.price });
      });
      console.log(this.products);
    });

    this.cartService.search.subscribe((val: any) => {
      this.searchKey = val;
    });
  }
  addToCart(item: any) {
    this.cartService.addtoCart(item);
  }

  showDetails(card:any) {
    this.router.navigate(['/Details', card['id']]);

  }
}
