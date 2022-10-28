import { LightningElement, api } from 'lwc';

export default class LwcActivity extends LightningElement {
    @api recordId;
    @api propName;

    title = 'Input Form';

    firstName = '';
    lastName = '';

    onChangeHandler(event) {
        const { name, value } = event.target;
        if(name === 'firstName') {
            this.firstName = value;
        }
        if(name === 'lastName') {
            this.lastName = value;
        }
    }

    get getTitle() {
        return this.title.toUpperCase();
    }
}