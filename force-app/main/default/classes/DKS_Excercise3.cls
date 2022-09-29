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
    public static void DKS_GetAccount () {   
        List <Account> accountsToPass = new  List <Account>();
        String CollectedInfo = '';

        List <Account> AllAccounts = [SELECT Id, Name FROM Account LIMIT 100];
        for (Account eachAccount :AllAccounts) {
            
            If (eachAccount.Name != null) {
                CollectedInfo =+ eachAccount.Name;
            }
            If (eachAccount.AccountNumber != null) {
                CollectedInfo =+ eachAccount.AccountNumber;
            }
            If (eachAccount.Site != null) {
                CollectedInfo =+ eachAccount.AccountNumber;
            }
            If (eachAccount.AccountSource != null) {
                CollectedInfo =+ eachAccount.AccountSource;
            }
            If (eachAccount.CleanStatus != null) {
                CollectedInfo =+ eachAccount.CleanStatus;
            }
            If (eachAccount.DunsNumber != null) {
                CollectedInfo =+ eachAccount.DunsNumber;
            }
            If (eachAccount.Jigsaw != null) {
                CollectedInfo =+ eachAccount.Jigsaw;
            }

            if (CollectedInfo != null ) {
                eachAccount.DKS_Field1__c = CollectedInfo;
            }
            
        }

        //Call DKS_Excercise3.DKS_UpdateAccounts and pass the Account List
        
    }

}