import { LightningElement } from 'lwc';

export default class SampleLoopingIterator extends LightningElement {
  listAccounts = [
    {
      Id: '101',
      Name: 'Chistiano Ronaldo',
      sldsClass: 'slds-badge_inverse slds-m-right_small'
    },
    {
      Id: '102',
      Name: 'Chistian Ronald',
      sldsClass: 'slds-badge_inverse slds-m-right_small'
    },
    {
      Id: '103',
      Name: 'XTian Ronald',
      sldsClass: 'slds-theme_success slds-m-right_small'
    }
  ];
}