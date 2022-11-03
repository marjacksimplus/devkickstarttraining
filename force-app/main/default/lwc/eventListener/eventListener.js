import { LightningElement } from 'lwc';

export default class EventListener extends LightningElement {
  searchValueDec;
  searchValueProg;
  constructor() {
    super();
    this.template.addEventListener("getsearchvalueprog",
    this.handleSearchValueProg);
  }
  handleSearchValueDec(event) {
    this.searchValueDec = event.detail;
  }
  handleSearchValueProg = (event) => {
    this.searchValueProg = event.detail;
  }
}