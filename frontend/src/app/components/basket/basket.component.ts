import {Component, OnInit} from '@angular/core';
import {IProducts} from "../../models/products";
import {Subscription} from "rxjs";
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  basket: IProducts[];
  basketSubcription: Subscription;
  constructor(private ProductsService: ProductsService) { }

  ngOnInit() {
    this.basketSubcription = this.ProductsService.getProductFromBasket()
      .subscribe((data) => {
        this.basket = data;
      });
  }

  ngOnDestroy() {
    if (this.basketSubcription) this.basketSubcription.unsubscribe();
  }
}
