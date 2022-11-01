import { LightningElement, api, wire, track } from 'lwc';
import accountsOpportunity from '@salesforce/apex/GetAccountsOpportunity.accountsOpportunity';


export default class OpportunitiesInAccount extends LightningElement {
    @api recordId;

    @wire (accountsOpportunity, {accId: '$recordId'}) data = false;
    
    // Declaring the columns in the datatable
    columns = [
        {
            label: 'Id',
            fieldName: 'Id'
        },
        {
            label: 'Name',
            fieldName: 'Name'
        },
        {
            label: 'Stage Name',
            fieldName: 'StageName'
        },
        {
            label: 'Close Date',
            fieldName: 'CloseDate'
        }
    ];
     
}