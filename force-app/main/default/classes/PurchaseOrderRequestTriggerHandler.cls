public with sharing class PurchaseOrderRequestTriggerHandler {
    // Activity 1
    public static void updateOfPORStatusToComplete(List<Purchase_Order_Request__c> listPOR, Map<ID, Purchase_Order_Request__c> oldMapPOR) {
        for(Purchase_Order_Request__c porItem : listPOR) {
            if(porItem.Status__c != oldMapPOR.get(porItem.Id).Status__c && porItem.Status__c == 'Completed') {
                porItem.Completed_Date__c = System.today();
            }
        } 
    }
    
    // Activity 5
    public static void createPOROfAccount(List<Purchase_Order_Request__c> listPOR, Map<ID, Purchase_Order_Request__c> oldMapPOR) {
        List<ID> accountId = new List<ID>();
        Map<ID, Purchase_Order_Request__c> mPurchaseOrderRequest = new Map<ID, Purchase_Order_Request__c>();
        for(Purchase_Order_Request__c por : listPOR) {
            if(por.Account__c != null) {
                mPurchaseOrderRequest.put(por.Account__c, por);
            }
        }
        
        
        for(Account newAcc : [SELECT Id, (SELECT Id, AccountId, Email FROM Contacts) FROM Account WHERE Id IN : mPurchaseOrderRequest.keySet()]) { 
            if(newAcc.Contacts.isEmpty()) {
               mPurchaseOrderRequest.get(newAcc.Id).addError('Unable to create Purchase Order Request, Account does not have contact');
            }
        }
    }
    
    // Activity 10
    public static void statusPORPOMchangedToClosed(List<Purchase_Order_Request__c> listPOR, Map<ID, Purchase_Order_Request__c> oldMapPOR) {
        List<Purchase_Order_Modification__c> pomStatusToUpdate = new List<Purchase_Order_Modification__c>();
        Map<ID, Purchase_Order_Request__c> mPurchaseOrderRequest = new Map<ID, Purchase_Order_Request__c>();
        for(Purchase_Order_Request__c por : listPOR) {
            if(por.Status__c != oldMapPOR.get(por.Id).Status__c && por.Status__c == 'Closed') {
                mPurchaseOrderRequest.put(por.Id, por);
            }
        }
        if(!mPurchaseOrderRequest.isEmpty()){
            for(Purchase_Order_Request__c newPOR : [SELECT Id, (SELECT Id, Status__c FROM Purchase_Order_Modification__r) FROM Purchase_Order_Request__c WHERE Id IN : mPurchaseOrderRequest.keySet()]) { 
                for(Purchase_Order_Modification__c newPOM : newPOR.Purchase_Order_Modification__r) {
                    pomStatusToUpdate.add(new Purchase_Order_Modification__c(
                    						Id = newPOM.Id,
                    						Status__c = 'Closed'));
                }
            }
            if(!pomStatusToUpdate.isEmpty()) {
                update pomStatusToUpdate;
            }
        }
    }
}