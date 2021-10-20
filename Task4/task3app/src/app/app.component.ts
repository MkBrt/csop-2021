import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  textareaContents: string = "";
  getNumberArray(): Array<number> {
    let lines: string[] = this.textareaContents.split("\n");
    let numbers: Array<number> = [];
    for (let line of lines) {
      let emptyOrNumericStrings: string[] = line.split(/[^\d.-]+/g);
      for (let emptyOrNumericString of emptyOrNumericStrings) {
        if (emptyOrNumericString) {
          let n: number = parseFloat(emptyOrNumericString);
          if (n || n === 0) {
            numbers.push(n);
          }
        }
      }
    }
    return numbers;
  }
}