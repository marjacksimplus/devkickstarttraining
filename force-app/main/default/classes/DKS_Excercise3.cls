/*****************************************
*@Author            : Marvin Gatchalian
*@Company           : Simplus Inc
*@Description       : This class is for DevKickStart Training
*@Test Class        : DKS_Excercise3Test
*@Date:N/A
*@Revision:
*When                 Who                 What
*30-Sep-2022          Marvin Gatchalian   Created
*****************************************/

//Get Accounts to be updated
public with sharing class DKS_Excercise3 {

    public static String nullChecking(String typeNull) {
        if(typeNull != null) {
            return typeNull;
        }
        return null;
    }

    public static void dksGetAccount() {   
        List <Account> accountsToPass = new  List <Account>();
        String collectedInfo = '';

        List <Account> allAccounts = [SELECT Id, Name, DKS_Field1__c FROM Account WITH SECURITY_ENFORCED LIMIT 100];
        for (Account eachAccount :AllAccounts) {
            
            CollectedInfo =+ nullChecking(eachAccount.Name);
            CollectedInfo =+ nullChecking(eachAccount.AccountNumber);
            CollectedInfo =+ nullChecking(eachAccount.AccountNumber);
            CollectedInfo =+ nullChecking(eachAccount.AccountSource);
            CollectedInfo =+ nullChecking(eachAccount.CleanStatus);
            CollectedInfo =+ nullChecking(eachAccount.DunsNumber);
            CollectedInfo =+ nullChecking(eachAccount.Jigsaw);
            eachAccount.DKS_Field1__c = nullChecking(CollectedInfo);
        }

        //Call DKS_Excercise3.DKS_UpdateAccounts and pass the Account List
        
    }

}