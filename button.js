import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class Button extends NavigationMixin(LightningElement){
    navigatetoNewApplicant(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                actionName: "new",
                objectApiName: "Applicant__c"
            }
        });
    }
    navigatetoEditApplicant(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                actionName: "list",
                objectApiName: "Applicant__c"
            }
        });
    }
    navigatetoNewPosition(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                actionName: "new",
                objectApiName: "Open_Position__c"
            }
        });
    }
    navigatetoEditPosition(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                actionName: "list",
                objectApiName: "Open_Position__c"
            }
        });
    }
    navigatetoNewInterviewer(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                actionName: "new",
                objectApiName: "Interviewer__c"
            }
        });
    }
    navigatetoEditInterviewer(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                actionName: "list",
                objectApiName: "Interviewer__c"
            }
        });
    }
    scheduleInterview(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                actionName: "new",
                objectApiName: "Schedule_Interview__c"
            }
        });
    }
    viewinterviewes(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                actionName: "list",
                objectApiName: "Schedule_Interview__c"
            }
        });
    }
}