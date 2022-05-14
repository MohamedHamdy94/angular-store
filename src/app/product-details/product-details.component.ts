import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';
import { CartService } from '../service/cart.service';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: any;
  faStar=faStar;
  faStarHalfStroke=faStarHalfStroke;
  constructor(private api : ApiService, private cartService : CartService,    private active: ActivatedRoute    ) { }

  ngOnInit(): void {
    const ActiveId = this.active.snapshot.paramMap.get('id');

    this.api.gitproductsById(ActiveId).subscribe((val: any) => {
      this.product = val;
      console.log(val);
    });
  }
  addToCart(item: any){
    this.cartService.addtoCart(item);
  }

}
