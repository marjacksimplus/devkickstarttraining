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
    // Returns an empty string if the info is null
    public static String returnEmptyIfNull(String info){
        if(info == null) {
            return '';
        }
        return info;
    }
    public static void dksGetAccount () {   
        List <Account> accountsToPass = new  List <Account>();
        String collectedInfo = '';

        List <Account> allAccounts = [SELECT Id, Name FROM Account WITH SECURITY_ENFORCED LIMIT 100];
        for (Account eachAccount :allAccounts) {
            
                
                CollectedInfo =+ returnEmptyIfNull(eachAccount.Name);
                CollectedInfo =+ returnEmptyIfNull(eachAccount.AccountNumber);
                CollectedInfo =+ returnEmptyIfNull(eachAccount.AccountNumber);
                CollectedInfo =+ returnEmptyIfNull(eachAccount.AccountSource);
                CollectedInfo =+ returnEmptyIfNull(eachAccount.CleanStatus);
                CollectedInfo =+ returnEmptyIfNull(eachAccount.DunsNumber);
                CollectedInfo =+ returnEmptyIfNull(eachAccount.Jigsaw);

                eachAccount.DKS_Field1__c = CollectedInfo;
            
        }

        //Call DKS_Excercise3.DKS_UpdateAccounts and pass the Account List
        
    }

}