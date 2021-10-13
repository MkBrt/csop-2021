import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  textareaContents: string = "";
  sumPrices(): number {
    let purchases: string[] = this.textareaContents.split("\n");
    let prices: Array<number> = [];
    for (let product of purchases) {
      let emptyOrNumericStrings: string[] = product.split(/[^\d.-]+/g);
      for (let emptyOrNumericString of emptyOrNumericStrings) {
        if (emptyOrNumericString) {
          let price: number = parseFloat(emptyOrNumericString);
          if (price) {
            prices.push(price);
            break;
          }
        }
      }
    }
    let sum: number = 0;
    for (let price of prices) {
      sum += price;
    }
    return sum;
  }
}