trigger PurchaseOrderRequestTrigger on Purchase_Order_Request__c (before insert, before update, after insert, after update) {
    if(Trigger.isBefore) { 
        if(Trigger.isInsert) {
            PurchaseOrderRequestTriggerHandler.createPOROfAccount(Trigger.new, Trigger.oldMap);
        }
        if(Trigger.isUpdate) {
            PurchaseOrderRequestTriggerHandler.updateOfPORStatusToComplete(Trigger.new, Trigger.oldMap);
            PurchaseOrderRequestTriggerHandler.statusPORPOMchangedToClosed(Trigger.new, Trigger.oldMap);
        }
	}
}