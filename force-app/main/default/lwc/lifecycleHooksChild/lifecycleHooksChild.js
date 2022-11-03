import { LightningElement, api } from 'lwc';

export default class LifecycleHooksChild extends LightningElement {
  @api itemName = 'new item here';
  constructor() {
    super();
    console.log('Child: constructor enter');
  }
  connectedCallback() {
    console.log('Child: connectedCallback enter');
    throw new Error('error thrown!');
  }
  renderedCallback() {
    console.log('Child: renderedCallback enter');
  }
  disconnectedCallback() {
    console.log('Child: disconnectedCallback enter');
  }
  errorCallback(error, stack) {
    console.log('Child: errorCallback enter');
  }
}