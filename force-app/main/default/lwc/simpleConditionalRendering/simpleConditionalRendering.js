import { LightningElement } from 'lwc';

export default class SimpleConditionalRendering extends LightningElement {
  isFemale = false;
  isMale = false;

  maleAvatar = '';
  femaleAvatar = '';

  handleChangeFemale(event) {
    this.isFemale = event.target.checked;
    this.femaleAvatar = `https://randomuser.me/api/portraits/women/${Math.floor(Math.random() * 100)}.jpg`
  }
  handleChangeMale(event) {
    this.isMale = event.target.checked;
    this.maleAvatar = `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg`
  }
}