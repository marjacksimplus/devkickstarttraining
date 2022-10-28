trigger LeadTrigger on Lead (before insert) {

    // before the action pass to the database
    LeadTriggerHandler.setLastNameToNew(Trigger.new);
    // after the action pass to the database

}