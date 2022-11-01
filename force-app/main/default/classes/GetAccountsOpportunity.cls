public with sharing class GetAccountsOpportunity {

    @AuraEnabled(cacheable=true)
    public static List<Opportunity> accountsOpportunity(String accId) {
        Account acc = [SELECT Id, (SELECT Id, Name, StageName, CloseDate FROM Opportunities) FROM Account WHERE ID =: accId WITH SECURITY_ENFORCED];
        System.debug('account -------------------------' + acc.Opportunities);
        return acc.Opportunities;
    }
}
