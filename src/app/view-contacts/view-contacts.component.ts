import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-contacts',
  templateUrl: './view-contacts.component.html',
  styleUrls: ['./view-contacts.component.css']
})
export class ViewContactsComponent implements OnInit {

  contact: any = []
  errorMsg: string = ""
  group: string = ''

  constructor(private api: ApiService, private viewRouter: ActivatedRoute) {

  }
  ngOnInit(): void {
    //page open aaya vazhi task nadakan aanu ngoninit oru function vilikathe thenne chiya
    //get contact id form its url
    this.viewRouter.params.subscribe((data: any) => {
      // console.log(data);

      ///object ne vare reethiyil display chiyn aanu destructuring data object . destructuring{id}=objName not value   , normaly=> data={id:'ca4'}
      const { id } = data
      console.log(id);
      //api call to get perticular contact detail
      this.api.viewContact(id).subscribe({
        next: (response: any) => {//value ethil next il varum
          console.log(response);
          const { groupId } = response//destructure
          console.log(groupId);
          this.api.getGroup(groupId).subscribe((data:any)=>{
            console.log(data);
            const {name}= data
         this.group=name
         
            })
          this.contact = response

        },
        error: (err: any) => {
          console.log(err.message);
          this.errorMsg = err.message


        },
      })

    })

  }

}
