import {Component, OnInit} from '@angular/core';
import {IProducts} from "../../models/products";
import {Subscription} from "rxjs";
import {ProductsService} from "../../services/products.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {DialogBoxComponent} from "../dialog-box/dialog-box/dialog-box.component";
import {BasketComponent} from "../basket/basket.component";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: IProducts[];
  productsSubscription: Subscription;
  canEdit: boolean = false;
  canView: boolean = false;
  constructor(private ProductsService: ProductsService, public dialog: MatDialog) { }

  ngOnInit() {
    this.canEdit = true;

    this.productsSubscription = this.ProductsService.getProducts().subscribe((data) => {
      this.products = data;
    })
  }

  addToBasket(product: IProducts) {
    // this.ProductsService.postProductToBasket(product).subscribe((data) => BasketComponent.basket.push(data))
  }

  deleteProduct(id: number) {
    this.ProductsService.deleteProduct(id).subscribe((data) =>
      this.products.find((item) => {
        if (id === item.id) {
          let idx= this.products.findIndex(((data) => data.id === id))
          this.products.splice(idx, 1);
        }
      }))
  }

  openDialog(): void {
    let dialogConfig = new MatDialogConfig();
    dialogConfig.width = '500px';
    dialogConfig.disableClose = true;
    const dialogRef = this.dialog.open(DialogBoxComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((data) => this.postData(data))
  }

  postData(data: IProducts) {
    this.ProductsService.postProduct(data).subscribe((data) => this.products.push(data))
  }

  ngOnDestroy() {
    if (this.productsSubscription) this.productsSubscription.unsubscribe();
  }
}
