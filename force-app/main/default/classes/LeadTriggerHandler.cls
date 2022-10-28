public with sharing class LeadTriggerHandler {
    public static void setLastNameToNew(List<Lead> listLeadObject) {
        if(trigger.isBefore) {
            if(trigger.isInsert) {
                for(Lead newLeads : listLeadObject) {
                    newLeads.LastName = newLeads.LastName + ' (New)';
                }
            }
        }
    }
}