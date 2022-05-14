import { Component, OnInit } from '@angular/core';
import { faStore } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  faStore = faStore;
  faMagnifyingGlass = faMagnifyingGlass;
  faCartShopping = faCartShopping;
public searchTerm:string='';
  public totalItem : number = 0;
    constructor(private cart: CartService) {}

  ngOnInit(): void {
    this.cart.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
  }
  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cart.search.next(this.searchTerm);
  }
}
