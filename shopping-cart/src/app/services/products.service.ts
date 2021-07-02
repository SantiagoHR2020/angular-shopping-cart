import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  products = [
    {id:1, title:'Tv', price: 1000.00, favorite:true, category: 'Electronics'},
    {id:2, title:'Computer', price: 1000.00, favorite:true, category: 'Electronics'},
    {id:3, title:'Cell Phone', price: 700.00, favorite:false, category: 'Electronics'},
    {id:4, title:'Xbox', price: 500.00, favorite:false, category: 'Electronics'},
    {id:5, title:'Bed', price: 700.00, favorite:true, category:'Furniture'},
    {id:6, title:'Table', price: 500.00, favorite:true, category:'Furniture'},
    {id:7, title:'Desk', price: 200.00, favorite:false, category:'Furniture'},
    {id:8, title:'Couch', price: 800.00, favorite:false, category:'Furniture'}
];

getProducts()
{
    return this.products;
}

filter(category:string)
{
    return this.products.filter(items => items.category === category);
}

toggleFavorite(id:number)
{
    this.products.forEach(item => {
        if(item.id === id)
        {
            item.favorite = !item.favorite;
        }
    })
}

}
