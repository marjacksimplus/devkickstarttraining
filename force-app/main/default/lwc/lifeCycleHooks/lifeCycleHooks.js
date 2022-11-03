import { LightningElement, api } from 'lwc';

export default class LifeCycleHooks extends LightningElement {
  @api itemName = 'new item here';
  constructor() {
    super();
    console.log('Parent: constructor enter');
  }
  connectedCallback() {
    console.log('Parent: connectedCallback enter');
  }
  renderedCallback() {
    console.log('Parent: renderedCallback enter');
  }
  disconnectedCallback() {
    console.log('Parent: disconnectedCallback enter');
  }
  errorCallback(error, stack) {
    console.log('Parent: errorCallback enter');
    throw error ('Error parent');
  }
  
  handleClick() {
    this.showChild = false;
  }
}