import { LightningElement } from 'lwc';

export default class AugmentorPToC extends LightningElement {
  startCounter = 0;

  handleStartChange(event) {
    this.startCounter = parseInt(event.target.value);
  }

  handleMaximizeCounter() {
    this.template.querySelector('c-numberator-c-top').maximizeCounter();
  }
}