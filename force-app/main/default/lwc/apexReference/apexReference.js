import { LightningElement, api, track, wire } from 'lwc';
// import { getContactList, getContactListWired} from '@salesforce/apex/SampleController';
import getContactList from '@salesforce/apex/SampleController.getContactList'
import getContactListWired from '@salesforce/apex/SampleController.getContactListWired'

export default class ApexReference extends LightningElement {
  @api recordId;
  @track contacts;
  wiredContacts;
  error;

  retrieveContactRecords() {
    getContactList({ id: this.recordId })
      .then( res => {
        console.log('success');
        this.contacts = res;
      })
      .catch( err => {
        this.error = err;
        console.log('there was an error');
      })
  }
  @wire(getContactListWired, { id: '$recordId'})
  retrieveContactRecords({ data, error }) {
    if(data) {
      this.wiredContacts = data;
      this.error = undefined;
    } else if(error) {
      this.error = error;
      this.wiredContacts = undefined
    }
  }
}