public with sharing class SampleController {
    @AuraEnabled
    public static List<Contact> getContactList(String id) {
        return [
            SELECT Id, Name , Title, Phone, Email
            FROM Contact
            WHERE AccountId =: id
            WITH SECURITY_ENFORCED
            LIMIT 10
        ];
    }
    @AuraEnabled
    public static List<Contact> getContactListWired(String id) {
        return [
            SELECT Id, Name , Title, Phone, Email
            FROM Contact
            WHERE AccountId =: id
            WITH SECURITY_ENFORCED
            LIMIT 10
        ];
    }
}
