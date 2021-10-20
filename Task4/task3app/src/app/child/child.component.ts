import { Input, Component } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() numberArray!: Array<number>;
  f1(): number {
    let maxNumber: number = Math.max(...this.numberArray);
    let minNumber: number = Math.min(...this.numberArray);
    return (Math.pow(maxNumber, 3) + Math.pow(minNumber, 3)) / 2;
  }
  f2(): number {
    let maxNumber: number = Math.max(...this.numberArray);
    let minNumber: number = Math.min(...this.numberArray);
    return Math.sqrt(Math.abs(maxNumber) * Math.abs(minNumber));
  }
}
