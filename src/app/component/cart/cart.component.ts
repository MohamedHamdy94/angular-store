import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  products: any = [];
  totalPrice !: number ;
  public total !: number;
  totalItem=0
  constructor( private cartService : CartService) {}
  ngOnInit(): void {
//     this.cartService.getProducts().subscribe(res=>{
//       this.products=res;
//       this.totalPrice===this.cartService.getTotalPrice()+20
//       this.total===this.cartService.getTotalPrice()
// console.log( this.totalPrice)
// console.log( this.total)

//     })
this.cartService.getProducts()
.subscribe(res=>{
  this.products = res;
  this.total = this.cartService.getTotalPrice();
  this.totalPrice = this.cartService.getTotalPrice()+20;

})
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
console.log(this.products.lenght)
  }

  removeProducts(product:any){
    this.cartService.removeCartItem(product)
  }
  emptyCart(){
    this.cartService.removeAllCart()
  }

  onChangeEventDown(event: any, product:any){
    console.log(event.target.value);
    this.cartService.removeCartItem(product)
  }
  onChangeEventUp(event: any, product:any){
    console.log(event.target.value);
    this.cartService.addtoCart(product)
  }
}
