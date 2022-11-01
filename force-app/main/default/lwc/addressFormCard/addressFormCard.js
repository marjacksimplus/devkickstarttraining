import { LightningElement, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class AddressFormCard extends LightningElement {
    address = { street: '', city: '', country: ''};
    toast = {};

    @track addressList = [];

    saveAddressHandler() {
        var isExist = false;

        if(this.addressList.length !== 0) {
            for(var i=0; i < this.addressList.length; i++) {
                const tmpAddress = JSON.parse(JSON.stringify(this.addressList[i]));
                if(tmpAddress.street === this.address.street && tmpAddress.city === this.address.city && tmpAddress.country === this.address.country) {
                    isExist = true;
                    break;
                }
            }
        }

        if(this.address.street === '' || this.address.city === '' || this.address.country === '' || isExist) {
            this.toast = { title: 'Address invalid', message: isExist ? 'Address already exist' : 'Address field(s) must not be empty', variant: 'error' };
            this.showNotification();
        } else {
            this.addressList.push({ ...this.address, index: this.addressList.length});
            this.toast = { title: 'Address saved', message: 'Successfully added address to list', variant: 'success' };
            this.showNotification();
            this.address = {};
        }
    }

    showNotification() {
        const evt = new ShowToastEvent(this.toast);
        this.dispatchEvent(evt);
    }

    onChangeHandler(event) {
        const { name, value } = event.target;
        this.address[name] = value;
    }
}