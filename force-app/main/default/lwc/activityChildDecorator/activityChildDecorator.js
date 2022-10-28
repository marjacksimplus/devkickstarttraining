import { LightningElement, api } from 'lwc';

export default class ActivityChildDecorator extends LightningElement {
    @api firstName;
    @api lastName;
    @api concatenatedName;
}