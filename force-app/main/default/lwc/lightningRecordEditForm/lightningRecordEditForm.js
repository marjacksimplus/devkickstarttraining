import { LightningElement, api } from 'lwc';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';
import ACCOUNT_REVENUE from '@salesforce/schema/Account.AnnualRevenue';
import ACCOUNT_PHONE from '@salesforce/schema/Account.Phone';


export default class LightningRecordEditForm extends LightningElement {
  @api recordId;
  @api objectApiName = 'Account';
  nameField = ACCOUNT_NAME;
  accountRevenueField = ACCOUNT_REVENUE;
  phoneField = ACCOUNT_PHONE;

  handleSuccess(event) {
    alert('created new record', event.detail.id);
  }
  handleSubmit(event) {
    event.preventDefault();
    const fields = event.detail.fields;
    console.log(JSON.stringify(event.detail));
    if(!fields.AnnualRevenue) {
      fields.AnnualRevenue = 10000;
    } 
    this.template.querySelector('lightning-record-edit-form').submit(fields);
  }
}