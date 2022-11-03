import { LightningElement, api } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import ACCOUNT_NUMBER from '@salesforce/schema/Account.OwnerId';

export default class LightningRecordViewForm extends LightningElement {
  @api recordId;
  @api objectApiName = 'Account';
  nameField = NAME_FIELD;
  ownerId = ACCOUNT_NUMBER;
}