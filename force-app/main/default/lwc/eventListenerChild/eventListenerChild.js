import { LightningElement } from 'lwc';

export default class EventListenerChild extends LightningElement {
  searchKey;
  handleChangeDeclarative(event) {
    this.searchKey = event.target.value;
    const searchEvent = new CustomEvent("getsearchvaluedec", {
      detail: this.searchKey
    });
    this.dispatchEvent(searchEvent);
  }

  handleChangeProgrammative(event) {
    this.searchKey = event.target.value;
    const searchEvent = new CustomEvent("getsearchvalueprog", {
      detail: this.searchKey,
      bubbles: tru
    });
    this.dispatchEvent(searchEvent);
  }
}