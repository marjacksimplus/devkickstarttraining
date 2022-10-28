import { LightningElement, api, track, wire } from 'lwc';
import getAccountList from '@salesforce/apex/GetRecords.getAccountList';

export default class ActivityDecorator extends LightningElement {
    @api recordId;
    @api propName;
    firstName;
    lastName;
    @track records = [];
    @wire (getAccountList) recordList;

    onChangeHandler(event) {
        const { name, value } = event.target;
        if(name === 'firstName') {
            this.firstName = value;
        }
        if(name === 'lastName') {
            this.lastName = value;
        }
    }
    
    get uppercaseFullName() {
        return `${this.firstName} ${this.lastName}`.toUpperCase();
    }

    handleOnClick(event) {
        this.records.push(this.uppercaseFullName);
    }

    get concatenatedValue() {
        return `<b>RecordId:</b> ${this.firstName} - ${this.lastName} <b>Prop Name: </b> ${this.propName}`;
    }
}