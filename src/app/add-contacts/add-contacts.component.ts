import { Component, OnInit } from '@angular/core';
import { ContactSchema } from 'src/Models/contactSchema';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contacts',
  templateUrl: './add-contacts.component.html',
  styleUrls: ['./add-contacts.component.css']
})
export class AddContactsComponent implements OnInit{

  groups:any=[]

 contact:ContactSchema={}
 constructor (private api:ApiService ,private addContactRouter:Router){

  this.contact.groupId='Select A group'
 }
  ngOnInit(): void {
     this.api.getGroups().subscribe({
      next:(response:any)=> {
        console.log(response);
        this.groups=response
        
      },
      error:(err:any)=> {
        console.log(err.message);
         
      },
     })
   }
   addContact(contact:ContactSchema){
    //call api in service
    this.api.addContact(contact).subscribe({
      next:(Response:any)=>{
        //data added into server
        console.log(Response);
        //navigate to allContacts page
        this.addContactRouter.navigateByUrl("")

      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
   }
 
}
