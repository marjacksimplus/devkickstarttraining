import { LightningElement, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class AddressModal extends LightningElement {
  address = { street: '', city: '', country: '', addressType: ''};
  toast = {};
  // comboValue = 'home';

  @track addressList = [];

  @track isModalOpen = false;
  openModal() {
      this.isModalOpen = true;
  }
  closeModal() {
      this.isModalOpen = false;
  }

  get addressOptions() {
    return [
      { label: 'Home', value: 'home' },
      { label: 'Office', value: 'office' },
      { label: 'Business', value: 'business' },
    ]
  };  

  onChangeHandler(event) {
    const { name, value } = event.target;
    this.address[name] = value;
  }

  get bgAddress() {
    
  }
  
  saveAddressHandler() {
      var isExist = false;

      if(this.addressList.length > 0) {
          for(var i=0; i < this.addressList.length; i++) {
              const tmpAddress = JSON.parse(JSON.stringify(this.addressList[i]));
              const currAddress = `${this.address.street}, ${this.address.city}, ${this.address.country}, ${this.address.addressType}`;
              console.log('compare', tmpAddress, currAddress);
              if(tmpAddress.loc === currAddress) {
                  isExist = true;
                  break;
              }
          }
      }

      if((!this.address.street || this.address.street === '') || 
        (!this.address.city || this.address.city === '') || 
        (!this.address.country || this.address.country === '') || 
        (!this.address.addressType || this.address.addressType === '') || isExist) {  
          this.toast = { title: 'Address invalid', message: isExist ? 'Address already exist' : 'Address field(s) must not be empty', variant: 'error' };
          this.showNotification();
        } else {
          this.addressList.push({
            loc: `${this.address.street}, ${this.address.city}, ${this.address.country}, ${this.address.addressType}`, 
            addressTypeClass: `clds-address-${this.address.addressType}`,
            index: this.addressList.length
          });
          this.toast = { title: 'Address saved', message: 'Successfully added address to list', variant: 'success' };
          this.showNotification();
          this.address = {};
          this.closeModal();
      }
  }

  showNotification() {
      const evt = new ShowToastEvent(this.toast);
      this.dispatchEvent(evt);
  }
}