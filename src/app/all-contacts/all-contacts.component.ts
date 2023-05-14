import { Component,OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-all-contacts',
  templateUrl: './all-contacts.component.html',
  styleUrls: ['./all-contacts.component.css']
})
export class AllContactsComponent implements OnInit{
//property
  allContacts:any=[]
  isLoading:boolean= true
  errorMsg:string =''
  searchKey:string=''
  
  constructor(private api:ApiService){

  }
  ngOnInit(): void {
  this.getAllContacts()
  }
  getAllContacts(){
    this.api.getAllContacts().subscribe({
      next:(response:any)=>{//next only works in response status 200 -success 
        console.log(response);
       setTimeout(() => {
        this.allContacts=response
        this.isLoading= false
       },500 );
      },
      error:(err:any)=>{
        console.log(err.message);
        this.errorMsg=err.message
        this.isLoading=false
      }
    }
    )
  }
  deleteContact(id:any){
    this.api.deleteContact(id).subscribe({
      next:(response:any)=>{//200 response 
        this.getAllContacts()
      }
    })
  }

}
