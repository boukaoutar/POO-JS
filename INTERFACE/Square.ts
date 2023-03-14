import { Shape } from './Shape';

export class Square implements Shape {
  constructor(public color: string, public side: number) {}
  
  area() {
    return this.side * this.side;
  }
}