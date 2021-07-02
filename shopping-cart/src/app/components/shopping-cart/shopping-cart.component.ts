import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from '../../services/shopping-cart.service'

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  items = [] as any;
  totalPrice = 0;

  constructor(private cartService:ShoppingCartService) { }

  ngOnInit(): void {
    this.cartService.getItems().subscribe((data) => {
      this.items = data;
      let total = 0;
      this.items.forEach(i => {
        total += i.price;
      })
      this.totalPrice = total;
    })
  }
}


