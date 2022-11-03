import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';

const FIELDS = [
  'Account.Name',
  'Account.AnnualRevenue',
  'Account.Phone'
];

export default class WireService extends LightningElement {
  @api recordId;

  @wire(getRecord, { recordId: '$recordId', fields: FIELDS }) account;

  get name() {
    return this.account.data.fields.Name.value;
  }
  get revenue() {
    return this.account.data.fields.AnnualRevenue.value;
  }
  get phone() {
    return this.account.data.fields.Phone.value;
  }
}