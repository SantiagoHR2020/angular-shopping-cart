import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../services/products.service'
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any = [];

  constructor(private pService:ProductsService, private cServ:ShoppingCartService){

  }

  ngOnInit(){
    this.products = this.pService.getProducts();
  }

  filter(e:any){
    this.products = this.pService.filter(e.target.value);
  }

  addToCart(item:any){
    this.cServ.add(item);
  }

  setFavorite(item:any){
    this.pService.toggleFavorite(item.id);
  }

}
