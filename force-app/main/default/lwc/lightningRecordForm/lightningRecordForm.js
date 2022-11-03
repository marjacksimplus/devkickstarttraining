import { LightningElement, api } from 'lwc';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';
import ACCOUNT_TYPE from '@salesforce/schema/Account.Type';
import ACCOUNT_OWNER from '@salesforce/schema/Account.OwnerId';

export default class LightningRecordForm extends LightningElement {
  @api recordId;
  @api objectApiName = 'Account';
  fields = [ACCOUNT_NAME, ACCOUNT_TYPE, ACCOUNT_OWNER];
}