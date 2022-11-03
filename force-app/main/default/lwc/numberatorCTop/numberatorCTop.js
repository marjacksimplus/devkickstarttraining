import { LightningElement } from 'lwc';

export default class NumberatorCTop extends LightningElement {
  counter = 0;

  handleIncrement() {
    this.counter++;
  }
  handleDecrement() {
    this.counter--;
  }

  handleMultiply(event) {
    const factor = event.detail;
    console.log('multiply', event);
    this.counter *= factor; 
  }
}