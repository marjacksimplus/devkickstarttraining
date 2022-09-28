public with sharing class MyClassMarvin {
    public MyClassMarvin() {
        String notASalesforceCodingStandard;

        List <Account> myAccounts = [SELECT Id, Name FROM Account  WITH SECURITY_ENFORCED Limit 10];
        //Marvin Changes

    }
}